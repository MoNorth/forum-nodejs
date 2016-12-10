<template>
  <div id="app">
    <myheader></myheader>

    <div id="content">
    hello world<br/>
    <table class="table">
          <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
          </tr>
          <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
          </tr>
    </table>
    </div>

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
  

</style>
