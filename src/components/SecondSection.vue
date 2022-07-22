<template>
  <section class="second-section" v-prlx="{fromBottom:true, reverse:true, speed:0.3, limit:{min:-100, max: 30}}" >
    <div class="second-section__img right">
        <img src="../assets/copolistrado.jpg" alt="">
    </div>
    <div class="second-section__text right">
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Iste velit cum laudantium quasi deleniti molestiae facere magni amet 
        repudiandae omnis perferendis delectus dolor impedit, deserunt libero 
        assumenda minima eius accusantium.</p>
    </div>
    <div class="second-section__text left">
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
        Iste velit cum laudantium quasi deleniti molestiae facere magni amet 
        repudiandae omnis perferendis delectus dolor impedit, deserunt libero 
        assumenda minima eius accusantium.</p>
    </div>
    <div class="second-section__img left">
        <img src="../assets/mockupmain.jpg" alt="">
    </div>

  </section>
</template>

<script>
export default {

}
</script>

<style>
:root{
  --borda: .5px solid rgba(0, 0, 0, 0.514);
}
  .second-section{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    border-top: var(--borda);
    overflow: hidden;
    margin:60px 0;
  }

  .second-section__text{
    padding: 30px;
  }

  .second-section__img{
    overflow: hidden;
  }

  .second-section__img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .right,
  .left{
    color: white;
    background-color: rgba(0, 0, 0, 0.671);
  }
</style>