<template>
	<div class="center">
		<div class="center-center">
			<a href="#" class="user-pic">
				<img src="http://img2.tuniucdn.com/site/wap/img/member/newhome/msite/avatar.png">
			</a>
			<a class="user-nickname" @click='loginOrOut'>
				{{nickname}}
			</a>
			<a href="#" class="icon-recommend">	
				<img src="https://m.tuniucdn.com/fb2/t1/G3/M00/2A/53/Cii_Lllcmo2ISzFqAAAUFDK4JroAACnEQJFY2wAABQs740.png">
			</a>
		</div>
		<div class="center-myorder">
			<div class="myorder-header">
				<a href="#">
					<i class="iconfont icon-quanbudingdan"></i>
					<em>我的订单</em>
				</a>
			</div>
			<div class="myorder-bottom">
				<div class="item" @click='none'>
					<i class="iconfont icon-daifukuan"></i>
					<p>待付款</p>
				</div>
				<div class="item" @click='unDepart'>
					<i class="iconfont icon-jiaoyin"></i>
					<p>待出行</p>
					<i  class="badge" 
						v-show='undepartCount'
					>{{undepartCount}}</i>
				</div>
				<div class="item" @click='none'>
					<i class="iconfont icon-dianping"></i>
					<p>待点评</p>
				</div>
				<div class="item" @click='allList'>
					<i class="iconfont icon-quanbudingdan"></i>
					<p>全部订单</p>
					<i  class="badge" 
						v-show='alllistCount'
					>{{alllistCount}}</i>
				</div>
			</div>
		</div>
		<div class="center-mywallet" @click='none'>
			<div class="mywallet-header">
				<a href="#">
					<i class="iconfont icon-qianbao"></i>
					<em>我的钱包</em>
					<i class="iconfont icon-iconfontjiantou-copy"></i>
				</a>
			</div>
		</div>
		<div class="center-first-pay" @click='none'>
			<div class="mywallet-header">
				<a href="#">
					<i class="iconfont icon-shuye"></i>
					<em>首付出发</em>
					<i class="iconfont icon-iconfontjiantou-copy"></i>
					<span class="text">立即开通</span>
				</a>
			</div>
		</div>
		<div class="center-mymenu" @click='none'>
			<div class="mymenu-header border-bottom">
				<a href="#">
					<i class="iconfont icon-xinniantubiao-shangchuantubiaoku-"></i>
					<em>邀请新伙伴 返1%旅游券</em>
					<img class="mark" src='https://m3.tuniucdn.com/fb2/t1/G5/M00/47/3B/Cii-s1pm2bSIEKjmAAARvAPBn5MAACviAP_nhYAABHU879.png'>
				</a>
			</div>
			<div class="mymenu-bottom" @click='none'>
				<div class="box border-bottom">
					<div class="item">
						<i class="iconfont icon-zixunguwen"></i>
						<p>咨询顾问</p>
					</div>
					<div class="item">
						<i class="iconfont icon-huangguan"></i>
						<p>会员俱乐部</p>
					</div>

					<div class="item">
						<i class="iconfont icon-41"></i>
						<p>常用信息</p>
					</div>
					<div class="item">
						<i class="iconfont icon-dianping"></i>
						<p>我的点评</p>
					</div>
				</div>
			</div>
			<div class="mymenu-bottom">
				<div class="box">
					<div class="item">
						<i class="iconfont icon-buoumaotubiao02"></i>
						<p>社区</p>
					</div>
					<div class="item">
						<i class="iconfont icon-shoucang"></i>
						<p>收藏</p>
					</div>

					<div class="item">
						<i class="iconfont icon-qianzheng"></i>
						<p>签证进度</p>
					</div>
					<div class="item">
						<i class="iconfont icon-gengduo"></i>
						<p>更多</p>
					</div>
				</div>
			</div>
		</div>
		<router-view/>
	</div>
