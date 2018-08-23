<template>
	<div class="login">
		<div class="header">
			<i class="iconfont icon-return" @click='back'></i>
		</div>
		<div class="nav-tab">
			<p>途牛账号登陆</p>
		</div>
		<div class="main">
			<form class="form">
				<div class="form-group border-bottom">
					<input 
						type="text" 
						name="username" 
						placeholder="手机号 / 会员名 / 昵称 / 邮箱"
						v-model='username'
						autocomplete="false" 
					>
					<i 
						class="iconfont icon-cuowu" 
						v-show='username' 
						@click='clearU'>
					</i>
				</div>
				<div class="form-group border-bottom">
					<input 
						type="password" 
						name="username" 
						placeholder="密码"
						v-model='password'
					>
					<i 
						class="iconfont icon-cuowu" 
						v-show='password'
						@click='clearP'
					></i>
				</div>
				<div class="form-group">
					<button class="btn" @click.prevent='submit'>登陆</button>
				</div>
			</form>
		</div>
	</div>
</template>
<script>
	import { mapActions } from 'vuex'

	export default{
	data() {
			return {
				password: '',
				username: ''
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			submit() {
				if (this.username === '') {
					this.$toast('用户名不能为空')
				} else if (this.password === '') {
					this.$toast('密码不能为空')
				} else if (this.username.length > 16) {
					this.$toast('用户名太长啦')
				} else if (this.password.length < 9) {
					this.$toast('密码长度不能少于9位')
				} else {
					window.localStorage.setItem('username', this.username)
					window.localStorage.setItem('password', this.password)
					this.setUserInfo({
						username:this.username,
						password:this.password,
						loginStatus:true
					})
					this.$toast({
						message:'欢迎回来!',
						duration:500
					})
					setTimeout(()=>{
						this.$router.go(-1)
					},600)
				}
			},
			clearU() {
				this.username = ''
			},
			clearP() {
				this.password = ''
			},
			...mapActions([
				'setUserInfo'
			])
		}
	}
</script>
<style lang="less" scoped>
	@import '../../common/css/variable.less';

	.login{
		.header{
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 1rem;
			line-height: 1rem;
			background-color: #fff;
			.iconfont{
				font-size: .48rem;
				color: @baseColor;
				padding-left: .4rem;
			}
		}
		.nav-tab{
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: .32rem;
			color:@baseColor;
			border-bottom: 2px solid @baseColor;
			p{
				padding-bottom: .24rem;
			}
		}
		.main{
			padding: .2rem .8rem;
			.form{
				margin: .3rem;
				.form-group{
					padding: .28rem 0;
					position: relative;
					input{
						width: 100%;
						line-height: .6rem;
						border:none;
						outline: none;
						font-size: .32rem;
						color:#222;
					}
					.iconfont{
						position: absolute;
						top: 50%;
						right: -0.62rem;
						font-size: .52rem;
						transform: translateY(-50%);
					}
					.btn{
						margin-top: .2rem;
						width: 100%;
						height: 1.1rem;
						line-height: 1.1rem;
						color: #fff;
						font-size: .36rem;
						font-weight: bold;
						text-align: center;
						background-color: @baseColor;
					}
				}
			}
		}
	}
</style>