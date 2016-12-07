/**
* Create by northk
* 2016/12/7
**/

<template>
	<footer class="footer">
		<p class="left">@{{time}} 3G论坛</p>
		<p class="right">
			<a href="https://github.com/MoNorth/forum-nodejs">Github·MoNorth</a> |
			<a href="http://xiyoumobile.com/">西邮移动应用开发实验室</a> |
			<a href="http://www.xiyou.edu.cn/">西安邮电大学</a>
		</p>
	</footer>
</template>

<script>
	export default {
	  name: 'myfooter',
	  data () {
	    return {
	      time: new Date().getFullYear()
	    }
	  }
	}
</script>

<style lang="less">
	@color:#ccc;
	.footer{
		color: @color - 80;
		width: 80%;
		margin: 3rem auto;
		border-top: 2px solid @color;
		padding: 2rem;
	}
</style>