/**
* 回到顶部
* Create by northk
* 2016/12/8
**/

<template>
	<div class="backtop onhover" @click="backtopEvent"></div>
</template>

<script>
	export default {
	  name: 'backtop',
	  methods: {
	  	backtopEvent (event) {
	  		let $backtop = event.target
	  		
	  		let _style = {
	  			border: "none",	  			
	  			backgroundPosition: "-84px 5px",
	  			transition: "height 1s ease-in",
	  			height: "350px", 			
	  		}

	  		$backtop.classList.remove("onhover")
	  		Object.assign($backtop.style, _style)

	  		let requestAnimationFrameEvent = () => {
	  			(document.body.scrollTop -= 40) > 0 &&
	  			requestAnimationFrame(requestAnimationFrameEvent)
	  		}

	  		requestAnimationFrame(requestAnimationFrameEvent)
	  		


	  		setTimeout(()=>{
	  			$backtop.classList.add("onhover")
	  			$backtop.style = {}
	  		},1000)
	  	
	  	}
	  }
	 	
	  
	}
</script>

<style lang="less">
	@color: #ccc;
	@keyframes backtop{
		0%{
			background-position: -37px 5px;
		}
		50%{
			background-position: -37px -38px;
		}
		50.1%{
			background-position: -37px 48px;
		}
		100%{
			background-position: -37px 5px;
		}
	}
	.backtop{
		width: 50px;
		height: 50px;
		position: fixed;
		right: 40px;
		bottom: 80px;
		border: 1px solid @color + 30;
		border-radius: 3px;
		background-image: url("../../static/images/backtop.jpg");
		background-size: auto 50px;
		background-repeat: no-repeat;
		background-position: 13px 5px;
		cursor: pointer;
		&.onhover:hover{
			border: 1px solid @color;
			background-position: -37px 5px;
			animation: backtop 1s infinite linear;
		}

	}
</style>