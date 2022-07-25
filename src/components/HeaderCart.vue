<template>
<transition name="fade">
    <div v-show="$store.state.show" @click.self="showCart()" class="cartsummary">
        <div class="cartsummary__cart" >
            <div v-for="produto in productList" :key="produto.id">
              <div class="cartsummary__img">
                  <img :src="require('@/assets/' + produto.img + '')" alt="Produto no carrinho">
              </div>
              <p>{{produto.title}} | Quantidade: {{produto.qty}}</p>
              <p>R${{produto.preco}}</p>
              <button @click="removeProduct(produto)">REMOVER 1 ITEM</button>
              </div>
              <fa icon="close" class="cartsummary__close-button" @click="showCart()">X</fa>
            <h3 v-if="productList == ''">Seu carrinho está vazio!</h3>
            <router-link v-else class="cartsummary__link" 
            @click.native="scrollToTop(); showCart()" to="/cart" >CHECKOUT</router-link>
        </div>
    </div>
</transition>
</template>

<script>
import {mapState} from 'vuex'
export default {

methods:{
    removeProduct(prod){
      this.$store.commit('removeProduct', prod)
    },
    scrollToTop() {
      window.scrollTo(0,0);
    },
    showCart(){
      this.$store.commit('showCart')
    }
},
computed: mapState({
     productList: state => state.cart
})

}
</script>

<style>
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
    z-index:103;
    right: 0;
    width: 30%;
    height: 100%;
    padding: 30px;
    background-color: #fff;
    overflow: auto;
}

.fade-enter, .fade-leave-to{
  pointer-events: none;
  opacity: 0;
}

.cartsummary__img img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cartsummary__img img:hover{
  transform: scale(1.1);
}

.cartsummary__img{
  width: 200px;
  height: 200px;
  margin:20px 0;
  overflow:hidden;
}

.cartsummary__link{
  display: block;
  margin:20px 0;
  width: fit-content;
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
}
</style>