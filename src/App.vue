<template>
  <div id="app">
    <myheader></myheader>
    <div id="content">
      <router-view name="index"></router-view>
    </div>
    <myfooter :class="data.className"></myfooter>
    <backtop></backtop>
  </div>
</template>

<script>

import myHeader from './components/public/myHeader.vue'
import myFooter from './components/public/myFooter.vue'
import Backtop from './components/public/Backtop.vue'
import Classification from './components/index/Index.vue'
import Loading from './components/public/Loading.vue'

let data = {
      className : "qqq",
      empty : false
}

export default {
  name: 'app',
  components: {
    myheader : myHeader,
    myfooter : myFooter,
    backtop : Backtop,
    classification : Classification,
    loading: Loading
  },
  data () {
      return {
            data : data
      }
  }
  
}

setTimeout(() => data.empty = true, 5000)
</script>

<style>
  #app{
    min-width: 970px;
    /*background-color: #E9E9E9;*/
  }

</style>
