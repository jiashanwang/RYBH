<template>
	<view class="content">
		<!-- 导航栏 -->
		<!-- <u-navbar :is-back="false" :is-fixed="true" title="" title-color="white" :background="background" :border-bottom="false"/> -->
		<u-navbar :is-back="false" title="" title-color="white" :background="background" :border-bottom="false">
			<view class="slot-wrap">
				
				<view class="map-wrap"></view>		
				<view class="search-wrap" ></view>
				<view class="navbar-right" >
					<view class="message-box right-item">
						<u-icon name="bell" size="38"></u-icon>
						<u-badge count="18" size="mini" :offset="[-15, -15]"></u-badge>
					</view>
					<view class="dot-box right-item">
						<u-icon name="setting" size="38"></u-icon>
						<u-badge size="mini" :is-dot="true" :offset="[-6, -6]"></u-badge>
					</view>
				</view>
				
			</view>
		</u-navbar>
		
		
		
		<!-- 用户背景 -->
		<view class="user-bg">
			
		</view>

		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">
				uView - 多平台快速开发的UI框架
			</text>
		</view>
		<view class="link-demo">
			<u-link :color="$u.color['primary']" :under-line="true" href="http://www.uviewui.com">Link超链接组件演示</u-link>
		</view>
	</view>
</template>

<script>
	// import '../../components/search-navbar.vue'
	import searchNavbar from '@/components/search-navbar.vue';
	export default {
		data() {
			return {
				title: 'Hello',
				background: {
					backgroundImage: 'linear-gradient(90deg, rgb(42,132,255), rgb(234,175,200))'
				}
			}
		},
		onLoad() {
			this.$u.route("/uview-ui/components/u-full-screen/u-full-screen?id=1");
		},
		methods: {
		},
		components: { searchNavbar }
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 100rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}
	
	.title {
		font-size: 28rpx;
		color: $u-content-color;
	}
	
	.link-demo {
		margin-top: 80rpx;
	}

	// 
	.user-bg{
		 // background: linear-gradient(red,yellow,blue); /* 标准语法 */
		background: linear-gradient(90deg, rgb(42,132,255), rgb(234,175,200));
		width: 100vw;
		height: 300upx;
	}
	
	
	// 导航栏
	.navbar-right {
		margin-right: 24rpx;
		display: flex;
	}
	
	.search-wrap {
		margin: 0 20rpx;
		flex: 1;
	}
	
	.right-item {
		margin: 0 12rpx;
		position: relative;
		color: #ffffff;
		display: flex;
	}
	
	.message-box {
		
	}
	
	.slot-wrap {
		display: flex;
		align-items: center;
		flex: 1;
	}
	
	.map-wrap {
		display: flex;
		align-items: center;
		padding: 4px 6px;
		// background-color: rgba(240,240, 240, 0.35);
		color: #fff;
		font-size: 20rpx;
		border-radius: 100rpx;
		margin-left: 30rpx;
	}
	
	.map-wrap-text {
		padding: 0 6rpx;
	}
</style>
