<template>
	<view class="content">
		<!-- 导航栏 -->
		<u-navbar :is-back="false" title="" title-color="white" :background="background" >
			<view class="slot-wrap">
				
				<view class="map-wrap">
					<u-icon name="map" color="#ffffff" size="24"></u-icon>
					<text class="map-wrap-text">青岛</text>
					<!-- <u-icon name="arrow-down-fill" color="#ffffff" size="22"></u-icon> -->
				</view>		
				<view class="search-wrap" >
					<!-- 如果使用u-search组件，必须要给v-model绑定一个变量 -->
					<u-search height="56" :show-action="false" :action-style="{color: '#fff'}"></u-search>
				</view>
				<view class="navbar-right" >
					<view class="message-box right-item">
						<u-icon name="chat" size="38"></u-icon>
						<u-badge count="18" size="mini" :offset="[-15, -15]"></u-badge>
					</view>
					<view class="dot-box right-item">
						<u-icon name="calendar-fill" size="38"></u-icon>
						<u-badge size="mini" :is-dot="true" :offset="[-6, -6]"></u-badge>
					</view>
				</view>
				
			</view>
		</u-navbar>
		
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
	export default {
		data() {
			return {
				title: 'Hello',
				background: {
					backgroundImage: 'linear-gradient(45deg, rgb(42,132,255), rgb(234,175,200))'
				}
			}
		},
		onLoad() {
			this.$u.route("/uview-ui/components/u-full-screen/u-full-screen?id=1");
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;
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
