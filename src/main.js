import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'

//Jquery and Bootstrap
import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery
let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import './assets/less/index.less'

//Vue Settings
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
