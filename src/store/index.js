import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    copos:[
      {id: 0, title: 'Coffee Box', img:'copocafe.jpg', preco:200, qty:0,
      desc:"Um combo perfeito com muito sabor para seu café matinal (ou diário :P)"},
      {id: 1, title: 'Kit My Coffee', img:'kitcoffee.jpg', preco:79.88, qty:0,
      desc:"Dois copinhos muito bem acabados com uma vibe de filme americano imbutido!"},
      {id: 2, title: 'Zebra Cup', img:'copolistrado.jpg', preco:38.99, qty:0,
      desc:"O produto perfeito para tomar seu cafézinho com muito estilo!",}
  ],
    cart:[],
    total:0,
    show:false,
    togglemodal:{
      show: false,
      id: 0
    }
  },
  getters: {
  },
  mutations: {
    addToCart(state,payload){
      const existingProduct = state.cart.find(el => el.id === payload.id)

      if(existingProduct){
        existingProduct.qty += 1
        state.total += payload.preco
      } else{
        payload.qty = 1
        state.cart.push(payload)
        state.total += payload.preco
      }
    },
    removeProduct(state,payload){
      const cart = state.cart
      const existingProduct = cart.find(el => el.id === payload.id)

      if(existingProduct && existingProduct.qty > 1){
        existingProduct.qty -= 1
        state.total -= payload.preco
      }else if(existingProduct.qty === 1){
        cart.splice(cart.indexOf(payload), 1)
        state.total -= payload.preco
      }
    },
    showCart(state){
      state.show = !state.show
    },
    toggleModal(state, payload){
      switch(state.togglemodal.show){
        case true: 
              state.togglemodal.show = false
              state.togglemodal.id = null
              break;
        case false:
          state.togglemodal.show = true
          state.togglemodal.id = payload
          break;
      }

    }
  },
  actions: {
  },
  modules: {
  }
})
