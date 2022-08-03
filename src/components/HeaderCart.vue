<template>
<transition name="fade">
    <div v-show="$store.state.show" @click.self="showCart()" class="cartsummary">
        <div class="cartsummary__cart" >
          <h3>SHOPPING CART</h3>
            <div v-for="produto in productList" :key="produto.id" class="cartsummary__hero">
              <div class="cartsummary__img">
                  <img :src="require('@/assets/' + produto.img + '')" alt="Produto no carrinho">
              </div>
              <p>{{produto.title}} | Quantidade: {{produto.qty}}</p>
              <p>R${{produto.preco.toFixed(2)}}</p>
              <span class="cartsummary__remove" @click="removeProduct(produto)">Remover</span>
              </div>
              <fa icon="close" class="cartsummary__close-button" @click="showCart()">X</fa>
            <p v-if="productList == ''">Seu carrinho está vazio!</p>
            <p v-else>Total: R${{$store.state.total.toFixed(2)}}</p>
            <router-link v-if="productList != ''" 
            class="cartsummary__link" 
            to="/cart">CHECKOUT</router-link>
        </div>
    </div>
</transition>
</template>

<script>
export default {

methods:{
    removeProduct(prod){
      this.$store.commit('removeProduct', prod)
    },
    showCart(){
      document.body.style.overflow = 'auto'
      this.$store.commit('showCart')
    }
},
computed: {
  productList(){
    let produto = []
    this.$store.state.cart.forEach(element => {
      produto.push(element)
    });
    return produto;
  }
},
mounted(){
  this.$store.state.show = false
}

}
</script>

<style scoped>
.cartsummary{
    position:fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index:102;
    background: rgba(0, 0, 0, 0.315);
    height: 100vh;
}

.cartsummary__cart{
    position: absolute;
    z-index:103;
    right: 0;
    width: 35%;
    height: 100%;
    padding: 30px;
    background-color: #fff;
    overflow: auto;
}

.cartsummary__hero{
    width: 100%;
    padding-bottom: 30px ;
    border-bottom: .5px solid rgba(0, 0, 0, 0.219);
}

.fade-enter, .fade-leave-to{
  pointer-events: none;
}
.cartsummary__img{
  width: 100%;
  height: 200px;
  margin:20px 0;
  overflow:hidden;
}

.cartsummary__img img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cartsummary__img img:hover{
  transform: scale(1.1);
}


.cartsummary__link{
  display: block;
  margin:20px 0;
  width: fit-content;
  padding: 10px;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  background-color: rgb(0, 0, 0);
}

.cartsummary__link:hover{
  transform: scale(1.05);
}

.cartsummary__remove{
  color: rgb(46, 46, 46);
  text-decoration: underline;
  cursor: pointer;
}

.cartsummary__close-button{
  display: none;
  transform: scale(2);
}

  @media screen and (max-width: 950px) {

  .cartsummary__cart{
    position: fixed;
    right: 0;
    top:0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: none;
    padding: 50px;
  }
  .cartsummary__close-button{
    display: block;
    position: fixed;
    right: 30px;
    top: 30px;
  }
    .cartsummary__img{
    width: 50%;
    height: 200px;
    margin:20px 0;
    overflow:hidden;
  }
}
</style>