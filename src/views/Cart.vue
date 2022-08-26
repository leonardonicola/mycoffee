<template>
  <div class="cart">
    <div class="cart__products">
      <h1>Seu carrinho!</h1>
      <p v-if="cart == ''">Adicione produtinhos!</p>
      <div v-for="product in cart" :key="product.id" class="cart__item">
        <div class="cart__img">
          <img :src="require('@/assets/' + product.img + '')" alt="Produto no carrinho">
        </div>
        <div class="cart__infos">
          <p>{{product.title}} | Quantidade: {{product.qty}}</p>
          <p>{{product.price | price}}</p>
          <span class="cart__remove" @click.stop="removeProduct(product)">Remover</span>
        </div>
      </div>
    </div>
    <div class="cart__summary" v-if="cart != ''">
      <p>Subtotal: {{cartTotal | price}}</p>
      <p>Frete: R$20.00</p>
      <p>Total: {{(cartTotal + 20) | price}}</p>
      <button v-if="cart != ''">CHECKOUT</button>
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
  computed:{
    cart(){
      return this.$store.getters.cart
    },
    cartTotal(){
      return this.$store.getters.total
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