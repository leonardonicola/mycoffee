<template>
<transition name="fade">
    <div v-show="showCartState" @click.self="toggleCart()" class="cartsummary">
    <div class="cartsummary__cart">
        <h3>SHOPPING CART</h3>
        <div v-for="product in productList" :key="product.id" class="cartsummary__hero">
            <div class="cartsummary__img">
                <img :src="require('@/assets/' + product.img + '')" alt="product no carrinho">
            </div>
            <p>{{product.title}} | Quantidade: {{product.qty}}</p>
            <p>{{product.price | price}}</p>
            <span class="cartsummary__remove" @click="removeProduct(product)">Remover</span>
        </div>
        <fa icon="close" class="cartsummary__close-button" @click="toggleCart()">X</fa>
        <p v-if="productList == ''">Seu carrinho está vazio!</p>
        <p v-else>Total: {{cartTotal | price}}</p>
        <router-link v-if="productList != ''" class="cartsummary__link" to="/cart">CHECKOUT</router-link>
    </div>
</div>
</transition>
</template>

<script>
export default {

    methods: {
        removeProduct(prod) {
            this.$store.commit('removeProduct', prod)
        },
        toggleCart() {
            document.body.style.overflow = 'auto'
            this.$store.commit('toggleCart')
        }
    },
    computed: {

        productList() {
            return this.$store.state.cart;
        },

        showCartState() {
            return this.$store.state.showCart
        },

        cartTotal() {
            return this.$store.state.total
        }

    },
    mounted() {
        this.$store.state.show = false
    }

}
</script>

<style scoped>
.cartsummary {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 102;
    background: rgba(0, 0, 0, 0.315);
    height: 100vh;
}

.cartsummary__cart {
    position: absolute;
    z-index: 103;
    right: 0;
    width: 35%;
    height: 100%;
    padding: 30px;
    background-color: #fff;
    overflow: auto;
}

.cartsummary__hero {
    width: 100%;
    padding-bottom: 30px;
    border-bottom: .5px solid rgba(0, 0, 0, 0.219);
}

.fade-enter,
.fade-leave-to {
    pointer-events: none;
}

.cartsummary__img {
    width: 100%;
    height: 200px;
    margin: 20px 0;
    overflow: hidden;
}

.cartsummary__img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.cartsummary__img img:hover {
    transform: scale(1.1);
}


.cartsummary__link {
    display: block;
    margin: 20px 0;
    width: fit-content;
    padding: 10px;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    background-color: rgb(0, 0, 0);
}

.cartsummary__link:hover {
    transform: scale(1.05);
}

.cartsummary__remove {
    color: rgb(46, 46, 46);
    text-decoration: underline;
    cursor: pointer;
}

.cartsummary__close-button {
    display: none;
    transform: scale(2);
}

@media screen and (max-width: 950px) {

    .cartsummary__cart {
        position: fixed;
        right: 0;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border: none;
        padding: 50px;
    }

    .cartsummary__close-button {
        display: block;
        position: fixed;
        right: 30px;
        top: 30px;
    }

    .cartsummary__img {
        width: 50%;
        height: 200px;
        margin: 20px 0;
        overflow: hidden;
    }
}
</style>