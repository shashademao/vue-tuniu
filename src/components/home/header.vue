<template>
	<div class="header">
		<div class="logo">
			<img src="../../common/image/logo.jpg" class="logo-img">
		</div>
		<router-link class="address" tag='div' to='/city'>
			{{city}}
			<i class="iconfont icon-iconfontjiantou"></i>
		</router-link>
		<div class="input">
			青岛
			<i class="iconfont icon-search"></i>
		</div>
		<router-link class="user" tag='div' to='/center'>
			<i class="iconfont icon-yonghuzhongxin"></i>
		</router-link>
		<div class="nav" @click='showNavBlock'>
			导航
			<div class="arrow-wrapper" :class="{rotate:showFlag}">
				<i class="iconfont icon-iconfontjiantou"></i>
			</div>
		</div>
		<navBlock :navBlock='navBlock' :showFlag='showFlag'></navBlock>
	</div>	
</template>
<script>
	import {mapGetters} from 'vuex'
	import navBlock from '../home/nav-block.vue'

	export default{
		created(){
			this.getData()
		},
		data(){
			return {
				navBlock:[],
				showFlag:false
			}
		},
		methods:{
			getData(){
				this.$axios.get('../../../static/mock/index.json')
						   .then((res)=>{
						   		if(res.data.ret===true){
						   			this.navBlock=res.data.data.navBlock
						   		}
						   })
			},
			showNavBlock(){
				this.showFlag=!this.showFlag
			}
		},
		computed:{
			...mapGetters([
				'city'
			])
		},
		components:{
			navBlock
		}
	}
</script>
<style lang='less' scoped>
	@import '../../common/css/variable.less';
	@import '../../common/css/mixins.less';	

	.header{
		width: 100%;
		height: 1rem;
		background-color: @baseColor;
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		.logo{
			width: .9rem;
			height: 100%;
			line-height: 1rem;
			text-align: center;
			float: left;
			.logo-img{
				width: .75rem;
				height: .68rem;
			}
		}
		.address,.nav{
			.ellipsis;
			float: left;
			width: 1.2rem;
			height: 100%;
			line-height: 50px;
			box-sizing: border-box;
			padding-left: .1rem;
			font-size: .32rem;
			color: #fff; 
			.icon-iconfontjiantou{
					font-size: .08rem;
				}
			.arrow-wrapper{
				transition: all 0.3s linear;
				display: inline-block;
				transform-origin: 50% 50%;
				.icon-iconfontjiantou{
					font-size: .08rem;
				}
			}
			
			.rotate{
				transform:rotate(-180deg);
			}
		}
		.input{
			flex: 1;
			border-radius: .12rem;
			background: #fff;
			box-sizing: border-box;
			margin-top: .2rem;
			height: .6rem;
			line-height: .4rem;
			padding: .1rem;
			padding-left:.5rem; 
			position: relative;
			color:#bbb;
			.icon-search{
				position: absolute;
				top: .1rem;
				left: .1rem;
			}
		}
		.user{
			width: .8rem;
			line-height: 1rem;
			float: left;
			text-align: center;
			.icon-yonghuzhongxin{
				font-size: .48rem;
				color: #fff;
				display: inline-block;
			}
		}
	}
</style>