</template>
<script>
	import { mapGetters,mapMutations } from 'vuex'
	import undo from '../../common/js/mixins.js'


	export default{
		mixins: [undo],
		data(){
			return{
				nickname:'登陆 / 注册'
			}
		},
		activated(){
			this.checkLogin()
		},
		methods:{
			allList(){
				this.$router.push('/alllist')
			},
			unDepart(){
				this.$router.push('/undepart')
			},
			checkLogin(){
				var un=window.localStorage.getItem('username')
				if(un){
					this.nickname=un
					this.setLoginStatus(true)
				}else{
					this.nickname='登陆 / 注册'
				}
			},
			loginOrOut(){
				if(this.loginStatus){
					this.$router.push({
						path:'/user'
					})
				}else{
					this.$router.push({
						path:'/login'
					})
				}
			},
			...mapMutations({
				setLoginStatus:'setLoginStatus'
			})
		},
		computed:{
			undepartCount(){
				return this.undepartOrderList.length
			},
			alllistCount(){
				return this.orderList.length
			},
			...mapGetters([
				'loginStatus',
				'username',
				'undepartOrderList',
				'orderList'
			])
		},
	}
</script>
<style lang="less" scoped>
	@import '../../common/css/variable.less';
	.border-bottom{
		&::before{
			border-color: #ccc;
		}
	}

	
	.center{
		background-color: #f0f0f0;
		.center-center{
			width: 100%;
			height: 1.9rem;
			line-height: 1.2rem;
			box-sizing: border-box;
			padding: .36rem .48rem;
			background:url('http://m.tuniucdn.com/fb2/t1/G3/M00/00/76/Cii_JVk_lr-IQay-AABzr77qJA0AAAF-wGfmBsAAHPH902.png') no-repeat 50%/cover;
			position: relative;
			.user-pic{
				display: inline-block;
				width: .88rem;
				height: .88rem;
				img{
					width: 100%;
				}
			}
			.user-nickname{
				margin-left: .2rem;
				color:#fff;
				font-size: .32rem;
			}
			.icon-recommend{
				display: inline-block;
				position: absolute;
				right: 0;
				top: .3rem;
				width: 1.44rem;
				height: .5rem;
				img{
					width: 100%;
				}
			}
		}
		.center-myorder,.center-mymenu{
			background-color: #fff;
			.myorder-header,.mymenu-header{
				padding: .29rem;
				a{
					display: block;
					width: 100%;
					height: .45rem;
					line-height: .45rem;
					font-size: .32rem;	
					.icon-quanbudingdan{
						font-size: .40rem;
						padding-right: .1rem;
						color: @baseColor;
					}
					.icon-xinniantubiao-shangchuantubiaoku-{
						font-size: .40rem;
						color: #e4393c;
						padding-right: .1rem;
					}
					em{
						color:#222;
					}
				}
			}
			.mymenu-header{
				margin-top: .2rem;
				a{
					font-size: .26rem;
				}
			}
			.myorder-bottom,.mymenu-bottom{
				padding: 0 .28rem .24rem;
				display: flex;
				justify-content: space-around;
				text-align: center;
				.item{
					flex:1;
					text-align: center;
					position: relative;
					.iconfont{
						font-size:.55rem;
					}
					p{
						margin-top: .1rem;
						color: #a5a5a5;
					}
					.badge{
						display: block;
						position: absolute;
						top: -.3rem;
						left: 1.2rem;
						width: .3rem;
						height: .3rem;
						padding: 0 .1rem;
						border-radius: 50%;
						color:#fff;
						background-color:@baseColor;
						&::after{
							content: "";
							position: absolute;
							top: 0;
							left: 0;
							border-right: 8px solid @baseColor;
							border-bottom: 8px solid transparent;
							border-top: 8px solid transparent;
						}
					}
				}
			}
		}
		.center-mywallet,.center-first-pay{
			background-color: #fff;
			margin-top: .2rem;
			.mywallet-header{
				padding: .29rem;
				.text{
					float: right;
					font-size: .26rem;
					color: @baseColor;
					margin-right: .1rem;
				}
				a{
					display: block;
					width: 100%;
					height: .45rem;
					line-height: .45rem;
					font-size: .32rem;	
					.icon-qianbao,.icon-shuye{
						font-size: .40rem;
						padding-right: .1rem;
						color: @baseColor;
					}
					.icon-iconfontjiantou-copy{
						float: right;
						color: #ccc;
					}
					em{
						color:#222;
					}
				}
			}
		}
		
		.center-mymenu{
			.mymenu-header{
				a{
					.mark{
						float: right;
						width: 1.6rem;
						height: .4rem;
					}
				}
			}
			.mymenu-bottom{
				.box{
					width: 100%;
					height: 1.3rem;
					display: flex;
					align-items:center;
					justify-content: space-around;
					.item{
						flex:1;
					}
				}
				
			}
		}
	}
</style>