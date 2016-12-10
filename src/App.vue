<template>
  <div id="app">
    <myheader></myheader>

    <div id="content">
      <classification></classification>
    
    </div>

    <myfooter></myfooter>
    <backtop></backtop>
  </div>
</template>

<script>

import myHeader from './components/public/myHeader.vue'
import myFooter from './components/public/myFooter.vue'
import Backtop from './components/public/Backtop.vue'
import Classification from './components/index/Hotpost.vue'

export default {
  name: 'app',
  components: {
    myheader : myHeader,
    myfooter : myFooter,
    backtop : Backtop,
    classification : Classification
  }
  
}
</script>

<style>
  

</style>
