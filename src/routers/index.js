/**
*	路由页，这个先把你们的目录结构确认了再说
*
**/
import VueRouter from 'vue-router'
import Index from '../components/index/Index.vue'
import Hotpost from '../components/index/Hotpost.vue'
import Classification from '../components/index/Classification.vue'




const routes = [
  {
    path: '/',
    components: {
      index: Index
    }
  },
  {
    path: '/hotpost',
    components: {
      index: Hotpost
    }
  },
  {
    path: '/classification',
    components: {
      index: Classification
    }
  }
]









export default new VueRouter({
  routes
})