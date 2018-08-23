<template>
	<div class="city">
		<Header text='选择城市'></Header>
		<SearchBox :cities='cities'></SearchBox>
		<List :cities='cities' :hotCities='hotCities' @change='change'></List>
		<Alphabet :cities='cities' :currentIndex='currentIndex'></Alphabet>
	</div>
</template>
<script>
	import Header from './city/header.vue'
	import SearchBox from './city/search-box.vue'
	import List from './city/list.vue'
	import Alphabet from '../components/city/alphabet.vue'

	export default{
		created(){
			this.getData()
		},
		data(){
			return{
				cities:{},
				hotCities:[],
				currentIndex:0
			}
		},
		methods:{
			getData(){
				this.$axios.get('../../static/mock/city.json')
						   .then((res)=>{
						   		if(res.data.ret===true){
						   			var data=res.data
						   			this.cities=data.data.cities
						   			this.hotCities=data.data.hotCities
						   		}
						   })
			},
			change(index){
				this.currentIndex=index
			}
		},
		components:{
			Header,
			List,
			SearchBox,
			Alphabet
		}
	}
</script>
<style lang='less' scoped>
	.city{
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 999;
	}
</style>