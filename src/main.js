import 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'




import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import './static/lib/reset.css'


import Router from './routers/index'


new Vue({
  el: '#app',
  router : Router,
  render: h => h(App)
})
