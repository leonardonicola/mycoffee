<template>
    <section class="first">
        <h1 >Seu café, só que mais maneiro.</h1>
        <div id="img" v-prlx.background="{
        direction: 'x',
        speed: 0.03
        }"></div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .first{
        position: relative;
        width: 100%;
        height: 100vh
    }
    .first__icon{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: scale(5);
    }
    div{
        background-image: url("../assets/mockupmain.jpg");
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    h1{
      
        margin: 80px 0;
        position: absolute;
        background-color: #d3c5b7;
        padding:2%;
    }
</style>