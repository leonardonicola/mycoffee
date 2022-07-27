<template>
    <main>
        <HeaderCart/>
        <First/>
        <fa id="icon" icon="coffee"/>
        <section class="produtos">
            <Produtos :id="1"/>
            <Produtos :id="2"/>
            <Produtos :id="0"/>
        </section>
        <Modal/>
    </main>
</template>

<script>
import Produtos from '../components/Produtos.vue'
import First from '../components/First.vue'
import HeaderCart from '../components/HeaderCart.vue'
import Modal from '../components/Modal.vue'
export default {
    components:{First, Produtos, HeaderCart, Modal}
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
    .produtos{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 100px;
        gap: 30px;
        justify-items: center;
        align-items: center;
        background-color: #fff;
    }

    
    @media screen and (max-width: 950px) {
        .produtos{
            grid-template-columns: 1fr 1fr;
        }
    }

    @media screen and (max-width: 650px) {
        .produtos{
            grid-template-columns: 1fr;
        }
    }
</style>