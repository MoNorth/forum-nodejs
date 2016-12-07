/**
* Create by northk
* 2016/12/7
**/


<template>
	<header class="header">
		<h1 class="left">Forum</h1>
		<nav class="left">
			<ul>
				<li>热门话题</li>
				<li>分类话题</li>
				<li>XX话题</li>
			</ul>
		</nav>

	</header>	
</template>

<script>
	export default {
	  name: 'myheader'
	}
</script>

<style lang="less">
	@color: #ccc;
	.header{
		height: 5rem;
		width: 80%;
		margin: 0 auto;
		line-height: 5rem;
		border-bottom: 1px solid @color;
		h1{
			font-size: 2rem;
		}
		nav{
			height: 100%;
			margin-left: 2rem;
			ul{
				height: 100%;

				li{
					margin-top: 1.7rem;
					padding: 0 1rem;
					height: 2rem;
					float: left;
					line-height: 2rem;
					border-right: 1px solid @color;
					&:last-child{
						border:none;
					}
					&:hover{
						background-color: @color + 20;
					}
				}
				
			}
		}
	}
</style>