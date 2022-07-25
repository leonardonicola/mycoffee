import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    copos:[
      {id: 0, title: 'Coffee Box', img:'copocafe.jpg', preco:200, qty:0},
      {id: 1, title: 'Kit My Coffee', img:'kitcoffee.jpg', preco:79.88, qty:0},
      {id: 2, title: 'Zebra Cup', img:'copolistrado.jpg', preco:38.99, qty:0}
  ],
    cart:[],
    total:0,
    show:false
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
    }
  },
  actions: {
  },
  modules: {
  }
})