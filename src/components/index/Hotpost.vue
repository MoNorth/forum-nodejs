/**
* 热门帖子
* Create by yxt
* 2016/12/9
**/

<template>
  <div class="wrapper">
    <h1>热门帖子</h1>
    <div class="wrapper_module" v-for="list in lists">
      <div class="wrapper_top">
        <span>作者：<a @click="personal(list.author_id)">{{list.author}}</a></span>
        <span class="classify">话题分类：<a @click="classes(list.group_id)">{{list.group}}</a></span>
      </div>
      <div class="wrapper_main">
        <h2><a @click="article(list.article_id)">{{list.title}}</a></h2>
        <article class="content">{{list.content}}</article>
      </div>
      <div class="wrapper_footer">
        <span class="vote">赞({{list.votes}}) &nbsp;&nbsp;评论(<a @click="comment(list.article_id)">{{list.comments}}</a>)</span>
      </div>
    </div>
  </div>
</template>   

<script>
  export default {
    name: 'hotpost',
    data() {
      return {
        lists: [
          {
            author: 'susan',
            author_id: '0x',
            group: '娱乐',
            group_id: 'xcxcx',
            article_id: 'cdcd',
            title: '控制军木蜡木hi那么快看看',
            content: 'ncskancjkdhvjrhegirhigf',
            collect: false,
            votes: 12,
            comments: 555
          },
          {
            author: 'susan',
            author_id: '0d',
            group: '娱乐',
            group_id: 'xcfde',
            article_id: 'mmm',
            title: '控制军木蜡木hi那么快看看',
            content: 'ncskancjkdhvjrhegirhigfncskancjkdhvjrhegirhigfncskancjkdhvjrhegirhigfncskancjkdhvjrhegirhigfncskancjkdhvjrhegirhigfncskancjkdhvjrhegirhigfncskancjkdhvjrhegirhigfncskancjkdhvjrhegirhigfncskancjkdhvjrhegirhigfncskancjkdhvjrhegirhigfncskancjkdhvjrhegirhigfncskancjkdhvjrhegirhigfncskancjkdhvjrhegirhigfncskancjkdhvjrhegirhigfncskancjkdhvjrhegirhigf',
            collect: false,
            votes: 12,
            comments: 555
          },
          {
            author: 'susan',
            author_id: '0vc',
            group: '娱乐',
            group_id: 'xjjvfdnvx',
            article_id: 'bbb',
            title: '控制军木蜡木hi那么快看看',
            content: 'ncskancjkdhvjrhegirhigf',
            collect: false,
            votes: 12,
            comments: 555
          }
        ]
      }
    },
    methods: {
      personal(value) {
        console.log(value);
      },
      classes(value) {
        console.log(value);
      },
      article(value) {
        console.log(value);
      },
      comment(value) {
        console.log(value);
      }
    }
  }
</script>

<style lang="less">
  @size: 1.4em;
  @color: #00AACC;
  @global_color: #000;
  .mixin {
    margin-bottom: 20px;
  }
  a {
    &:hover {
      color: @color;
    }
  }
  .wrapper {
    width: 60%;
    margin: 0 auto;
    font-size: @size;
    color: @global_color;
    h1 {
      text-align: center;
      font-size: 2em;
      padding-bottom: 20px;
    }

    .wrapper_module {
      width: 100%;
      border-bottom: 2px solid #ccc;
      .mixin;
      padding: 10px;
      .wrapper_top {
        .mixin;
        .classify {
          margin-left: 60%;
        }
      }

      .wrapper_main {
        .mixin; 
        h2 {
          font-size: 1.5em;
          color: @color;
        }
        .content {
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }

      .wrapper_footer {
        .mixin;
        .vote {
          margin-left: 67%;
        }
      }
    }
  }
</style>