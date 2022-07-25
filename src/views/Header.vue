<template>
    <header class="header">
      <router-link to="/">MYCOFFEE</router-link>
      <div class="header__shopping">
        <fa class="header__icon" @click="showCart(true)" 
        icon="bag-shopping"></fa>
        <span class="header__cartlength">{{$store.state.cart.length}}</span>
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
    position: relative;
    padding: 5px;
    transform: scale(1.5);
    cursor:pointer;
  }

  .header__icon:hover{
    background-color: rgba(0, 0, 0, 0.171);
    border-radius: 10px;
  }

  .header__shopping{
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .header__cartlength{
    position: absolute;
    right: 7px;
    top: 15px;
    background-color: rgba(0, 0, 0, 0.589);
    color: white;
    padding: 0 5px;
    border-radius: 50%;
    z-index: 1;
  }

  a{
    text-decoration: none;
    color: #000;
    padding: 10px;
  }

  a:hover{
    background-color: rgba(0, 0, 0, 0.171);
    border-radius: 10px;
  }
</style>
