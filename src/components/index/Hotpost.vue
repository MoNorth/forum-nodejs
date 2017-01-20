/**
* 登录
* Created by yxt
* 2016/12/12
**/

<template>
  <div class="contain">
    <router-link to="/hotpost" tag="h1">话题列表</router-link>
    <div class="warp" v-for="list in data.list">
      <div class="warp-left" title="回复">{{list.response}}</div>
      <div class="warp-right">
        <div class="title">
          <router-link to="{path: 'article', query: {article_id: list.article_id}}" tag="h2">{{list.article_name}}</router-link>
          <router-link to="{path: 'user', query: {author_id: data.author_id}}" tag="p" class="p"><span></span>{{list.author}}</router-link>
        </div>
        <div class="main">
          <p>{{list.content}}</p>
          <router-link to="{path: 'replycomment', query: {latest_reply_id: data.latest_reply_id}}" tag="p" class="p"><span></span>{{list.latest_reply}}</router-link>
          <div class="images" v-if="list.img.attr">
            <img :src="list.img.url">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import getCGI from '../../getCGI/Hotpost'
  let data = {
    list: []
  }
  getCGI(data)
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

    background-color: #fff;
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
      /*background: url("../../static/images/icon.png") no-repeat 0 @pos;*/
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

    h1 {
      font-size: 1.4em;
      cursor: pointer;
      &:hover {
        border-left: 2px solid #00BDCC;
      }
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
        /*background: url("../../static/images/pop.png") no-repeat;*/

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