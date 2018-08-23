<template>
	<Scroll class='wrapper'>
		<div class="suggest">
			<ul class="letter-wrapper">
				<li 
					class="letter-city-name border-bottom" 
					v-for='v in ret' :key='v.id'
					@click='chooseCity'
				>{{v.name}}</li>
				<li class="letter-city-name border-bottom"
					v-show='!ret.length'>没有找到相关的城市</li>
			</ul>
		</div>
	</Scroll>	
</template>
<script>
	import Scroll from '../../base/scroll.vue'
	import {mapMutations} from 'vuex'

	export default{
		props:['ret'],
		methods:{
			chooseCity(e){
				this.setCity(e.target.textContent)
				this.$router.push('/home')
			},
			...mapMutations({
				setCity:'setCity'
			})
		},
		components:{
			Scroll
		},
	}
</script>
<style lang="less" scoped>
	.wrapper{
		position: fixed;
		top: 1.9rem;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1000;
		padding: 0 .3rem;
		background-color:#fff;
		overflow: hidden;
		.suggest{
			.letter-wrapper{
				padding:0 .3rem;
				.letter-city-name{
					line-height: .9rem;
					font-size: .26rem;
					color:#222;
				}
			}
		}	
	}
	
</style>