<template>
  <div id="app">
    <myheader></myheader>

    <div id="content"></div>

    <myfooter></myfooter>
  </div>
</template>

<script>

import myHeader from './components/public/myHeader.vue'
import myFooter from './components/public/myFooter.vue'

export default {
  name: 'app',
  components: {
    myheader : myHeader,
    myfooter : myFooter
  }
  
}
</script>

<style>

</style>
