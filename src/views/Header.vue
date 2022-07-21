<template>
  <header class="header">
    <router-link to="/">MYCOFFEE</router-link>
    <router-link to="/cart"><fa icon="shopping-cart"/>{{$store.state.cart.length}}</router-link>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  .header{
    display: flex;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    background-color: #fff;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }

  a{
    text-decoration: none;
    color: black;
    padding: 10px;
  }

  a:hover{
    background-color: rgba(0, 0, 0, 0.192);
  }
</style>
