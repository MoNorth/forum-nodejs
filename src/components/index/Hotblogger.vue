/**
* 推荐博主
* Create by glt
* 2016/12/10
**/

<template>
  <div class="hotblogger">
    <p>推荐博主</p>
    <ul @click.prevent>
      <li v-for="blogger in bloggers">
        <div><img v-bind:src="blogger.imgurl" v-on:click="enterblogger(blogger.bloggerurl)"></div>
        <span v-on:click="enterblogger(blogger.bloggerurl)">{{blogger.name}}</span>
        <p v-on:click="enterblogger(blogger.bloggerurl)">{{blogger.classify}}类话题活跃</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'hotblogger',
    data() {
      return {
        bloggers : [
          {
            name : '杨小杨',
            classify : '运动',
            imgurl : '../../static/images/classify.png',
            bloggerurl : '#'
          },
          {
            name : '杨小杨',
            classify : '运动',
            imgurl : '../../static/images/entertainment.png',
            bloggerurl : '#'
          },
          {
            name : '杨小杨',
            classify : '运动',
            imgurl : '../../static/images/entertainment.png',
            bloggerurl : '#'
          },
          {
            name : '杨小杨',
            classify : '运动',
            imgurl : '../../static/images/entertainment.png',
            bloggerurl : '#'
          },
          {
            name : '杨小杨',
            classify : '运动',
            imgurl : '../../static/images/entertainment.png',
            bloggerurl : '#'
          },
          {
            name : '杨小杨',
            classify : '运动',
            imgurl : '../../static/images/classify.png',
            bloggerurl : '#'
          },
          {
            name : '杨小杨',
            classify : '运动',
            imgurl : '../../static/images/classify.png',
            bloggerurl : '#'
          },
          {
            name : '杨小杨',
            classify : '运动',
            imgurl : '../../static/images/classify.png',
            bloggerurl : '#'
          },
          {
            name : '杨小杨',
            classify : '运动',
            imgurl : '../../static/images/classify.png',
            bloggerurl : '#'
          }
        ]
      }
    },
    methods : {
      enterblogger(bloggerurl) {
        window.location.href = bloggerurl;
      }
    }
  }
</script>

<style lang="less">
  @color: #00BDCC;
  .hotblogger {
    width: 15%;
    background-color: #F3F3F3;
    float: right;
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
          height: 40px;
          line-height: 40px;
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