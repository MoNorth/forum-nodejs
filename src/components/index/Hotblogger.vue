/**
* 推荐博主
* Created by glt
* 2016/12/10
**/

<template>
  <div class="hotblogger">
    <ul class="bloggerClasses">
      <li class="bloggerClasses_li" :class="{'hotblogger_li_this':bloggerClass.active}" v-for="bloggerClass in data.bloggerClasses" @click="makeActive(bloggerClass)">
        <a href="javascript:void(0);" :class="{'hotblogger_a_this':bloggerClass.active}">{{bloggerClass.name}}</a>
      </li>
    </ul>
    <ul class="bloggers" @click.prevent>
      <li v-if="data.thisbloggerClass.active" v-for="blogger in data.thisbloggerClass.bloggers">
        <div><img src="../../static/images/head.jpg" v-on:click="enterblogger(blogger.bloggerurl)"></div>
        <p class="fansnum">{{blogger.fansnum}}个粉丝</p>
        <span v-on:click="enterblogger(blogger.bloggerurl)">{{blogger.name}}</span>
        <p class="articlenum">{{blogger.articlenum}}个帖子</p>
      </li>
    </ul>
  </div>
</template>
<script>
  let data = {
    bloggerClasses : [
      {
        name : '发帖巨人',
        active : true,
        bloggers : [
          {
            name : '美羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          },
          {
            name : '美羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          },
          {
            name : '美羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          },
          {
            name : '美羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          },
          {
            name : '美羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          }
        ]
      },
      {
        name : '神评侠',
        active : false,
        bloggers : [
          {
            name : '喜羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          },
          {
            name : '喜羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          },
          {
            name : '喜羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          },
          {
            name : '喜羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          },
          {
            name : '喜羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          }
        ]
      },
      {
        name : '人气队长',
        active : false,
        bloggers : [
          {
            name : '懒羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          },
          {
            name : '懒羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          },
          {
            name : '懒羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          },
          {
            name : '懒羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          },
          {
            name : '懒羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          }
        ]
      }
    ],
    thisbloggerClass : 
      {
        name : '发帖巨人',
        active : true,
        bloggers : [
          {
            name : '美羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          },
          {
            name : '美羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          },
          {
            name : '美羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          },
          {
            name : '美羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          },
          {
            name : '美羊羊',
            classify : '运动',
            imgurl : '',
            bloggerurl : '#',
            articlenum : 3,
            fansnum : 30
          }
        ]
      }
  }
  export default {
    name: 'hotblogger',
    data() {
      return {
        data : data
      }
    },
    methods : {
      makeActive(bloggerClass) {
        this.active = bloggerClass.name;
        for (let i = 0; i < this.data.bloggerClasses.length; i++) {
          this.data.bloggerClasses[i].active = false;
        }
        bloggerClass.active = true;
        data.thisbloggerClass = bloggerClass;
      },
      enterblogger(bloggerurl) {
      }
    }
  }
</script>

<style lang="less">
  .hotblogger {
    @color: #00BDCC;
    @fontColor: #9C9E9D;
    @font-size: 14px;
    width: 25%;
    height: 355px;
    overflow: hidden;
    border-top: 1px solid #E7E7E7;
    .bloggerClasses {
      padding: 0;
      .bloggerClasses_li {
        display: inline-block;
        width: 33.3333%;
        font-size: @font-size + 3;
        font-weight: bolder;
        text-align: center;
        line-height: 35px;
        a {
          color: #000;
          text-decoration: none;
        }
        .hotblogger_a_this {
          display: inline-block;
          color: @color;
          border-bottom: 1px solid #69C2F3;
        }
      }
      .hotblogger_li_this {
      }
    }
    .bloggers {
      display: block;
      list-style-type: none;
      padding: 0;
      li {
        clear: both;
        padding: 2%;
        div {
          /*width: 20%;*/
          height: 40px;
          line-height: 40px;
          text-align: center;
          float: left;
          margin-right: 3%;
          img {
            height: 40px;
            border-radius: 40px;
            cursor: pointer;
          }
        }
        span {
          font-size: @font-size;
          color: @fontColor - 30;
          line-height: 25px;
          font-weight: bolder;
          display: block;
          cursor: pointer;
          &:hover {
            color: @color;
          }
        }
        .articlenum {
          color: @fontColor;
          font-size: @font-size - 2;
          cursor: pointer;
        }
        .fansnum {
          color: @fontColor;
          font-size: @font-size - 2;
          cursor: pointer;
          float: right;
          line-height: 40px;
        }
      }
    }
  }
</style>