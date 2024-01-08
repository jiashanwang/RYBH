<template>
	<view>
		<!-- 导航栏 -->
		<u-navbar :is-back="true" :is-fixed="true" title="定位" back-icon-color="white" title-color="white" :background="background" :border-bottom="false"/>
		
		<u-index-list :scrollTop="scrollTop" :index-list="indexList">
			<view v-for="(item, index) in list" :key="index">
				<u-index-anchor :index="item.letter" />
				<view class="list-cell u-border-bottom" v-for="(item1, index) in item.data" :key="index">
					{{item1.name}}
				</view>
			</view>
		</u-index-list>
		
	</view>
</template>

<script>
	import indexList from "@/common/index.list.js";
	const letterArr = indexList.list.map(val => {
		return val.letter;
	})
	export default {
		data() {
			return {
				scrollTop: 0,
				indexList: letterArr,
				list: indexList.list,
				background: {
					backgroundImage: 'linear-gradient(90deg, rgb(42,132,255), rgb(234,175,200))'
				},
			}
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		}
	}
</script>

<style lang="scss">
	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: $u-content-color;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
</style>
