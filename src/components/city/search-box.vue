<template>
	<div class="search-box">
		<div class="search-wrapper">
			<i class="iconfont icon-search"></i>
			<input 
				type="text" 
				placeholder="南京/nanjing/nj" 
				v-model='keywords'
			>
			<i 
				class="iconfont icon-cuowu" 
				v-show='keywords'
				@click='clear'
			></i>
		</div>
		<Suggest :ret='ret' v-show='keywords'></Suggest>
	</div>
</template>
<script>
	import Suggest from '../city/suggest.vue'

	export default{
		props:['cities'],
		data(){
			return {
				keywords:'',
				ret:[],
				timer:null
			}
		},
		methods:{
			clear(){
				this.keywords=''
			}
		},	
		watch:{
			keywords(){
				if(this.keywords===''){
					this.ret=[]
					return
				}
				if(this.timer){
					clearTimeout(this.timer)
				}
				this.timer=setTimeout(()=>{
					var temp=[]
					for(var key in this.cities){
						var data=this.cities[key]
						data.forEach(city=>{
							if(city.name.includes(this.keywords)||city.spell.includes(this.keywords)){
								temp.push(city)	
							}
						})
					}
					this.ret=temp	
				},20)
			}
		},
		components:{
			Suggest
		}
	}
</script>
<style lang='less' scoped>
	.search-box{
		width: 100%;
		height: .9rem;
		padding: .16rem .3rem;
		background-color: #EDF0F5;
		box-sizing: border-box;
		position: absolute;
		top: 1rem;
		left: 0;
		.search-wrapper{
			width: 100%;
			height: 100%;
			padding: .12rem .56rem .12rem .64rem;
			border: 1px solid #d4d4d4;
			background-color: #fff;
			box-sizing: border-box;
			position: relative;
			.icon-search{
				position: absolute;
				top: 50%;
				left: .18rem;
				transform: translateY(-50%);
			}
			.icon-cuowu{
				position: absolute;
				top: 50%;
				right: .14rem;
				transform: translateY(-50%);
			}
			input{
				width: 100%;
				height: 100%;
				box-sizing: border-box;
				font-size: .24rem;
				padding: .06rem;
				color:#222;
			}
		}
	}	
		
</style>