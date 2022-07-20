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
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap');
body{
  font-family: 'Roboto Mono', Arial, monospace;
  margin: 0 auto;
  overflow-x: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
