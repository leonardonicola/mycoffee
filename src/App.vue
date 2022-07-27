<template>
  <div>
      <Header/>
        <transition name="fade">
          <router-view/>
        </transition>
  </div>
</template>

<script>
import Header from './views/Header.vue'
export default {
  components:{Header}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@100;400;900&display=swap');

*{
  box-sizing: border-box;
  transition: cubic-bezier(.25,.75,.5,1) 0.9s !important;
}

*::-webkit-scrollbar{
  width: 10px;
}

*::-webkit-scrollbar-track {
  background: #fff;        /* color of the tracking area */
}

*::-webkit-scrollbar-thumb {
  background-color: rgb(83, 83, 83);    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid #fff;  /* creates padding around scroll thumb */
}

body{
  font-family: 'Archivo', sans-serif;
  margin: 0 auto;
  overflow-x: hidden;
  height: 100vh;
}

html{
  scroll-behavior: smooth;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
