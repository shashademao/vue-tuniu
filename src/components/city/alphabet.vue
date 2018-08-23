<template>
	<ul class="alphabet">
		<li 
			v-for='(letter,i) in letters' 
			:key='letter'
			:ref='letter'
			:class='{active:currentIndex===i}'
			@click='handleClick'
			@touchstart='touchstart'
			@touchmove.prevent='touchmove'
			@touchend='touchend'
		>{{letter}}</li>
		<li class="bubble" v-show='touch.status'>{{currentLetter}}</li>
	</ul>	
</template>
<script>
	import { mapMutations } from 'vuex'
	const LI_HEIGHT=20

	export default{
		props:['cities','currentIndex'],
		data(){
			return{
				currentLetter:'A',
				touch:{
					status:false,
				},
			}
		},
		updated(){
			this.touch.startY=this.$refs['A'][0].offsetTop
		},
		methods:{
			handleClick(e){
				var letter=e.target.textContent
				this.currentLetter=e.target.textContent
				this.setLetter(letter)
			},
			touchstart(){
				this.touch.status=true
			},
			touchmove(e){
				if(this.touch.status){
					var moveY=e.targetTouches[0].clientY-95
					var index=Math.floor((moveY-this.touch.startY)/LI_HEIGHT)
					if(index>0&&index<=this.letters.length){
						this.currentLetter=this.letters[index-1]
						this.setLetter(this.letters[index-1])
					}
				}
			},
			touchend(){
				this.touch.status=false	
			},
			...mapMutations({
				setLetter:'setLetter'
			})
		},
		computed:{
			letters(){
				var letters=[]
				for(var key in this.cities){
					letters.push(key)
				}
				return letters
			}
		}
	}
</script>
<style lang="less" scoped>
	@import '../../common/css/variable.less';

	.alphabet{
		position: fixed;
		z-index: 999;
		right: 0;
		top: 2.1rem;
		bottom: 0;
		width: .44rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		color:@baseColor;
		li{
			height: .4rem;
			line-height: .4rem;
		}
		.active{
			border-radius: 50%;
			background-color: @baseColor;
			color:#fff;
		}
		.bubble{
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
			width: 1rem;
			height: 1rem;
			line-height: 1rem;
			text-align: center;
			border-radius: 50%;
			color:#fff;
			background-color:@baseColor;
			font-size: .36rem;
			font-weight: bold;
		}
	}
	
</style>