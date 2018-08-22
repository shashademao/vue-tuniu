<template>
	<div class="recommend">
		<ul class="title" @click='none'>
			<li class="active">当季热推</li>
			<li>出境游</li>
			<li>国内游</li>
			<li>周边游</li>
		</ul>
		<ol class="sub-title" @click='none'>
			<li><div class="wrapper active">全部</div></li>
			<li><div class="wrapper">心动迪士尼</div></li>
			<li><div class="wrapper">出游正当时</div></li>
			<li><div class="wrapper">趣玩海岛游</div></li>
			<li><div class="wrapper">亲子度假</div></li>
			<li><div class="wrapper">放假日本</div></li>
			<li><div class="wrapper">欧美澳新</div></li>
			<li><div class="wrapper">省心邮轮季</div></li>
		</ol>
		<div class="product">
			<div 
			class="product-item" 
			v-for='place in recommendList' 
			:key='place.id'
			@click='selectItem(place)'
			>
				<div class="pic-wrapper">
					<img v-lazy="place.imgUrl" class="product-img">
					<div class="bar"></div>	
				</div>
				<div class="icon">
					<div class="price">
						<p class="top">￥<em>{{place.price}}</em>起</sub></p>
						<p class="bottom">已省￥{{place.discount}}</p>
					</div>
					<div class="sati-peo">
						<span class="peo">{{place.count}}出游</span>
						<span class="sati">{{place.satisfy}}%满意</span>
					</div>
				</div>
				<div class="desc">
					<h2 class="product-title">{{place.title}}</h2>
					<p class="product-desc">{{place.desc}}</p>				
				</div>
			</div>
			<loading v-show='hasMore'></loading>
		</div>
	</div>
</template>
<script type="text/javascript">
	import loading from '../../base/loading.vue'
	import undo from '../../common/js/mixins.js'

	export default{
		mixins:[undo],
		props:['recommendList','hasMore'],
		components:{
			loading
		},
		methods:{
			selectItem(place){
				this.$router.push({
					path:`/recommendDetail/${place.id}`
				})
			}
		}		
	}
</script>
<style lang='less' scoped>
	@import '../../common/css/variable.less';
	@import '../../common/css/mixins.less';

	.recommend{
		margin-top: .2rem;
		background-color: #fff;
		overflow: hidden;
		.title{
			overflow: hidden;
			width: 100%;
			border-bottom: 2px solid #dedede;
			li{
				float: left;
				width: 25%;
				height: .82rem;
				line-height: .82rem;
				text-align: center;
				font-size: .32rem;
			}
			.active{
				color:@baseColor;
				border-bottom: 2px solid @baseColor;
			}
		}
		.sub-title{
			width: 100%;
			overflow: hidden;
			li{
				float: left;
				width: 25%;
				padding: .2rem;
				text-align: center;
				box-sizing: border-box;
				.wrapper{
					width: 100%;
					height: .48rem;
					line-height: .48rem;
					text-align: center;
					box-sizing: border-box;
					background-color:#F6F6F8;
					font-size: .22rem;
					border-radius: .12rem;
					color:#A1A1A2;
				}
				.active{
					border: 1px solid @baseColor;
					background-color: #F4FFFB;
					color:@baseColor;
				}
			}
		}
		.product{
			overflow: hidden;
			.product-item{
				margin-bottom: .2rem;
				.pic-wrapper{
					width: 100%;
					height:3rem;
					position: relative;
					overflow: hidden;
					.product-img{
						width: 100%;
						position: absolute;
						top: -1.65rem;
						left: 0;
					}
					.bar{
						position: absolute;
						bottom: 0;
						left: 0;
						right: 0;
						height: .6rem;
						background: linear-gradient(transparent,rgba(0,0,0,0.6))
					}	
				}
				.icon{
					position: relative;
					.price{
						width: 1.8rem;
						position: absolute;
						bottom: .2rem;
						left: .2rem;
						text-align: center;
						border-radius: .1rem;
						.top{
							color:#fff;
							font-size: .24rem;
							line-height: .6rem;
							background-color: #f70;
							border-top-left-radius: 0.1rem;
							border-top-right-radius: 0.1rem;
							em{
								font-size: .32rem;
							}
						}
						.bottom{
							font-size: .26rem;
							line-height: .4rem;
							color:#fff;
							background-color: #484848;
							border-bottom-right-radius: 0.1rem;
							border-bottom-left-radius: 0.1rem;
						}
					}
					.sati-peo{
						position: absolute;
						bottom: .12rem;
						right: .3rem;
						color:#fff;
						font-size:.18rem;
						span{
							margin-left: .14rem;
						}
					}
				}
				.desc{
					padding: .2rem .3rem;
					.product-title,.product-desc{
						color: #222;
					    font-size: .32rem;
					    line-height: .44rem;
					    margin-right: .4rem;
						.ellipsis
					}
					.product-desc{
						font-size:.24rem;
						line-height: .4rem;
					}
				}
			}
		}
	}
</style>