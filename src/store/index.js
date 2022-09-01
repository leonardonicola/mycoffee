import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{cart},
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
      togglemodal: {
          show: false,
          id: 0
      },
    },
    mutations: {
   
      // Toggle the modal with the item clicked
      toggleModal(state, payload) {
        state.togglemodal.show ? (state.togglemodal.show = false, state.togglemodal.id = null) :
              (state.togglemodal.show = true, state.togglemodal.id = payload)
      }
    }
})

