
export default {
    namespaced:true,
    state:{
        cartList: [],
        showCart: false,
    },
    getters: {
        //Return total price of cart
        total(state){
          return state.cartList.map(prod => prod.qty * prod.price)
            .reduce((total,actual) => total + actual)
        },
        //Return cart items
        cartStatus(state){
          return state.cartList
        },
        showCart(state){
          return state.showCart
        },
        cartLength(state){
          return state.cartList.length
        }
      },
    mutations:{
        addToCart(state, payload) {
            const existingProduct = state.cartList.find(el => el.id === payload.id)
  
            existingProduct ? existingProduct.qty += 1 :
                (payload.qty = 1, state.cartList.push(payload))
  
        },
        //Remove item from cart
        removeProduct(state, payload) {
            const cart = state.cartList
            cart.splice(cart.indexOf(payload), 1)
        },
        //Toggle the homepage cart sidebar visibility
        toggleCart(state) {
            state.showCart = !state.showCart
        }
    }
}