<template>
    <section class="first">
        <h1 >Seu café, só que mais maneiro.</h1>
        <fa class="first__icon" icon="coffee"/>
        <div v-prlx.background="{
        direction: 'x',
        speed: 0.04
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
        height: 500px;
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
        position: absolute;
        background-color: #d3c5b7;
        padding:2%;
    }
</style>