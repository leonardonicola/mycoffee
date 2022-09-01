<template>
    <header class="header" ref="header">
      <router-link to="/">MYCOFFEE</router-link>
      <div class="header__shopping">
        <fa class="header__icon" @click="toggleCart()" 
        icon="bag-shopping"></fa>
        <span class="header__cartlength">{{cartLength}}</span>
      </div>
   </header>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
  mounted () {
    window.addEventListener('scroll', this.handleScroll());
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll());
  },
  computed:{
    ...mapGetters('cart',['cartLength'])
  },
  methods:{
    ...mapMutations('cart',['toggleCart']),
    
    handleScroll(){
      var prevScrollpos;
      window.addEventListener('scroll', () => {
        var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        if (prevScrollpos > currentScrollPos) {
            this.$refs.header.style.top = "0";
        } else {
           this.$refs.header.style.top = "-50px";
        }
        prevScrollpos = currentScrollPos;
      })
    }
  }
}

</script>

<style>

  .header{
    display: flex;
    position: fixed;
    top: 0;
    z-index:99;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    padding: 30px; 
  }

  .header__icon{
    transform: scale(1.4);
    padding: 7px;
    cursor: pointer;
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
    right: 10px;
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
