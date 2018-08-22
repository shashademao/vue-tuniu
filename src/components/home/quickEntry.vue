<template>
	<div class="quick-entry" @click='none'>
		<swiper :options="swiperOption">
		    <swiper-slide v-for='(page,index) in pages' :key='index'>
		    	<div class="item" v-for="icon in page" :key='icon.id'>
					<div class="img-wrapper">
						<img :src='icon.imgUrl' class="item-img">	
					</div>
					<p class="text">{{icon.desc}}</p>
				</div>
		    </swiper-slide>
	    </swiper>
	</div>
</template>
<script type="text/javascript">
	import undo from '../../common/js/mixins.js'

	export default{
		props:['iconList'],
		mixins:[undo],
		data(){
			return{
				swiperOption:{
					autoPlay:false,
					loop:false
				}
			}
		},
		computed:{
			pages(){
				var pages=[]
				this.iconList.forEach((icon,i)=>{
					var page=Math.floor(i/10)
					if(!pages[page]){
						pages[page]=[]
					}
					pages[page].push(icon)
				})
				return pages
			}
		}
	}
</script>
<style lang='less' scoped>
	@import '../../common/css/mixins.less';

	.quick-entry{
		overflow: hidden;
		width: 100%;
		height: 0;
		padding-bottom: 36%;
		background-color: #fff;
		margin-bottom: .2rem;
		.item{
			overflow: hidden;
			width: 20%;
			height: 0;
			padding-bottom: 17%;
			float: left;
			position: relative;
			.img-wrapper{
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: .28rem;
				text-align: center;
				line-height: 1rem;
				.item-img{
					width: 50%;
				}	
			}
			.text{
				position: absolute;
				left: 0;
				right: 0;
				bottom:0;
				height: .28rem;
				line-height: .28rem;
				text-align: center;
				font-size: .24rem;
				color:#666;
				.ellipsis
			}
		}
	}
</style>