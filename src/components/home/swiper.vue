<template>
	<div class="swiper">
		<swiper :options="swiperOption">
		    <swiper-slide v-for="slide in swiperList" :key='slide.id'>
		    	<img :src="slide.imgUrl" class="swiper-img">
		    </swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
	    </swiper>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['swiperList'],	
		data(){
			return{
				swiperOption: {
					loop:true,
				    autoplay: true,
			        pagination: {
			           el: '.swiper-pagination'
			        }
		        }
			}
		}
	}
</script>
<style lang='less' scoped>
	.swiper{
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom:20%;
		.swiper-img{
			width: 100%;
		}
	}
</style>