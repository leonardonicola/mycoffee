import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

Vue.filter('price', function(value){
  const valueAlt = value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  return valueAlt
})

library.add(fas)
Vue.component('fa',FontAwesomeIcon)
Vue.config.productionTip = false

store.subscribe((_,state) => {
	localStorage.setItem('store', JSON.stringify(state));
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
