<template>
	<div class="home">
		<Header ref='header'></Header>
		<Scroll 
			class='wrapper' 
			ref='scroll'
			:listenScroll='listenScroll'
			:probeType='probeType'
			:pullup='pullup'
			@scroll='scroll'
			@scrollToEnd='searchMore'
		>
			<div>
				<Swiper :swiperList='swiperList'></Swiper>
				<CategoryEntry></CategoryEntry>
				<QuickEntry :iconList='iconList'></QuickEntry>
				<OtherSection :headline='headline'></OtherSection>
				<Recommend 
					:recommendList='recommendList' 
					:hasMore='hasMore'
				>
				</Recommend>
			</div>
		</Scroll>
		<div class="to-top" :class="{hidden:flag}" @click='toTop'>
			<i class="iconfont icon-xiangshang"></i>
		</div>
	</div>
</template>
<script>
	import Header from './home/header.vue'
	import Swiper from './home/swiper.vue'
	import CategoryEntry from './home/category-entry.vue'
	import QuickEntry from './home/quickEntry.vue'
	import OtherSection from './home/other-section.vue'
	import Recommend from './home/recommend.vue'
	import Scroll from '../base/scroll.vue'
	import { mapActions } from 'vuex'

	export default{
		created(){
			this.getData()
			this.checkLogin()
		},
		data(){
			return{
				swiperList:[],
				iconList:[],
				headline:[],
				recommendList:[],
				pages:[],
				listenScroll:true,
				probeType:3,
				flag:true,
				pullup:true,
				page:0,
				hasMore:true
			}
		},
		methods:{
			getData(){
				this.$axios.get('../../static/mock/index.json')
						   .then((res)=>{
						   		if(res.data.ret===true){
						   			var data=res.data.data
						   			this.swiperList=data.swiperList
						   			this.iconList=data.iconList
						   			this.headline=data.headline
						   			this.initData(data.recommendList)
						   		}
						   })
			},
			scroll(pos){
				if(pos.y<-350){
					this.flag=false
				}else{
					this.flag=true
				}
			},
			toTop(){
				this.$refs.scroll.scrollToElement(this.$refs.header.$el,500)
			},
			searchMore(){
				if(this.page===this.pages.length-1){
					this.hasMore=false
					return
				}
				setTimeout(()=>{
					this.page++
					this.recommendList=this.recommendList.concat(this.pages[this.page])
				},500)
				
			},
			initData(data){
				data.forEach((val,i)=>{
					var page=Math.floor(i/6)
					if(!this.pages[page]){
						this.pages[page]=[]
					}
					this.pages[page].push(val)
				})
				this.recommendList=this.pages[0]
			},
			checkLogin(){
				var un=window.localStorage.getItem('username')
				var up=window.localStorage.getItem('password')
				if(un&&up){
					this.setUserInfo({
						username:un,
						password:up,
						loginStatus:true
					})
				}else{
					this.setUserInfo({
						username:'',
						password:'',
						loginStatus:false
					})
				}
			},
			...mapActions([
				'setUserInfo'
			])
		},
		watch:{
			recommendList(){
				setTimeout(()=>{
					this.$refs.scroll.refresh()
				},20)
			}
		},
		components:{
			Header,
			Swiper,
			CategoryEntry,
			QuickEntry,
			OtherSection,
			Recommend,
			Scroll
		}
	}
</script>
<style lang='less' scoped>
	.home{
		background: #F0F0F0;
		position: relative;
		.wrapper{
			position: fixed;
			top:1rem;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 998;
		}
		.to-top{
			position: fixed;
			z-index: 999;
			width: .8rem;
			height: .8rem;
			right: .3rem;
			bottom:2rem;
			background: rgba(248, 248, 248, 0.8);
			border-radius: 50%;
		    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
		    transition: opacity 0.5s linear;
		    .icon-xiangshang{
		    	position: absolute;
		    	top: 50%;
		    	left: 50%;
		    	transform: translate(-50%,-50%);
		    	font-size: .48rem;
		    	color:#333;
		    }
		}
		.hidden{
		    	opacity: 0;
	    }
	}
</style>