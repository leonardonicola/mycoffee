<template>
  <header>
    <div class="header">
      <router-link to="/">MYCOFFEE</router-link>
      <div class="header__shopping">
        <fa class="header__icon" @click="showCart" icon="shopping-cart"/>
        <p>{{this.$store.state.cart.length}}</p>
      </div>
   </div>
    <div v-if="show && productList != ''" class="header__cart">
        <div v-for="produto in productList" :key="produto.id">
          <div class="header__img">
            <img :src="require('@/assets/' + produto.img + '')" alt="Produto no carrinho">
          </div>
          <p>{{produto.title}} | Quantidade: {{produto.qty}}</p>
          <p>R${{produto.preco}}</p>
          <button @click="removeProduct(produto)">REMOVER 1 ITEM</button>
        </div>
        <router-link class="header__link" @click.native="scrollToTop(); showCart()" to="/cart" >CHECKOUT</router-link>
    </div>
  </header>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data(){
    return{
      show:false
    }
  },
  methods:{
    showCart(){
      this.show = !this.show
    },
    removeProduct(prod){
      this.$store.commit('removeProduct', prod)
    },
    scrollToTop() {
      window.scrollTo(0,0);
    }
  },
  computed: mapState({
    productList: state => state.cart
  })    
}

</script>

<style scoped>
  header{
    position: sticky;
    top: 0;
    z-index:99;
  }

  .header{
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 20px;
  }

  .header__icon{
    padding: 5px;
    transform: scale(1.5);
    cursor:pointer;
  }

  .header__icon:hover{
    background-color: rgba(0, 0, 0, 0.171);
  }

  .header__cart{
    position: absolute;
    z-index: 100;
    right: 20px;
    width: 30%;
    height: 400px;
    padding: 30px;
    background-color: #fff;
    overflow:auto;
    border: 0.5px solid black;
    box-shadow: 0 10px 9px rgba(0, 0, 0, 0.144);
    border-top: none
  }

  .header__img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .header__img img:hover{
    transform: scale(1.1);
  }

  .header__img{
    width: 200px;
    height: 200px;
    margin:20px 0;
    overflow:hidden;
  }

  .header__shopping{
    display: flex;
    align-items: center;
    gap: 20px;
  }

  a{
    text-decoration: none;
    color: #000;
    padding: 10px;
  }

  a:hover{
    background-color: rgba(0, 0, 0, 0.171);
  }

  .header__link{
    display: block;
    margin:20px 0;
    width: fit-content;
  }

  @media screen and (max-width: 950px) {
    .header__cart{
    position: fixed;
    z-index: 98;
    right: 0;
    top:70px;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: none;
    padding: 50px;
  }
  }
</style>
