<template>
    <main>
        <First/>
        <section>
        <Produtos/></section>
        <h1 v-prlx="{fromBottom:true, 
         reverse:true, speed:0.3, limit:{min:-100, max: 30}}">Nossa história</h1>
        <SecondSection/>
    </main>
</template>

<script>
import Produtos from '../components/Produtos.vue'
import First from '../components/First.vue'
import SecondSection from '../components/SecondSection.vue'
export default {
    components:{First, Produtos, SecondSection}
}
</script>

<style scoped>
    h1{
        padding-left: 20px;
    }
</style>