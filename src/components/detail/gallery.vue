<template>
	<div class="gallery" @click.stop='handleClick' v-show='showFlag'>
		<div class="wrapper">
			<swiper :options="swiperOption">
			    <swiper-slide v-for='(slide,i) in galleryImgs' :key='i'>
			    	<img :src='slide' class="pic">
			    </swiper-slide>
			    <div class="swiper-pagination" slot="pagination"></div>
	   		</swiper>
		</div>
	</div>
</template>
<script>
	export default{
		props:['productDetail','showFlag'],
		data(){
			return {
				galleryImgs:['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534484887503&di=7753e4826d2dc236de6161e3bdd03d1d&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180130%2F82d878d64bb3494fba18fd5ec7bac7fc.jpeg'],
				swiperOption:{
					pagination: {
			           el: '.swiper-pagination',
			           type:'fraction',
			           observeParents:true,
			           observer:true,
			        },
				},
			}
		},
		methods:{
			initData(){
				this.galleryImgs.unshift(this.productDetail.imgUrl)
			},
			handleClick(){
				this.$emit('toggle')
			}
		},
		watch:{
			productDetail(){
				this.initData()
			}
		}
	}
</script>
<style lang="less" scoped>
	.gallery{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color:#000;
		z-index: 1000;
		display: flex;
		flex-direction: column;
		justify-content: center;
		.wrapper{
			height: 0;
			width: 100%;
			padding-bottom: 100%;
			.pic{
				width: 100%;
			}
			.swiper-container{
				overflow: inherit;
			}
			.swiper-pagination{
				color: #fff;
				bottom:-0.6rem;
			}
		}
	}
</style>