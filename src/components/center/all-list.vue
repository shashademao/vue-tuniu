<template>
	<div class="undepart">
		<Header text='全部订单'></Header>
		<div 
			class="orderBox" 
			v-for='(order,index) in orderList' 
			:key='index'
		>
			<div class="top border-bottom">
				<div class="left">
					<img :src="order.imgUrl">
				</div>
				<div class="right">
					<p class="title">{{order.title}}</p>
					<p class="price">￥{{order.price}}</p>
				</div>
			</div>
		</div>
		<div class="no-result" v-show='!orderList.length'>
			<div class="container">
				<img src="https://m4.tuniucdn.com/fb2/t1/G4/M00/5E/93/Cii-VVnEuQCIGj2HAAAk9Ov4ruIAABfVwL6EcoAACUM923.png">
				<p>亲，这里空空如也~~</p>
				<p>快去添加点订单吧</p>
			</div>
		</div>
	</div>
</template>
<script>
	import Header from '../city/header.vue'
	import { mapGetters } from 'vuex'

	export default{
		computed:{
			...mapGetters([
				'orderList'
			])
		},
		components:{
			Header
		}
	}
</script>
<style lang='less' scoped>
	@import '../../common/css/mixins.less';
	@import '../../common/css/variable.less';

	.border-bottom{
		&::before{
			border-color: #ccc;
		}
	}


	.undepart{
		background-color: #EDF0F5;
		overflow: hidden;
		height: 100vh;
		.orderBox{
			width: 95%;
			margin: 0 auto;
			margin-top: .3rem;
			background-color:#fff;
			.top{
				display: flex;
				padding: .2rem;
				.left{
					width: 2rem;
					height: 1.35rem;
					img{
						width: 100%;
						height: 100%;
					}
				}
				.right{
					flex: 1;
					line-height: 2;
					margin-left: .4rem;
					min-width: 0;
					.title{
						font-size: .32rem;
						color:#222;
						.ellipsis
					}
					.price{
						font-size: .32rem;
						color:#e4393c;
					}
				}	
			}
			.bottom{
				height: 1rem;
				overflow: hidden;
				.btn{
					width: 1.5rem;
					height: .5rem;
					line-height: .5rem;
					margin-top: .22rem;
					margin-right: .2rem;
					border-radius: .4rem;
					text-align: center;
					color:@baseColor;
					border:1px solid @baseColor;
					float: right;
				}
			}
		}
		.no-result{
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			.container{
				width: 5.6rem;
				height: 6.6rem;
				position: absolute;
				top:50%;
				left: 50%;
				transform: translate(-50%,-50%);
				p{
					font-size:.32rem; 
					color:#888;
					line-height: .45rem;
					text-align: center;
				}
			}
		}
	}
</style>