import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(vuetify)

new Vue({
  render: h => h(App),
  store,
  vuetify,
  router
}).$mount('#app')
