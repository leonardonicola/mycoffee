<template>
  <div class="cart">
    <div class="cart__products">
      <h1>Seu carrinho!</h1>
      <p v-if="$store.state.cart == ''">Adicione produtinhos!</p>
      <div v-for="produto in $store.state.cart" :key="produto.id" class="cart__item">
        <div class="cart__img">
          <img :src="require('@/assets/' + produto.img + '')" alt="Produto no carrinho">
        </div>
        <p>{{produto.title}} | Quantidade: {{produto.qty}}</p>
        <p>R${{produto.preco}}</p>
        <button @click.stop="removeProduct(produto)">REMOVER 1 ITEM</button>
      </div>
    </div>
    <div class="cart__summary">
      <p>Subtotal: R${{$store.state.total.toFixed(2)}}</p>
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
  }
}
</script>

<style>
.cart{
  display: grid;
  height: 100vh;
  grid-template-columns: 60% 40%;
  padding: 20px;
  margin: 80px 0;
}

.cart__products{
  display: grid;
  height: 50%;
}

.cart__item{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 20px 0;
  padding: 10px;
}

.cart__img{
  width: 60%;
  height: 300px;
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
</style>