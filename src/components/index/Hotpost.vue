/**
* 登录
* Created by yxt
* 2016/12/12
**/

<template>
  <div class="contain">
    <div class="warp" v-for="list in data.list">
      <div class="warp-left" title="回复">{{list.response}}</div>
      <div class="warp-right">
        <div class="title">
          <h2>{{list.article_name}}</h2>
          <p class="p"><span></span>{{list.author}}</p>
        </div>
        <div class="main">
          <p>{{list.content}}</p>
          <p class="p"><span></span>{{list.latest_reply}}</p>
          <div class="images" v-if="list.img.attr">
            <img :src="list.img.url">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  let data = {
    list: [
      {
        response: 111,
        article_name: '我的第一条正式帖',
        article_id: 'oxks',
        author: 'Esan讯粉',
        content: '开学到现在还没发过什么贴呢，然而我只爱吃。所以这是一个美食贴。fdvfdbf',
        latest_reply: '但依然有人也有',
        img: {
          attr: true,
          url: '../../static/images/backtop.png'
        }
      },
      {
        response: 111,
        article_name: '我的第一条正式帖',
        article_id: 'oxks',
        author: 'Esan讯粉',
        content: '开学到现在还没发过什么贴呢，然而我只爱吃。所以这是一个美食贴。fdvfdbf',
        latest_reply: '但依然有人也有',
        img: {
          attr: false,
          url: ''
        }
      },
      {
        response: 111,
        article_name: '我的第一条正式帖',
        article_id: 'oxks',
        author: 'Esan讯粉',
        content: '开学到现在还没发过什么贴呢，然而我只爱吃。所以这是一个美食贴。fdvfdbf',
        latest_reply: '但依然有人也有',
        img: {
          attr: false,
          url: ''
        }
      }
    ]
  }

  export default {
    name: 'hotpost',
    data() {
      return {
        data: data
      }
    }
  }
</script>

<style lang="less">
  .contain {

    //min-width: 680px;
    width: 50%;
    .clearfix {
      *zoom: 1;

      &:before, &:after { 
        content: "";
        display: table;
      }

      &:after {
        clear: both;
        overflow: hidden;
      }
    }

    .left {
      float: left;
    }

    .right {
      float: right;
    }

    .text {
      overflow:hidden;
      white-space:nowrap;
      text-overflow:ellipsis;
    }

    .mixin(@pos) {
      .text;
      display: inline-block;
      width: 10px;
      height: 10px;
      margin-right: 5%;
      background: url("../../static/images/icon.png") no-repeat 0 @pos;
    }

    .p {
      font-size: 0.9em;
      color: #999;
      width: 14%;
      padding-top: 16px;
      cursor: pointer;
      .right;
      .text;
    }

    .warp {
      .clearfix;
      width: 100%;
      border: 1px solid #ccc+30;
      margin-bottom: 6px;
      font-size: 1em;
      font-family: '微软雅黑';
      &:hover {
        background-color: #f7f9fc;
      }

      .warp-left {
        .left;
        width: 50px;
        height: 30px;
        line-height: 26px;
        text-align: center;
        margin: 2.2%;
        font-size: 0.8em;
        background: url("../../static/images/pop.png") no-repeat;

      }

      .warp-right {
        .left;
        width: 80%;
        .title {
          .clearfix;
          h2 {
            .left;
            .text;
            font-size: 1.1em;
            cursor: pointer;
            color: #2d64b3;
            &:hover {
              text-decoration: underline;
            }
          }
          span {
            .mixin(-10px);
          }
        }

        .main {
          p {
            &:first-child {
              width: 80%;
              display: inline-block;
              padding-top: 8px;
              .text;
            }
            &:nth-child(2) {
              display: inline-block;
              margin-top: -8px;
              .text;
            }
          }

          span {
            .mixin(0);
          }
        }
      }
    }
  }
</style>