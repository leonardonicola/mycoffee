<template>
    <section class="first">
        <h1>Seu café, só que mais maneiro.</h1>
        <img src="../assets/mockupmain.png" alt="Mockup Main">
    </section>
</template>

<style scoped>
    .first{
        display: grid;
        grid-template-columns:1fr 1fr;
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }
    img{
        position: absolute;
        right: -5rem;
        bottom: 0;
        top: 0;
        margin: auto;
        width: 50rem;
        object-fit: cover;
        overflow: hidden;
    }
    h1{
        position: absolute;
        left: 6rem;
        bottom: 0;
        top: 0;
        margin: auto;
        width: 50%;
        height: fit-content;
        padding:2%;
        font-weight: 900;
        font-size: 3rem;
        text-align: center;
        z-index: 2;
        background: rgba( 255, 255, 255, 0.25 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }
</style>