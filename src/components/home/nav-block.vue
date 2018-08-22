<template>
	<div class="block" v-show='showFlag' :class="{active:showFlag}" @click='none'>
		<ul class="container">
			<li class="border-rightbottom" v-for='icon in navBlock' :key='icon.id'>
				<a href="#">
					<div class="item">
						<img :src="icon.imgUrl">
						<p>{{icon.desc}}</p>
					</div>
				</a>
			</li>
		</ul>
		<div class="mask"></div>
	</div>
</template>
<script>
	import undo from '../../common/js/mixins.js'

	export default{
		props:['navBlock','showFlag'],
		mixins:[undo]
	}
</script>
<style lang="less" scoped>
	.border-rightbottom{
		&::before,&::after{
			border-color: #E3E3E3;
		}
	}

	.block{
		position: fixed;
		top: 1rem;
		bottom: 0;
		width: 100%;
		z-index: 999;
		opacity: 0;
		transition: opacity 1s linear;
		.container{
			width: 100%;
			overflow: hidden;
			position: relative;
			z-index: 998;
			li{
				width: 33.33%;
				float: left;
				a{
					.item{
						width: 100%;
						height: 1.12rem;
						background-color: #fff;
						display: flex;
						align-items: center;
						justify-content:center;
						img{
							width: .4rem;
							height: .4rem;
							vertical-align: middle;
							margin-right: .1rem;
						}
					}
				}
			}
		}
		.mask{
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color:rgba(0, 0, 0, 0.5);
		}
	}
	.active{
		opacity: 1;
	}
</style>