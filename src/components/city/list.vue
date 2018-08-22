<template>
	<Scroll 
		class='wrapper' 
		ref='scroll'
		:probeType='probeType'
		:listenScroll='listenScroll'
		@scroll='scroll'
	>
		<div>
			<div class="list">
				<div class="title">
					<h2>根据您的定位推荐</h2>
					<ul class="btn-wrapper">
						<li class="item">
							<div class="btn" @click='chooseCity'>深圳</div>
						</li>
					</ul>
					<h2>热门城市</h2>
					<ul class="btn-wrapper">
						<li 
							class="item" 
							v-for='hotCity in hotCities' 
							:key='hotCity.id' 
							@click='chooseCity'
						>
							<div class="btn">{{hotCity.name}}</div>
						</li>
					</ul>
				</div>
				<div class="letter-city-list">
					<div 
						class="block" 
						v-for='(c,key) in cities' 
						:key='key'
						ref='group'
					> 
						<h3 :ref='key'>{{key}}</h3>
						<ul class="letter-wrapper">
							<li 
								class="letter-city-name border-bottom" v-for='cc in c' 
								:key='cc.id'
								@click='chooseCity'
							>{{cc.name}}
							</li>
						</ul>	
					</div>
				</div>
			</div>
		</div>
	</Scroll>	
</template>
<script>
	import Scroll from '../../base/scroll.vue'
	import { mapGetters,mapMutations } from 'vuex'

	export default{
		props:['cities','hotCities'],
		data(){
			return{
				groupHeight:[],
				probeType:3,
				listenScroll:true,
				currentIndex:0,
			}
		},
		methods:{
			caculateHeight(list){
				var height=0
				this.groupHeight.push(height)
				list.forEach(item=>{
					this.groupHeight.push(height+=item.offsetHeight)
				})
			},
			scroll(pos){
				var scrollY=pos.y
				if(scrollY>=0){
					this.currentIndex=0
					return
				}

				for(var i=0;i<this.groupHeight.length-2;i++){
					var h1=this.groupHeight[i]
					var h2=this.groupHeight[i+1]
					if(Math.abs(scrollY)>=h1&&Math.abs(scrollY)<h2){
						this.currentIndex=i
						return
					}
				}

				this.currentIndex=this.groupHeight.length-2
			},
			chooseCity(e){
				this.setCity(e.target.textContent)
				this.$router.push('/home')
			},
			...mapMutations({
				setCity:'setCity'
			})
		},
		computed:{
			...mapGetters([
				'letter',
			])
		},
		watch:{
			letter(){
				var ele=this.$refs[this.letter][0]
				this.$refs.scroll.scrollToElement(ele,200)
			},
			currentIndex(newVal){
				this.$emit('change',newVal)
			}
		},
		components:{
			Scroll
		},
		updated(){
			this.caculateHeight(this.$refs.group)
		}
	}
</script>
<style lang="less" scoped>
	.border-bottom{
		&::before{
			border-color: #dedede;
		}
	}
	.wrapper{
		position: absolute;
		top:1.9rem;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 999;
		overflow: hidden;
		.list{
			padding-top: .3rem;
			.title{
				padding-left: .3rem;
				h2{
					font-size: .32rem;
					color:#999;
				}
				.btn-wrapper{
					margin: .2rem .4rem .2rem 0;
					overflow: hidden;
					.item{	
						float: left;
						width: 22%;
						margin-right: .2rem;
						margin-bottom: .3rem;
						box-sizing: border-box;
						.btn{
							text-align: center;
							line-height: .6rem;
							box-sizing: border-box;
							border: 1px solid #ddd;
							border-radius: .12rem;
						}
					}
				}
			}
			.letter-city-list{
				h3{
					padding-left: .3rem;
					color:#222;
					background-color: #f5f5f5;
					line-height: .6rem;
				}
				.letter-wrapper{
					padding:0 .3rem;
					.letter-city-name{
						line-height: .9rem;
					}
				}
			}
		}	
	}

	
</style>