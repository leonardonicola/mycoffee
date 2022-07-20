<template>
  <div class="produtos">
        <div class="produtos__card" v-for="produto in $store.state.copos" :key="produto.id">
            <div class="produtos__img" >
                <img :src="require('@/assets/' + produto.img + '')">
            </div>
            <div class="produtos__infos">
                <h2>R${{produto.preco.toFixed(2)}}</h2>
                <p>{{produto.title}}</p>
                <button @click.stop="addToCart(produto)">ADD TO CART</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        addToCart(product){
            this.$store.commit('addToCart', product)
        }
    }
}
</script>

<style>
    .produtos{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
        padding: 10px 80px;
        justify-items: center;
        align-items: center;
        padding-bottom: 100px;
    }

    .produtos__card{
        display: grid;
        grid-template-rows:50% 50%;
        width: 100%;
        height: 450px;
        overflow: hidden;
        border: 0.5px solid rgba(0, 0, 0, 0.192);
        border-radius: 20px;
        transition: all ease 1s;
    }
    .produtos__card:hover{
        transform: scale(1.1);
    }

    button:hover{
        transform: scale(1.1);
        color: white;
        background-color: rgb(68, 68, 68);
    }

    .produtos__img img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .produtos__infos{
        padding: 20px;
    }

    button{
        border: none;
        padding: 10px;
        border-radius: 5px;
        transition: all ease 1s;
    }
</style>