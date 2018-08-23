<template>
	<div class="text-box" @click='none'>
		<div class="title-box">
			<div class="title">
				{{productDetail.desc}}
			</div>
			<div class="price">
				<p>途牛价格 ￥<em>{{productDetail.price}}</em>起</p>
			</div> 
		</div>
		<div class="discount-box">
			<div class="activity border-bottom">
				<span>优惠信息</span>
				<span class="item">返现优惠</span>
				<span class="item">点评返现</span>
				<span class="count">2个</span>
				<i class="iconfont icon-iconfontjiantou-copy"></i>
			</div>
			<div class="coupon">
				<span>领券活动</span>
				<span class="item">40元</span>
				<span class="item">300元</span>
				<span class="item">500元</span>
				<span class="item">100元</span>
				<span class="count">2个</span>
				<i class="iconfont icon-iconfontjiantou-copy"></i>
			</div>
		</div>
		<div class="remark-box">
			<div class="remark-profile border-bottom">
				<span>游客点评<i>(<em>{{productDetail.satisfy}}%</em>满意度)</i></span>
				<span class="count">{{productDetail.count}}个点评</span>
				<i class="iconfont icon-iconfontjiantou-copy"></i>
			</div>
			<div class="remark-detail">
				<div class="item">
					行程安排
					<span class="percent">95%</span>
				</div>
				<div class="item">
					餐饮住宿
					<span class="percent">89%</span>
				</div>
				<div class="item">
					旅行交通
					<span class="percent">96%</span>
				</div>
			</div>
		</div>
		<div class="detail-box">
			<h1>这是详情blablabla...</h1>
		</div>
	</div>
</template>
<script type="text/javascript">
	import undo from '../../common/js/mixins.js'

	export default{
		props:['productDetail'],
		mixins:[undo],
	}
</script>
<style lang="less" scoped>
	.border-bottom{
		&::before{
			border-color: #ccc;
		}
	}

	.text-box{
		background-color: #EDF0F5;
		.title-box{
			background-color: #fff;
			padding: .4rem .3rem;
			.title{
				color: #222;
				font-weight: bold;
				font-size: .31rem;
				margin-bottom: .24rem;
				line-height: .4rem;
			}
			.price{
				font-size: .26rem;
				color: orange;
				em{
					font-size: .31rem;
				}
			}
		}
		.discount-box{
			margin-top: .2rem;
			padding: 0 .3rem;
			background-color: #fff;
			.activity,.coupon{
				height: 1rem;
				line-height: 1rem;
				position: relative;
				span{
					font-size: .3rem;
					margin-left: .1rem;
					&.item{
						font-size: .24rem;
						background-color: orange;
						color:#fff;
						padding: .08rem;
						border-radius: .12rem;
					}
					&.count{
						color: #B1B1B1;
						font-size: .24rem;
						position: absolute;
						top: 50%;
						right: .3rem;
						transform: translateY(-50%);
					}
				}
				.iconfont{
					color: #B1B1B1;
					position: absolute;
					top: 50%;
					right:0;
					font-size: .3rem;
					transform: translateY(-50%);
				}
			}
		}
		.remark-box{
			margin-top: .2rem;
			padding: 0 .3rem;
			background-color: #fff;
			.remark-profile{
				height: .9rem;
				line-height: .9rem;
				position: relative;
				span{
					font-size: .3rem;
					margin-left: .1rem;
					&.count{
						color: #B1B1B1;
						font-size: .24rem;
						position: absolute;
						top: 50%;
						right: .3rem;
						transform: translateY(-50%);
					}
					i{
						color: #999;
						font-size: .26rem;
						em{
							color: orange;
							font-weight: bold;
						}
					}
				}
				.iconfont{
					color: #B1B1B1;
					position: absolute;
					top: 50%;
					right:0;
					font-size: .3rem;
					transform: translateY(-50%);
				}
			}
			.remark-detail{
				padding: .24rem 0;
				overflow: hidden;
				.item{
					width: 47%;
					float: left;
					color: #999;
					font-size: .26rem;
					margin-bottom: .2rem;
					margin-left: .1rem;
					.percent{
						display: inline-block;
						height: .32rem;
						width: .9rem;
						margin-left: .3rem;						
						text-align: center;
						background-color: #fff;
						box-sizing: border-box;
						border:1px solid #d5d5d5;
						position: relative;
						&::after{
							content: '';
							border-right: .16rem solid orange;
							border-top: .16rem solid transparent;
							border-bottom: .16rem solid transparent;
							position: absolute;
							top: 50%;
							left: -8px;
							transform: translateY(-50%);
							z-index: 1;
						}
					}
				}
			}
		}
		.detail-box{
			margin-top: .2rem;
			padding: 0 .3rem;
			background-color: #fff;
		}
	}
</style>