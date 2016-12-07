<template>
  <div class="my_footer">
    <p class="footer_logo">论坛</p>
    <ul class="footer_right">
      <li>加入我们</li>
      <li>建议反馈</li>
      <li>联系我们</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'myfooter'
  }
</script>

<style>
  .my_footer{
    width: 60%;
    margin: 100px auto;
    background-color: #fff;
    border-top: 2px solid #00BCD4;
    padding-top: 20px;
  }
  .footer_logo {
    margin-left: 3%;
    cursor: pointer;
    display: inline-block;
  }
  .footer_right {
    color: #999999;
    list-style-type: none;
    display: inline-block;
    float: right;
  }
  .footer_right li {
    cursor: pointer;
    display: inline-block;
  }
</style>