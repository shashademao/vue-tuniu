<template>
	<div class="header border-bottom">
		{{text}}
		<i class="iconfont icon-return" @click='back'></i>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['text'],
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '../../common/css/variable.less';
	.border-bottom{
		&::before{
			border-color:#d4d4d4;
		}
	}

	.header{
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		text-align: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		color:#222;
		font-size: .32rem;
		background-color: #EDF0F5;
		.icon-return{
			position: absolute;
			top: 50%;
			left: .2rem;
			transform: translateY(-50%);
			font-size: .32rem;
			color:@baseColor;
		}
	}
</style>