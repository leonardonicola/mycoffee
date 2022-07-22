<template>
    <section class="first">
        <h1 v-prlx="{limit:{min:-50, max: 50}}">Seu café, só que mais maneiro.</h1>
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
    #img{
        background-image: url("../assets/mockupmain.jpg");
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    h1{
        position: absolute;
        width: fit-content;
        margin: 200px auto;
        left: 0;
        right: 0;
        font-weight: 900;
        font-size: 4em;
        text-align: center;
        padding:2%;
    }
</style>