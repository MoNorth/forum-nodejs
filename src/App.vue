<template>
  <div id="app">
    <myheader></myheader>

    <div id="content">
      <classification :empty="data.empty" :baseHeight="true"></classification>
    
    </div>

    <myfooter :class="data.className"></myfooter>
    <backtop></backtop>
  </div>
</template>

<script>

import myHeader from './components/public/myHeader.vue'
import myFooter from './components/public/myFooter.vue'
import Backtop from './components/public/Backtop.vue'
import Classification from './components/public/Loading.vue'


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
    classification : Classification
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
  #content{
      width: 200px;
      height: 100px;
  }

</style>
