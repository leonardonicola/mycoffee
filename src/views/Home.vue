<template>
    <main>
        <HeaderCart/>
        <Hero/>
        <fa id="icon" icon="coffee"/>
        <section class="products">
            <Products :id="1"/>
            <Products :id="2"/>
            <Products :id="0"/>
        </section>
        <Modal/>
    </main>
</template>

<script>
import Products from '../components/Products.vue'
import Hero from '../components/Hero.vue'
import HeaderCart from '../components/HeaderCart.vue'
import Modal from '../components/Modal.vue'
export default {
    components:{Hero, Products, HeaderCart, Modal}
}
</script>

<style scoped>

    main{
        background-color: #fff;
        padding-bottom: .5px;
    }

    h1{
        padding-left: 20px;
    }

    
    #icon{
        display: flex;
        margin: 0 auto;
        transform: scale(5);
    }
    .products{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 100px;
        gap: 30px;
        justify-items: center;
        align-items: center;
        background-color: #fff;
    }

    
    @media screen and (max-width: 950px) {
        .products{
            grid-template-columns: 1fr 1fr;
        }
    }

    @media screen and (max-width: 650px) {
        .products{
            grid-template-columns: 1fr;
        }
    }
</style>