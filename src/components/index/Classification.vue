/**
* 话题分类
* Create by glt
* 2016/12/9
**/

<template>
  <div class="classification">
    <p>话题分类</p>
    <ul @click.prevent>
      <li v-for="classify in classifies">
        <div><img v-bind:src="classify.imgurl" v-on:click="enterClassify(classify.addurl)"></div>
        <span v-on:click="enterClassify(classify.addurl)">{{classify.name}}</span>
        <p v-on:click="enterClassify(classify.addurl)">{{classify.intro}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'classification',
    data() {
      return {
        classifies : [
          {
            name : '运动',
            intro : '哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡',
            imgurl : '../../static/images/classify.png',
            addurl : '#'
          },
          {
            name : '娱乐',
            intro : '哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡',
            imgurl : '../../static/images/entertainment.png',
            addurl : '#'
          },
          {
            name : '健身',
            intro : '哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡',
            imgurl : '../../static/images/entertainment.png',
            addurl : '#'
          },
          {
            name : '养生',
            intro : '哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡',
            imgurl : '../../static/images/entertainment.png',
            addurl : '#'
          },
          {
            name : '阅读',
            intro : '哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡',
            imgurl : '../../static/images/entertainment.png',
            addurl : '#'
          },
          {
            name : '娱乐',
            intro : '哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡',
            imgurl : '../../static/images/classify.png',
            addurl : '#'
          },
          {
            name : '健身',
            intro : '哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡',
            imgurl : '../../static/images/classify.png',
            addurl : '#'
          },
          {
            name : '养生',
            intro : '哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡',
            imgurl : '../../static/images/classify.png',
            addurl : '#'
          },
          {
            name : '阅读',
            intro : '哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡哇卡卡卡卡',
            imgurl : '../../static/images/classify.png',
            addurl : '#'
          }
        ]
      }
    },
    methods : {
      enterClassify(addurl) {
        window.location.href = addurl;
      }
    }
  }
</script>

<style lang="less">
  @color: #00BDCC;
  .classification {
    width: 15%;
    background-color: #F3F3F3;
    float: left;
    >p {
      font-size: 20px;
      font-weight:  bolder;
      text-align: center;
      line-height: 40px;
      border-bottom:  1px solid #00BBCB;
    }
    ul {
      display: block;
      li {
        clear: both;
        border-bottom: 1px solid #00BBCB;
        padding: 2%;
        margin-bottom: 3px;
        text-indent: 16px;
        div {
          width: 25%;
          height: 50px;
          line-height: 50px;
          float: left;
          padding: auto 3%;
          border: 1px solid #ccc;
          img {
            width: 97%;
            cursor: pointer;
          }
        }
        span {
          line-height: 25px;
          font-weight: bolder;
          display: block;
          cursor: pointer;
          &:hover {
            color: @color;
          }
        }
        p {
          font-size: 13px;
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          cursor: pointer;
        }
      }
    }
  }
</style>