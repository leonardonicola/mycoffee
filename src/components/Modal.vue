<template>
<transition name="slide">
  <div v-if="$store.state.togglemodal.show" class="modal">
    <div class="modal__hero">
        <fa class="modal__close" @click="toggleModal()" icon="close"/>
        <div class="modal__img">
            <img :src="require('@/assets/' + product.img + '')">
        </div>
        <div class="modal__infos">
            <div class="modal__description">
                <h1>{{product.title}}</h1>
                <p>{{product.desc}}</p>
                <p>Preço: <b>{{product.price | price}}</b></p>
            </div>
            <button class="modal__addtocart" @click="addToCart(product)">ADICIONAR AO CARRINHO</button>
        </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
methods:{
    addToCart(product){
        this.$store.commit('addToCart', product)
    },
    toggleModal(id){
        document.body.style.overflow = 'auto'
        this.$store.commit('toggleModal', id)
    }
},
computed:{
    product(){
        const id = this.$store.state.togglemodal.id
        return this.$store.state.cups[id]
    }
}
}
</script>

<style>
:root{
    --pad: 20px;
}

    .modal{
        display: grid;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: 100vh;
        z-index: 200;
        align-items: center;
        background-color: #DCDCDD;
    }

    .modal__hero{
        display: grid;
        padding: var(--pad);
        grid-template-columns: 1fr 1fr;
    }

    .modal__img{
        display: flex;
        margin: 0 auto;
        width: 100%;
        height: 400px;
        overflow: hidden;
    }

    .modal__infos{
        display: flex;
        flex-direction: column;
        padding: 0 var(--pad);
        justify-content: space-between;
    }

    .modal__infos h1{
        margin: 0;
    }

    .modal__description{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .modal__close{
        position: absolute;
        right: 20px;
        top: 20px;
        transform: scale(2);
        cursor: pointer;
    }

    .modal__img img{
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .modal__addtocart{
        width: fit-content;
        font-weight: bolder;
        padding: var(--pad);
        margin-top: 20px;
    }

    .slide-leave-active,
    .slide-enter-active {
    transition: 1s;
    }
    .slide-enter {
    transform: translate(0, 100%);
    }
    .slide-leave-to {
    transform: translate(0, 100%);
    }

    @media screen and (max-width: 600px) {
        .modal__hero{
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
        }

        .modal__img{
            width: 80%;
            height: 300px;
            margin-bottom: 50px;
        }

        .modal__infos{
            display: block;
        }
    }
</style>