import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      cups: [{
              id: 0,
              title: 'Coffee Box',
              img: 'copocafe.webp',
              price: 200,
              qty: 0,
              desc: "Um combo perfeito com muito sabor para seu café matinal (ou diário :P)"
          },
          {
              id: 1,
              title: 'Kit My Coffee',
              img: 'kitcoffee.webp',
              price: 79.88,
              qty: 0,
              desc: "Dois copinhos muito bem acabados com uma vibe de filme americano imbutido!"
          },
          {
              id: 2,
              title: 'Zebra Cup',
              img: 'copolistrado.webp',
              price: 38.99,
              qty: 0,
              desc: "O produto perfeito para tomar seu cafézinho com muito estilo!",
          }
      ],
      cart: [],
      showCart: false,
      togglemodal: {
          show: false,
          id: 0
      },
  },
  getters: {
    //Return total price of cart
    total(state){
      return state.cart.map(prod => prod.qty * prod.price)
        .reduce((total,actual) => total + actual)
    },
    //Return cart items
    cart(state){
      return state.cart
    }
  },
  mutations: {
    //Add item to cart
      addToCart(state, payload) {
          const existingProduct = state.cart.find(el => el.id === payload.id)

          existingProduct ? existingProduct.qty += 1 :
              (payload.qty = 1, state.cart.push(payload))

      },
      //Remove item from cart
      removeProduct(state, payload) {
          const cart = state.cart
          cart.splice(cart.indexOf(payload), 1)
      },
      //Toggle the homepage cart sidebar visibility
      toggleCart(state) {
        state.showCart = !state.showCart
      },
      // Toggle the modal with the item clicked
      toggleModal(state, payload) {
        state.togglemodal.show ? (state.togglemodal.show = false, state.togglemodal.id = null) :
              (state.togglemodal.show = true, state.togglemodal.id = payload)
      },
      // Replace the new state with the previous state
      initialiseStore(state) {
          localStorage.getItem('store') ?
              this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store')))) : null
      }
  },
  actions: {},
  modules: {}
})

