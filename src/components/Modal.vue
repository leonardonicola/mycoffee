<template>
<transition name="slide">
  <div v-if="$store.state.togglemodal.show" class="modal">
    <div class="modal__hero">
        <div class="modal__img">
            <img :src="require('@/assets/' + produto.img + '')">
        </div>
        <div class="modal__infos">
            <fa class="modal__close" @click="toggleModal()" icon="close"/>
            <h1>{{produto.title}}</h1>
            <p>{{produto.desc}}</p>
            <p>Preço: R${{produto.preco}}</p>
            <button class="modal__addtocart" @click="addToCart(produto)">ADICIONAR AO CARRINHO</button>
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
        this.$store.commit('toggleModal', id)
    }
},
computed:{
        produto(){
            const id = this.$store.state.togglemodal.id
            return this.$store.state.copos[id]
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
        background-color: white;
    }

    .modal__hero{
        display: grid;
        height: 80%;
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
        padding: var(--pad);
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
    }
</style>