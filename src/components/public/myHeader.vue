/**
* Created by glt
* 2016/12/7
**/

<template>
  <div class="my_header">
    <nav class="header_nav">
      <span class="header_logo">Forum</span>
      <search></search>
      <div><a class="header_nav_a" :class="{'header_nav_this':item.active}" v-for="item in data.items" @click="makeActive(item)">{{item.name}}</a></div>
    </nav>
  </div>
</template>
<script>
import search from './Search.vue'
  let data = {
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
  export default {
    name: 'myheader',
    data(){
      return {
        data : data
      } 
    },
    methods: {
      makeActive(item) {
        this.active = item.name;
        for (let i = 0; i < this.data.items.length; i++) {
          this.data.items[i].active = false;
        }
        item.active = true;
      }
    },
    components: {
      search : search
    }
  }
</script>
<style lang="less">
  .my_header {
    @color: #237546;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #3FA46A;
    font-family: '微软雅黑';
    nav {
      min-width: 718px;
      width: 60%;
      margin: 0 auto;
      text-align: center;
      font-size: 16px;
      .header_logo {
        min-width: 80px;
        color: @color;
        font: 30px 'Arial';
        display: inline-block;
        vertical-align: top;
        margin-top: 13px;
        width: 8%;
        margin-right: 2%;
        text-align: center;
        vertical-align: top;
      }
      div {
        width: 40%;
        display: inline-block;
        min-width: 460px;
        a {
          padding: 0 4%;
          height: 40px;
          display: inline-block;
          line-height: 40px;
          vertical-align: top;
          text-align: center;
          margin: 10px auto;
          color: #237546;
          font-weight: 400;
          -webkit-transition: color 0.3s;
          -moz-transition: color 0.3s;
          transition: color 0.3s;
          position: relative;
          &::before,&::after {
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            background: #fff;
            content: '';
            opacity: 0;
            -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
            -moz-transition: opacity 0.3s, -moz-transform 0.3s;
            transition: opacity 0.3s, transform 0.3s;
          }
          &::before {
            top: 0;
            -webkit-transform: translateY(-10px);
            -moz-transform: translateY(-10px);
            transform: translateY(-10px);
          }
          &::after {
            bottom: 0;
            -webkit-transform: translateY(10px);
            -moz-transform: translateY(10px);
            transform: translateY(10px);
          }
          &:hover {
            color: #fff;
            cursor: pointer;
            text-decoration: none;
          }
          &:focus {
            color: #fff;
          }
          &:hover::before,&:focus::before,&:hover::after,&:focus::after {
          opacity: 1;
          -webkit-transform: translateY(0px);
          -moz-transform: translateY(0px);
          transform: translateY(0px);          
          }
        }
      }
    }
  }

</style>