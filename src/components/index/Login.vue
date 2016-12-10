/**
* 登录
* Create by yxt
* 2016/12/9
**/

<template>
  <form id="formData" class="formData">
    <h1>登&nbsp;录</h1>
    <div class="wrap">
      <label>账号：</label>
      <input type="text" class="enter" v-model="username">
    </div>
    <div class="wrap">
      <label>密码：</label>
      <input type="password" class="enter" v-model="password">
    </div>
    <div class="wrap">
      <input type="checkbox" v-model="checked">&nbsp;记住密码
      <a class="distance" @click="noremenber">忘记密码</a>
    </div>
    <div class="wrap">
      <button type="button" @click="login">登&nbsp;录</button>
      <a class="distance" @click="register">注&nbsp;册</a>
    </div>
    <div class="wrap">
      <span class="chat-text">社交账号登录</span>
      <a class="chat" @click="weibo"></a>
      <a class="chat" @click="wechat"></a>
      <a class="chat" @click="qq"></a>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'login',

    data() {
      return {
        username: '',
        password: '',
        checked: ''
      }
    },
    methods: {
      login() {
        console.log(this.username);
      },
      register() {
        console.log('go to register');
      },
      noremenber() {
        console.log('not remenber the password');
      },
      weibo() {
        console.log('weibo');
      },
      wechat() {
        console.log('wechat');
      },
      qq() {
        console.log('qq');
      }
    }
  }
</script>

<style lang="less">
  @color: #00AACC;
  @size: 1.2em;
  @url: url("../../static/images/chat.png");
  .mixin(@pos) {
    background-image: @url;
    background-position: 0 @pos;
  }
  h1 {
    text-align: center;
    font-size: @size + 1;
    padding-top: 20px;
  }
  a, button {
    cursor: pointer;
  }

  button {
    border: 0;
    width: 20%;
    background-color: @color;
    color: #fff;
    height: 30px;
    &:hover {
      background-color: @color+10;
      text-decoration: underline;
    }
  }

  .formData {
    width: 40%;
    margin: 30px auto;
    font-size: @size;
    border: 2px solid #ccc;
    padding-bottom: 20px;
    .wrap {
      margin: 40px auto;
      width: 50%;
      .distance {
        margin-left: 20%;
        vertical-align: bottom;
      }
      .chat {
        width: 28px;
        height: 28px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;

        &:nth-child(2) {
          .mixin(0);
        }
        &:nth-child(3) {
          .mixin(28px);
        }
        &:nth-child(4) {
          .mixin(56px);
        }
      }

      .chat-text {
        vertical-align: middle;
      }
    }

    .enter {
      border: 0;
      border: 1px solid #ccc;
      outline: 0;
      height: 20px;
      padding-left: 6px;
      width: 76%;
      &:focus {
        outline: @color solid 1px;
      }
    }
  }

</style>