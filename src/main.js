import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import VuePrlx from 'vue-prlx'

library.add(fas)
Vue.use(VuePrlx)
Vue.component('fa',FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')