<template>
  <header>
    <div class="header">
      <router-link to="/">MYCOFFEE</router-link>
      <div class="header__shopping">
        <fa class="header__icon" @click="showCart(true)" 
        icon="shopping-cart"/>
        <span>{{$store.state.cart.length}}</span>
      </div>
   </div>
  </header>
</template>

<script>
export default {
  methods:{
    showCart(){
      this.$store.commit('showCart')
    }
  }
}

</script>

<style>
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
</style>
