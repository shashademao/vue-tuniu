<template>
	<div class="pay">
		<div class="header">
			<i class="iconfont icon-return" @click='back'></i>
			填写订单
		</div>
		<div class="box">
			<div class="left">
				<img :src="product.imgUrl">
			</div>
			<div class="right">
				<h2>{{product.title}}</h2>
				<p class="pirce">￥{{product.price}}</p>
			</div>
		</div>
		<div class="touristInfo">
			<div class="item title ">联系人信息</div>
			<div class="item">
				<div class="text">姓名</div>
				<div class="info">
					<input type="text" placeholder="必填" v-model='myname'>
				</div>
			</div>
			<div class="item ">
				<div class="text">手机</div>
				<div class="info">
					<input type="text" placeholder='必填，用于接收旅游合同' v-model='myphone'>
				</div>
			</div>
		</div>
		<div class="bottom-bar border-top">
			<p class="price">实付款：<em>{{product.price}}</em></p>
			<button class="btn" @click='submit'>提交订单</button>
		</div>
	</div>
</template>
<script>
	import { mapGetters,mapMutations,mapActions } from 'vuex'

	export default{
		beforeMount(){
			this.init()
		},
		data(){
			return {
				myname:'',
				myphone:''
			}
		},
		methods:{
			init(){
				this.myname=this.name
				this.myphone=this.phone
			},
			back() {
				this.setProduct({})
				this.$router.go(-1)
			},
			submit(){
				if(!this.myname || !this.myphone){
					this.$toast({
						message:'联系人信息必填呀',
						duration:800
					})
				}else{
					this.incOrder({
						'order':this.product
					})
					this.setNameAndPhone({
						'name':this.myname,
						'phone':this.myphone
					})
					this.$messageBox.alert('购买成功!前往订单查看').then( action=>{
						this.$router.push({
							path:'/center'
						})
					})
				}
			},
			...mapActions([
				'incOrder',
				'setNameAndPhone'
			]),
			...mapMutations({
				setProduct:'setProduct'
			})
		},
		computed:{
			...mapGetters([
				'product',
				'name',
				'phone'
			])
		}
	}
</script>
<style lang="less" scoped>
	@import '../../common/css/variable.less';
	.border-top{
		&::before{
			border-color: #ccc;
		}
	}
		

	.pay{
		background-color:#EDF0F5;
		.header{
			width: 100%;
			height: 1rem;
			line-height: 1rem;
			text-align: center;
			background-color: #EDF0F5;
			color: #222;
			font-size: .36rem;
			position: fixed;
			top: 0;
			left: 0;
			.iconfont{
				color: @baseColor;
				position: absolute;
				top: 50%;
				left:.4rem;
				transform: translateY(-50%);
			}
		}
		.box{
			background-color: #fff;
			width: 100%;
			height: 33%;
			display: flex;
			.left{
				width: 3.4rem;
				height: 0;
				padding-bottom: 37.5%;
				img{
					width: 100%;
				}
			}
			.right{
				flex: 1;
				padding: .2rem;
				font-size: .32rem;
				line-height: .4rem;
				color:#222;
				.pirce{
					margin-top: .2rem;
					color:#e4393c;
				}
			}
		}
		.touristInfo{
			margin-top: .25rem;
			min-height: 100px;
			padding: .2rem;
			background-color: #fff;
			.item{
				border:1px solid #ccc;
				padding: .3rem .4rem;
				display: flex;
				&.title{
					line-height: .5rem;
					background-color: #F4F4F4;
				}
				.text{
					width: 2rem;
					line-height: .6rem;
				}
				.info{
					flex: 1;
					input{
						box-sizing: border-box;
						font-size: .26rem;
						border:1px solid transparent;
						padding: .1rem;
						&:focus{
							border:1px solid orange;
						}
					}
				}
			}
		}
		.bottom-bar{
			background-color: #fff;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			height: 1rem;
			line-height: 1rem;
			display: flex;
			justify-content: space-between;
			padding-left: .4rem;
			font-size: .28rem;
			color: #222;
			.price{
				em{
					font-size: .32rem;
					color:#e4393c;
					font-weight: bold;
				}
			}
			.btn{
				font-size: .32rem;
				background-color: #FF7C70;
				color: #fff;
				padding: .2rem;
			}
		}
	}
</style>