<template>
  <div class="cart">
    <div class="cart__products">
      <h1>Seu carrinho!</h1>
      <p v-if="$store.state.cart == ''">Adicione produtinhos!</p>
      <div v-for="produto in $store.state.cart" :key="produto.id" class="cart__item">
        <div class="cart__img">
          <img :src="require('@/assets/' + produto.img + '')" alt="Produto no carrinho">
        </div>
        <div class="cart__infos">
          <p>{{produto.title}} | Quantidade: {{produto.qty}}</p>
          <p>R${{produto.preco}}</p>
          <span class="cart__remove" @click.stop="removeProduct(produto)">Remover</span>
        </div>
      </div>
    </div>
    <div class="cart__summary" v-if="$store.state.cart != ''">
      <p>Subtotal: R${{$store.state.total.toFixed(2)}}</p>
      <p>Frete: R$20.00</p>
      <p>Total: R${{($store.state.total + 20).toFixed(2)}}</p>
      <button v-if="$store.state.cart != ''">CHECKOUT</button>
    </div>
  </div>
</template>

<script>
export default {
  
  methods:{
    removeProduct(prod){
      this.$store.commit('removeProduct', prod)
    }
  },
  mounted(){
    document.body.style.overflow = 'auto'
  }
}
</script>

<style>
.cart{
  display: grid;
  height: 100vh;
  grid-template-columns: 60% 40%;
  padding: 100px 50px;
}

.cart__products{
  display: grid;
  height: 50%;
}

.cart__item{
  display: flex;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  border-bottom: .5px solid rgba(0, 0, 0, 0.171);
}

.cart__summary{
  margin-top: 95px;
}

.cart__img{
  width: 40%;
  height: 200px;
  overflow: hidden;
  margin: 20px 0;
}

.cart img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cart button{
  width: 40%;
}

.cart__remove{
  color: rgb(46, 46, 46);
  text-decoration: underline;
  cursor: pointer;
}

@media screen and (max-width: 650px) {
  .cart{
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr;
    padding: 20px;
    margin: 50px 0;
  }
  .cart__summary{
    margin: 0;
  }
}
</style>