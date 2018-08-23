<template>
	<div class="section" @click='none'>
		<!-- 热门头条 -->
		<div class="headline">
			<ul class="wrapper" ref='wrapper'>
				<li v-for='(title,index) in headline' :key='index'>
					<div class="item">
						<p class="text">
							<img :src="title.imgUrl" class="item-img">
						{{title.desc}}
						</p>
					</div>
				</li>
			</ul>
			<a href="#" class="headline-pic">
				<img src="https://m3.tuniucdn.com/fb2/t1/G5/M00/48/31/Cii-slpn6BWIet5yAAARnG9iZ_cAACxBQBD6RoAABG0039.png">
			</a>
		</div>
		<!-- 热卖 -->
		<div class="hotSell">
			<div class="product">
				<div class="left">
					<img src="https://m.tuniucdn.com/fb2/t1/G5/M00/2A/A8/Cii-s1sZDMiIAaX_ABALK20Awz0AAIH5gNu9ZgAEAtD104_w350_h0_c0_t0.jpg">
				</div>
				<div class="right">
					<p>普吉岛4晚5或6日自由行</p>
					<p class="pirce"><sub>￥</sub>2167起<span class="discount">8.9折</span></p>
					<div class="time">
						<span>{{time.hours}}</span>
						<span class="none">:</span>
						<span>{{time.minutes}}</span>
						<span class="none">:</span>
						<span ref='seconds'>{{time.seconds}}</span>
					</div>
				</div>
			</div>
			<div class="pic-wrapper">
				<img src="https://m.tuniucdn.com/fb2/t1/G2/M00/89/23/Cii-T1j5u7CIB2HrAAAY_uEh8pQAAJV_wPqjUUAABkW781_w350_h0_c0_t0.png">
			</div>
			<div class="pic-wrapper">
				<img src="https://m.tuniucdn.com/fb2/t1/G1/M00/58/31/Cii9EFiGve6IanopAAA95BPXwDsAAHJBwJ7NbcAAD3819_w350_h0_c0_t0.jpeg">
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import undo from '../../common/js/mixins.js'

	export default{
		mixins:[undo],
		created(){
			this.task()
			this.countDown()
		},
		props:['headline'],
		data(){
			return{
				swiperOption:{
					direction :'vertical',
					autoPlay:true,
					loop:true,
				},
				totalTime:86400,
				timer:null,
				time:{
					hours:'00',
					minutes:'00',
					seconds:'00'
				}
			}
		},
		methods:{
			headlineMove(){
				var count=0
				var pos=0
				setInterval(()=>{
					pos-=1
					count+=1
					this.$refs.wrapper.style.transition='all 0.5s linear'
					this.$refs.wrapper.style.top=pos+'rem'
					if(count===4&&pos===-4){
						setTimeout(()=>{
							this.$refs.wrapper.style.top=0
							this.$refs.wrapper.style.transition='none'
							count=0
							pos=0
						},500)
					}
				},2000)
			},
			countDown(){
				this.timer=setInterval(this.task,1000)
			},
			task(){
				if(this.totalTime===1){
					clearInterval(this.timer)
				}
				this.totalTime--
				var hours=Math.floor(this.totalTime/60/60%24)
				var minutes=Math.floor(this.totalTime/60%60)
				var seconds=Math.floor(this.totalTime%60)
				hours=(hours+'').padStart(2,'0')
				minutes=(minutes+'').padStart(2,'0')
				seconds=(seconds+'').padStart(2,'0')
				this.time={
					hours,
					minutes,
					seconds
				}
			}
		},
		watch:{
			headline(){
				this.headlineMove()
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '../../common/css/mixins.less';
	
	.section{
		overflow: hidden;
		background: #fff;
		position: relative;
		.headline{
			width:80%;
			height: 1rem;
			line-height: .52rem;
			overflow: hidden;
			.wrapper{
				width: 100%;
				height: 50%;
				line-height: 1rem;
				box-sizing: border-box;
				padding-left: .24rem;
				position: relative;
				top: 0;
				left: .1rem;
				.item{
					.text{
						.ellipsis;
						.item-img{
							height: .36rem;
						}	
					}
					
				}	
			}
			.headline-pic{
				position: absolute;
				right: .18rem;
	  			top: .14rem;
	    		height: .6rem;
	    		line-height: .6rem;		
				img{
					display: inline-block;
	   			 	max-width: 1.6rem;
				    max-height: .6rem;
				    vertical-align: middle;
				}
			}
		}
		.hotSell{
			width: 100%;
			height: 2.5rem;
			background:#fff;
			box-sizing: border-box;
			padding:.18rem .24rem;
			display: flex;
			.product{
				flex: 2;
				display: flex;
				padding: .1rem;
				.left{
					width: 1.62rem;
					height: 2rem;
					img{
						width: 100%;
						height: 100%;
						vertical-align: middle;
					}
				}
				.right{
					flex: 1;
					margin-left: .1rem;
					color: #222;
					.pirce{
						margin-top: .2rem;
						color:#FF8800;
						.discount{
							background: #FF8800;
							color:#fff;
							border-radius: 0 .16rem .16rem .16rem;
							position: relative;
							left: .06rem;
						}
					}
					.time{
						margin-top: .2rem;
						font-weight: bold;
						span{
							background-color: #7F808B;
							color: #fff;
							padding: .05rem;
						}
						.none{
							background-color:#fff;
							color:#000;
						}
					}
				}
			}
			.pic-wrapper{
				width: 1.6rem;	
				height: 100%;
				&:nth-child(1){
					margin-right: .1rem;
				}
				img{
					vertical-align: middle;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	
</style>