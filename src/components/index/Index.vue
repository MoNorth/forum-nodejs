<template>
  <div class="index">
    <div class="index_left">
      <classification></classification>
      <hotblogger></hotblogger>
    </div>  
    <div class="index_right">
      <login></login>
    </div>
    <contain></contain>
  </div>
</template>

<script>
  import Backtop from '../public/Backtop.vue'
  import Classification from './Classification.vue'
  import Hotblogger from './Hotblogger.vue'
  import Hotpost from './Hotpost.vue'
  import Login from './Login.vue'
  import 'jquery'
  let data = {
  }
  export default {
    name: 'app',
    components: {
      backtop : Backtop,
      classification : Classification,
      hotblogger : Hotblogger,
      contain : Hotpost,
      login : Login
    },
    data () {
      return {
        data : data
      }
    }
  }
</script>
<style lang="less">
  .index {
    /*width: 70%;*/
    max-width: 1080px;
    margin:0 auto 20px;
    min-height: 1000px;
    .index_left {
      width: 20%;
      float: left;
    }
    .index_right {
      width: 20%;
      float: right;
    }
    .contain {
      width: 56%;
      overflow: hidden;
      margin: 0 auto;
    }
  }
    
</style>