import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'




import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// import './static/lib/reset.css'



new Vue({
  el: '#app',
  render: h => h(App)
})
