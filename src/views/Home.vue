<template>
    <main>
        <First />
        <h1 class="product__title">Nossos produtos</h1>
        <Produtos/>
    </main>
</template>

<script>
import Produtos from '../components/Produtos.vue'
import First from '../components/First.vue'
export default {
    components:{First, Produtos},
    
}
</script>

<style>
main{
    margin: 80px 0;
}

.product__title{
    background-color: white;
    text-align: center;
    padding: 50px 0;
}

</style>