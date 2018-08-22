<template>
	<div class="bottom-bar border-top">
		<div class="price">
			总价：<span>￥<em>{{productDetail.price}}</em></span>
		</div>
		<div class="online border-left" @click='none'>
			<i class="iconfont icon-zixunguwen"></i>
			<p>在线客服</p>
		</div>
		<div class="phone border-left" @click='none'>
			<i class="iconfont icon-buoumaotubiao02"></i>
			<p>电话客服</p>
		</div>
		<div class="buy" @click='buy'>立即预订</div>
	</div>
</template>
<script>
	import { mapGetters,mapMutations } from 'vuex'
 	import undo from '../../common/js/mixins.js'

	export default{
		mixins:[undo],
		props:['productDetail'],
		methods:{
			buy(){
				if(!this.loginStatus){
					this.$toast({
						message:'请先登录再预订',
						duration:800
					})
					setTimeout(()=>{
						this.$router.push({
							path:'/login'
						})
					},900)
				}else{
					this.setProduct(this.productDetail)
					this.$router.push({
						path:'/pay'
					})
				}
			},
			...mapMutations({
				setProduct:'setProduct'
			})
		},	
		computed:{
			...mapGetters([
				'loginStatus'
			])
		}

	}
</script>
<style lang="less" scoped>
	.bottom-bar{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 1rem;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		padding-left: .2rem;
		background-color: #fff;
		.price{
			flex:2;
			font-size: .24rem;
			span{
				color: orange;
				font-size: .2rem;
				em{
					font-size: .32rem;
				}
			}
		}
		.online,.phone{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.iconfont{
				font-size: .36rem;
			}
			p{
				margin-top: .1rem;
				font-size: .14rem;
			}
		}
		.buy{
			width: 100%;
			height: 100%;
			line-height: 1rem;
			text-align: center;
			background-color: #FF8800;
			color: #fff;
			font-size: .32rem;
			font-weight: bold;
		}
		.online,.phone,.buy{
			flex:1;
		}
	}
</style>