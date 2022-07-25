<template>
    <div class="produtos__card" @click="toggleModal(produto.id); ">
        <div class="produtos__img">
            <img :src="require('@/assets/' + produto.img + '')">
        </div>
        <div class="produtos__infos">
            <h2>R${{produto.preco.toFixed(2)}}</h2>
            <p>{{produto.title}}</p>
            <button @click.stop="addToCart(produto)">ADD TO CART</button>
        </div>
    </div>
</template>

<script>
export default {
    props:['id'],
    methods:{
        addToCart(product){
            this.$store.commit('addToCart', product)
        },
        toggleModal(id){
            this.$store.commit('toggleModal', id)
        }
    },
    computed:{
        produto(){
            return this.$store.state.copos[this.id]
        }
    }
}
</script>

<style>

    .produtos__card{
        display: grid;
        grid-template-rows:50% 50%;
        width: 100%;
        height: 450px;
        overflow: hidden;
        border: 0.5px solid rgba(0, 0, 0, 0.192);
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
        color: white;
        background-color: rgb(0, 0, 0);
        font-weight: bolder;
    }
    
    button:hover{
        transform: scale(1.05);
    }

</style>