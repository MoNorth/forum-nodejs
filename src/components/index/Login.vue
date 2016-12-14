/**
* 登录
* Created by yxt
* 2016/12/12
**/

<template>
  <div class="wrapper" v-bind:class="{'border_line': data.showborder}">
    <div class="border-click" @click="toggle('showborder')">展示边框</div>
    <div class="header">
      <img src="../../static/images/person.jpg" width="103px" height="107px">
    </div>
    <form class="form-panel">
      <div class="form-group form-text" v-bind:class="{'focusbe': data.focususer, 'bluraf': !data.focususer}">
        <input type="text" placeholder="请输入用户名..." @focus="toggle('focususer')" @blur="toggle('focususer')" v-model="data.username">
      </div>
      <div class="form-group form-text" v-bind:class="{'focusbe': data.focuspw, 'bluraf': !data.focuspw}">
        <input type="password" placeholder="请输入密码..." @focus="toggle('focuspw')" @blur="toggle('focuspw')" v-model="data.password">
      </div>
      <div class="form-group form-check">
        <label title="为了确保你的安全，请不要在网吧或者公共机房勾选此项" @click="toggle('isBefore')">
          <span  v-bind:class="{'remenber-before': data.isBefore, 'remenber-after': !data.isBefore}"></span>下次自动登录
        </label>
        <span class="getpassword">忘记密码?</span>
      </div>
      <div class="form-group form-button">
        <button type="button" v-link="{name: '', params: {user: data.username}}">注&nbsp;册</button>
        <button type="button" v-link="{name: '', params: {user: data.username}}">登&nbsp;录</button>
      </div>
    </form>
    <div class="third distance">
      <span class="left-line"></span>
      <span class="third-text">第三方登录</span>
      <span class="right-line"></span>
    </div>
    <div class="method distance">
      <span v-link="{name: ''}"></span>
      <span v-link="{name: ''}"></span>
      <span v-link="{name: ''}"></span>
    </div>
  </div>
</template>

<script>

  let data = {
    isBefore: true,
    focususer: true,
    focuspw: true,
    showborder: true,
    username: '',
    password: ''
  }

  export default {
    name: 'login',

    data() {
      return {
        data: data
      }
    },

    methods: {
      // toggle() {
      //  this.data.isBefore = !this.data.isBefore;
      //  //console.log(this.data.isBefore);
      // },
      // changeuser() {
      //  this.data.focususer = !this.data.focususer;
      //  //console.log('ok');
      // },
      // changepw() {
      //  this.data.focuspw = !this.data.focuspw;
      // },
      // showborder() {
      //  this.data.showborder = !this.data.showborder;
      // }

      toggle(attr) {
        this.data[attr] = !this.data[attr];
      }
    }
  }

</script>

<style lang="less">
  .wrapper {
    max-width: 400px;
    min-width: 360px;
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

    @url: "../../static/images/chat.png";
    
    width: 30%;
    margin: 20px auto;
    font-size: 1.1em;
    font-family: '微软雅黑';
    color: #aaa;

    .header {
      width: 103px;
      height: 107px;
      margin: 20px auto;
    }

    .form-group, .distance {
      width: 83.333%;
      margin: 20px auto;
    }

    .focusbe {
      border: 1px solid #ccc;
    }

    .bluraf {
      border: 1px solid #4296d9;
    }

    .form-text {
      border-radius: 3px;
      height: 44px;
      input {
        border: 0;
        width: 94.666%;
        height: 100%;
        margin-left: 5.334%;

        &:focus {
          outline: 0;
        }
      }
    }

    .form-check {

      .clearfix;

      label {
        float: left;
        vertical-align: middle;
        font-weight: normal;
        cursor: pointer;
      }

      .getpassword {
        float: right;
        cursor: pointer;
        vertical-align: middle;
        &:hover {
          color: #227dc5;
        }
      }

      .remenber-before {
        display: inline-block;
        width: 13px;
        height: 13px;
        border: 1px solid #ccc;
        border-radius: 2px;
        margin-right: 5px;
      }

      .remenber-after {
        display: inline-block;
        width: 13px;
        height: 13px;
        background: url("../../static/images/check.jpg") no-repeat;
        margin-right: 5px;
      }
    }

    .form-button {
      .clearfix;
      button {
        width: 40.666%;
        height: 40px;
        color: #fff;
        border: 0;
        font-size: 1.2em;
        &:first-child {
          float: left;
          background-color: #7fb764;
          &:hover {
            background-color: #7fb764+10;
          }
        }
        &:last-child {
          float: right;
          background-color: #4296d9;
          &:hover {
            background-color: #4296d9+10;
          }
        }
      }
    }

    .third {

      .clearfix;

      .left-line, .right-line {
        height: 1px;
        width: 34.666%;
        background-color: #e4e4e8;
        margin-top: 10px;
      }

      .left-line {
        float: left;
      }

      .right-line {
        float: right;
      }

      .third-text {
        padding-left: 4%;
      }
    }

    .method {
      span {
        display: inline-block;
        width: 28px;
        height: 28px;
        cursor: pointer;
        margin: 0 11.333%;
        &:first-child {
          background: url(@url) no-repeat 0 0;
        }
        &:nth-child(2) {
          background: url(@url) no-repeat 0 -28px;
        }
        &:last-child {
          background: url(@url) no-repeat 0 -56px;
        }
      }
    }

    .border-click {
      color: #ccc;
      cursor: pointer;
    }
  }

  .border_line {
      border: 1px solid #cfd6de;
      box-shadow: 0 2px 2px #cfd6de;
    }

</style>