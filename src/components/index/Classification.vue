/**
* 话题分类
* Created by glt
* 2016/12/9
**/

<template>
  <div class="classification">
    <router-link tag="p" to="/classification">话题分类</router-link>
    <router-link tag="span" to="/classification">换一批</router-link>
    <ul>
      <li v-for="classify in data.classifies">
        <div><img :src="classify.imgurl"></div>
        <span>{{classify.name}}</span>
        <p>{{classify.intro}}</p>
      </li>
     
    </ul>
  </div>
</template>

<script>  
import getCGI from '../../getCGI/Classification'

  let data = {
    classifies : [],
    empty: false
  }
  getCGI(data)

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
    min-width: 210px;
    height: 400px;
    overflow: hidden;
    background-color: #fff;
    margin-bottom: 10px;
    >p {
      cursor: pointer;
      color: @color - 20;
      font-size: @font-size + 5;
      font-weight:  bolder;
      padding-left: 2%;
      margin-right: 40%;
      line-height: 40px;
      float: left;
      margin-bottom: 0;
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
      margin-top: -10px;
      display: block;
      list-style-type: none;
      padding: 0;
      height: 100%;
      overflow: hidden;
      li {
        clear: both;
        padding: 10px 2%;
        div {
          width: 15%;
          height: 43px;
          line-height: 43px;
          float: left;
          margin-right: 3%;
          img {
            height: 35px;
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