<template>
    <section v-prlx="{reverse:true, fromBottom:true, speed:0.4, limit: { min: -150 }}">
        <fa id="icon" icon="coffee"/>
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
    </section>
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

    section{
        background-color: white;
    }

    .produtos{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
        padding: 100px 80px;
        justify-items: center;
        align-items: center;
        padding-bottom: 100px;
    }

    #icon{
        display: flex;
        margin: 100px auto;
        transform: scale(5);
    }


    .produtos__card{
        display: grid;
        grid-template-rows:50% 50%;
        width: 100%;
        height: 450px;
        overflow: hidden;
        border: 0.5px solid rgba(0, 0, 0, 0.192);
        border-radius: 20px;
    }

    .produtos__img{
        overflow: hidden;
    }

    .produtos__img img:hover{
        transform: scale(1.1);
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
    }
    
    button:hover{
        transform: scale(1.08);
        color: white;
        background-color: rgb(68, 68, 68);
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