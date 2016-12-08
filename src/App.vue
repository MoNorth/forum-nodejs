<template>
  <div id="app">
    <myheader></myheader>

    <div id="content"></div>

    <myfooter></myfooter>
    <backtop></backtop>
  </div>
</template>

<script>

import myHeader from './components/public/myHeader.vue'
import myFooter from './components/public/myFooter.vue'
import Backtop from './components/public/Backtop.vue'

export default {
  name: 'app',
  components: {
    myheader : myHeader,
    myfooter : myFooter,
    backtop : Backtop
  }
  
}
</script>

<style>
  @import './static/lib/reset.css';
  #content{
    height: 1000px;
  }
</style>
