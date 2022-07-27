<template>
    <div class="produtos__card" >
        <div class="produtos__img" @click="toggleModal(produto.id)">
            <img :src="require('@/assets/' + produto.img + '')">
        </div>
        <div class="produtos__infos">
            <h2>R${{produto.preco.toFixed(2)}}</h2>
            <p>{{produto.title}}</p>
            <button @click.stop="addToCart(produto)"><fa icon="shopping-cart"/> +</button>
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
        outline: 2px solid rgba(0, 0, 0, 0.733);
        background-color: #393E41;
        color: #fff;
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
        color: #000;
        background-color: #fff(0, 0, 0);
        font-weight: bolder;
    }
    
    button:hover{
        transform: scale(1.1);
    }

    button:active{
        transition: all .3s !important;
        transform: scale(0.98);
    }

</style>