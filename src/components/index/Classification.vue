/**
* 话题分类
* Created by glt
* 2016/12/9
**/

<template>
  <div class="classification">
    <p>话题分类</p>
    <span>换一批</span>
    <!-- <router-link tag="span" to="#">换一批</router-link> -->
    <ul>
      <li v-for="classify in data.classifies">
        <!-- <div><router-link src="../../static/images/classify.png"></router-link></div> -->
        <!-- <router-link tag="span" to="#">{{classify.name}}</router-link> -->
        <!-- <router-link tag="p" to="#">{{classify.intro}}</router-link> -->
        <div><img src="../../static/images/classify.png"></div>
        <span>{{classify.name}}</span>
        <p>{{classify.intro}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  let data = {
    classifies : [
      {
        name : '运动',
        intro : '哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡',
        imgurl : '',
        addurl : ''
      },
      {
        name : '娱乐',
        intro : '哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡',
        imgurl : '',
        addurl : '/entertainment'
      },
      {
        name : '健身',
        intro : '哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡',
        imgurl : '',
        addurl : '/exercise'
      },
      {
        name : '养生',
        intro : '哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡',
        imgurl : '',
        addurl : '/health'
      },
      {
        name : '阅读',
        intro : '哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡',
        imgurl : '',
        addurl : '/read'
      }
    ]
  }
  export default {
    name: 'classification',
    data() {
      return {
        data : data
      }
    }
  }
</script>

<style lang="less">
  .classification {
    @color: #9C9E9D;
    @hovercolor: #00BDCC;
    @font-size: 14px;
    width: 20%;
    background-color: #F4F4F4;
    min-width: 270px;
    >p {
      color: @color - 20;
      font-size: @font-size + 5;
      font-weight:  bolder;
      padding-left: 2%;
      margin-right: 3%;
      line-height: 40px;
      float: left;
      &:hover{
        border-left:  3px solid #00BBCB;
      }
    }
    >span {
      font-size: @font-size - 1;
      cursor: pointer;
      line-height: 40px;
      color: #ABABAB;
    }
    ul {
      clear: both;
      display: block;
      list-style-type: none;
      padding: 0;
      li {
        clear: both;
        padding: 2%;
        margin-bottom: 10px;
        div {
          width: 15%;
          height: 43px;
          line-height: 43px;
          float: left;
          margin-right: 3%;
          img {
            height: 43px;
          }
        }
        span {
          font-size: @font-size + 3;
          line-height: 25px;
          font-weight: bolder;
          display: block;
          cursor: pointer;
          color: @color;
          &:hover {
            color: @hovercolor;
          }
        }
        p {
          font-size: @font-size - 1;
          word-break: keep-all;
          text-overflow: ellipsis;
          overflow: hidden;
          cursor: pointer;
          color: @color - 5;
        }
      }
    }
  }
</style>