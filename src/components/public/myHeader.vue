<template>
  <div class="my_header">
    <nav class="header_nav">
      <a class="header_nav_a" :class="{'header_nav_this':item.active}" v-for="item in items">{{item.name}}</a>
    </nav>
  </div>
</template>
<script>
	export default {
	  name: 'myheader',
    data(){
      return {
        items : [
          {
            name:'热门话题',
            active:true
          },
          {
            name:'话题分类',
            active:false
          },
          {
            name:'消息',
            active:false
          },
          {
            name:'发现',
            active:false
          },
          {
            name:'个人中心',
            active:false
          }
        ]
      } 
    }
	}
</script>
<style>
  .my_header {
    width: 100%;
    height: 40px;
    font-weight: bolder;
    line-height: 40px;
    background-color: #fff;
  }
  .header_nav {
    width: 60%;
    margin: 0 auto;
    font-size: 20px;
    border-bottom: 2px solid #00BCD4;
  }
  .header_nav_a {
    cursor: pointer;
    display: inline-block;
    text-align: center;
    padding: 0 3%;
    color: #000;
    text-decoration: none;
  }
  .header_nav_a:hover {
    color: #fff;
    background: #00BCD4;
  }
  .header_nav_this {    
    color: #fff;
    background: #00BCD4;
  }
</style>