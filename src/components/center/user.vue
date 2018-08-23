<template>
	<div class="user">
		<div class="header border-bottom" @click='back'>
			个人资料
			<i class="iconfont icon-return"></i>
		</div>
		<div class="info">
			<div class="item border-bottom">
				<p class="text">用户名</p>
				<p class="un">shashademao</p>
			</div>
			<div class="item border-bottom">
				<p class="text">密码</p>
				<p class="un">12312313211231323</p>
			</div>
		</div>
		<div class="login-out">
			<button class="btn" @click='loginOut'>退出登录</button>
		</div>
	</div>
</template>
<script>
	import { mapActions } from 'vuex'

	export default{
		methods:{
			back() {
				this.$router.go(-1)
			},
			loginOut(){
				window.localStorage.clear()
				this.setUserInfo({
					username:'',
					password:'',
					loginStatus:false
				})
				this.setNameAndPhone({
					name:'',
					phone:''
				})
				this.destoryList({
					list:[]
				})
				this.$toast({
					message:'退出成功!',
					duration:500
				})
				setTimeout(()=>{
					this.$router.push({
						path:'/center'
					})
				},600)
			},
			...mapActions([
				'setUserInfo',
				'setNameAndPhone',
				'destoryList'
			])
		}
	}
</script>
<style lang="less" scoped>
	@import '../../common/css/variable.less';
	@import '../../common/css/mixins.less';

	.border-bottom{
		&::before{
			border-color: #ccc;
		}
	}

	.user{
		.header{
			width: 100%;
			height: 1rem;
			line-height: 1rem;
			text-align: center;
			background-color: #EDF0F5;
			color: #222;
			font-size: .32rem;
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
		.info{
			padding: .36rem;
			.item{
				width: 100%;
				height: 1.2rem;
				line-height: 1.2rem;
				display: flex;
				.text{
					flex:2;
					color: #B9B9B9;
				}
				.un{
					flex:1;
					font-size: .30rem;
					.ellipsis
				}
			}
		}
		.login-out{
			position: absolute;
			bottom: 4rem;
			right: .36rem;
			left: .36rem;
			height: 1rem;
			line-height: 1rem;
			background-color:pink;
			.btn{
				outline: 0;
				border:none;
				width: 100%;
				height: 100%;
				color: #fff;
				font-weight: bold;
				font-size: .32rem;
				border-radius: .12rem;
				background-color:orange;
			}
		}
	}
</style>