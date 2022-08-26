import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cups:[
      {id: 0, title: 'Coffee Box', img:'copocafe.webp', price:200, qty:0,
      desc:"Um combo perfeito com muito sabor para seu café matinal (ou diário :P)"},
      {id: 1, title: 'Kit My Coffee', img:'kitcoffee.webp', price:79.88, qty:0,
      desc:"Dois copinhos muito bem acabados com uma vibe de filme americano imbutido!"},
      {id: 2, title: 'Zebra Cup', img:'copolistrado.webp', price:38.99, qty:0,
      desc:"O produto perfeito para tomar seu cafézinho com muito estilo!",}
  ],
    cart:[],
    total:0,
    show:false,
    togglemodal:{
      show: false,
      id: 0
    },
  },
  getters: {
  },
  mutations: {
    addToCart(state,payload){
      const existingProduct = state.cart.find(el => el.id === payload.id)

      existingProduct ? existingProduct.qty += 1
      :(payload.qty = 1, state.cart.push(payload))

      state.total += payload.price
      
    },
    removeProduct(state,payload){
      const cart = state.cart
      cart.splice(cart.indexOf(payload), 1)
      state.total -= (payload.price)*payload.qty
    },
    showCart(state){
      state.show = !state.show
    },
    toggleModal(state, payload){
      state.togglemodal.show ? (state.togglemodal.show = false, state.togglemodal.id = null)
      :(state.togglemodal.show = true, state.togglemodal.id = payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
