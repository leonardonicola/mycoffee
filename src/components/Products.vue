<template>
    <div class="products__card" >
        <div class="products__img" @click="toggleModal(products.id)">
            <img :src="require('@/assets/' + products.img + '')" :alt='products.title'>
        </div>
        <div class="products__infos">
            <h2>{{products.price | price}}</h2>
            <p>{{products.title}}</p>
            <button @click="addToCart(products)"><fa icon="shopping-cart"/> +</button>
        </div>
    </div>
</template>

<script>
import { mapMutations} from 'vuex'
export default {
    props:['id'],
    methods:{
        ...mapMutations('cart',['addToCart']),
        ...mapMutations(['toggleModal'])
    },
    computed:{
        products(){
            return this.$store.state.cups[this.id]
        }
    }
}
</script>

<style>

    .products__card{
        display: grid;
        grid-template-rows:50% 50%;
        width: 100%;
        height: 450px;
        overflow: hidden;
        outline: 2px solid rgba(0, 0, 0, 0.733);
        background-color: #393E41;
        color: #fff;
    }

    .products__img{
        overflow: hidden;
        cursor: pointer;
    }

    .products__img img:hover{
        transform: scale(1.1);
    }


    .products__img img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .products__infos{
        padding: 20px;
    }

    button{
        border: none;
        padding: 10px;
        border-radius: 5px;
        color: #000;
        background-color: #fff(0, 0, 0);
        font-weight: bolder;
        cursor: pointer;
    }
    
    button:hover{
        transform: scale(1.1);
    }

    button:active{
        transition: all .3s !important;
        transform: scale(0.98);
    }

</style>