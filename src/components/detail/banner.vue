<template>
	<div class="banner" @click='toggle'>
		<div class="pic">
			<img :src="productDetail.imgUrl">
		</div>
		<div class="desc">
			<p>{{productDetail.title}}</p>
		</div>
		<Gallery 
			:productDetail='productDetail'
			@toggle='toggle'
			:showFlag='showFlag'
		></Gallery>
	</div>
</template>
<script>
	import Gallery from '../detail/gallery.vue'

	export default{
		props:['productDetail'],
		data(){
			return {
				showFlag:false
			}
		},
		methods:{
			toggle(){
				this.showFlag=!this.showFlag
			}
		},
		components:{
			Gallery
		}
	}
</script>
<style lang="less" scoped>
	.banner{
		overflow: hidden;
		width: 100%;
		padding-top: 50%;
		height: 0;
		position: relative;
		.pic{
			position: absolute;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.desc{
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: .8rem;
			line-height: .8rem;
			color: #fff;
			font-size: .24rem;
			padding-left: .2rem;
			background: linear-gradient(transparent,rgba(0, 0, 0, 0.5))
		}		
	}
</style>