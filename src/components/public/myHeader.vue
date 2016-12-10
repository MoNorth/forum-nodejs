/**
* Create by glt
* 2016/12/7
**/

<template>
  <div class="my_header">
    <nav class="header_nav">
      <span class="header_logo">Forum</span>
      <input class="header_searchbox" type="text" name="searchbox" placeholder="搜索你感兴趣的内容...">
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
    // ,
    // methods: {
    //   makeActive(item,index) {
    //     this.active = item.name;
    //     for (let i = 0; i < this.items.length; i++) {
    //       this.items[i].active = false;
    //     }
    //     this.items[index].active = true;
    //   }
    // }
  }
</script>
<style>
  .my_header {
    width: 100%;
    height: 40px;
    color: #fff;
    line-height: 40px;
    background-color: #00AACC;
  }
  .header_nav {
    width: 55%;
    margin: 0 auto;
    font-size: 14px;
  }
  .header_logo {
    font: 25px 'Arial';
    display: inline-block;
    margin-top: 5px;
    vertical-align: top;
  }
  .header_searchbox {
    width: 26%;
    height: 25px;
    text-indent: 10px;
    padding: 0 1% 0 3%;
    outline: none;
    border: hidden;
    border-radius: 2px;
    margin-right: 1%;
    background: url('/src/static/images/header_search.png') no-repeat 0 center;
    background-color: #E1EAF2;
  }
  .header_nav_a {
    cursor: pointer;
    display: inline-block;
    text-align: center;
    padding: 0 2%;
    text-decoration: none;
    border-radius: 2px;
    color: #fff;
  }
  .header_nav_a:hover {
    background: #00BDCC;
  }
  .header_nav_this {    
    background: #00BDCC;
  }
</style>