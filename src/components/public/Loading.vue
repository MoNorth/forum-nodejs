/**
* Loading
* Create by northk
* 2016/12/11
* 当loading时不传参，当显示空数据时传入:empty="true"
* 默认图片以宽为基准，当content宽度大于高度时应修改为以高为基准，传入参数:baseHeight="true"
**/

<template>
	<div class="loading">
		<img :src="src" :style="baseHeightStyle">
	</div>
</template>

<script>
	export default {
	  name: 'loading',
	  props: {
	  	empty: Boolean,
	  	baseHeight: Boolean
	  },
	  computed: {
	  	src: function() {
	  		return this.empty ? require('../../static/images/empty.jpg')
	  					  : require('../../static/images/loading.gif')
	  	},
	  	baseHeightStyle: function() {
	  		let style = this.empty ? {maxWidth: '378px'} : {maxWidth: '128px'}
	  		this.baseHeight && Object.assign(style, {width: 'auto', height: '100%'})
	  		return style
	  	}
	  }
	 	
	  
	}
</script>

<style lang="less">
	.loading{
		height: 100%;
		width: 100%;
		position: relative;
		img{
			width: 100%;
			position: relative;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
</style>