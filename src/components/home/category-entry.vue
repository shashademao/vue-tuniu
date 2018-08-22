<template>
	<div class="category" @click='none'>
		<div class="row">
			<div class="col border-rightbottom">
				<img src="../../common/image/travel.gif" class="category-img">
			</div>
			<div class="col col2">
				<div class="item travel border-rightbottom">跟团游</div>
				<div class="item travel border-rightbottom">自由行</div>
			</div>
			<div class="col col2">
				<div class="item travel border-bottom">邮轮游</div>
				<div class="item travel border-bottom">酒店+景点</div>
			</div>
		</div>

		<div class="half-row">
			<div class="item travel border-right">
				出境游
			</div>
			<div class="item travel border-right">
				国内游
			</div>
			<div class="item travel">
				周边游
			</div>
		</div>

		<div class="row">
			<div class="col border-rightbottom">
				<img src="../../common/image/plane.gif" class="category-img">
			</div>
			<div class="col col2">
				<div class="item ticket border-rightbottom">国际机票</div>
				<div class="item ticket border-rightbottom">汽车票+包车</div>
			</div>
			<div class="col col2">
				<div class="item ticket border-bottom">火车票+抢票</div>
				<div class="item ticket border-bottom">租车+接送</div>
			</div>
		</div>

		<div class="half-row">
			<div class="item border-right">
				<img src="../../common/image/hotel.gif" class="half-row-img">
			</div>
			<div class="item hotel border-right">
				国际酒店
			</div>
			<div class="item hotel">
				顶地玩乐
			</div>
		</div>

		<div class="row">
			<div class="col col2 border-rightbottom">
				<div class="item others border-rightbottom">签证</div>
				<div class="item others border-rightbottom">目的地攻略</div>
			</div>
			<div class="col col2">
				<div class="item others border-rightbottom">国际机票</div>
				<div class="item others border-rightbottom">汽车票+包车</div>
			</div>
			<div class="col col2">
				<div class="item others border-bottom">火车票+抢票</div>
				<div class="item others border-bottom">租车+接送</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import undo from '../../common/js/mixins.js'

	export default{
		mixins:[undo]
	}
</script>
<style lang="less" scoped>
	.category{
		padding: .1rem;
		background: #fff;
		.row{
			display: flex;
			width: 100%;
			height: 2rem;
			font-weight: bold;
			margin-bottom: .1rem;
			&:nth-child(1){
				margin-bottom: 0;
			}
			.col{
				flex: 1;
				.category-img{
					width: 100%;
					height: 100px;
					display: block;
				}
			}
			.col2{
				display: flex;
				flex-direction: column;
				font-size: .32rem;
				line-height: 1rem;
				color:#fff;
				text-align: center;
				.item{
					flex: 1;
				}
			}
			.travel{
				background-color: #10BE62;
			}
			.ticket{
				background-color: #4D91FF;
			}
			.others{
				background-color: #FFA100;
			}
		}
		.half-row{
			display: flex;
			width: 100%;
			height: 1rem;
			font-weight: bold;
			margin-bottom: .1rem;
			.item{
				flex: 1;
				font-size: .32rem;
				line-height: 1rem;
				color:#fff;
				text-align: center;
				.half-row-img{
					width: 100%;
					height: 100%;
					display: block;
				}
			}
			.travel{
				background-color: #10BE62;
			}
			.hotel{
				background-color: #FF703B;
			}
		}
	}
</style>