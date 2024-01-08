<template>
	<view class="content">
		
		<u-navbar :is-back="false" title="首页" title-color="white" :background="background" />
				
		<image class="logo" src="/static/logo.png"></image>
		
		<view class="text-area">
			<text class="title">
				uView - 多平台快速开发的UI框架
			</text>
		</view>
		
		<view class="text-area" v-show="(fun.networkType=='none') || (fun.networkType=='unknown')">
			<!-- 判断是否有网络连接 -->
			<u-empty text="无网络连接" 
			:mode=" (fun.networkType=='none') || (fun.networkType=='unknown') ? 'wifi' : 'data' " ></u-empty>
		</view>
		
<!-- 		
		<view class="button-demo">
			
			<u-button :ripple="true">按钮组件演示</u-button>
		</view>
-->
<!-- 		<view class="link-demo">
			<u-link :color="$u.color['primary']" :under-line="true" href="http://www.uviewui.com">跳转uView文档：www.uviewui.com</u-link>
		</view>
		 -->
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '你好',
				networkType: false,
				background: {
					// 渐变色
					backgroundImage: 'linear-gradient(45deg, rgb(101,78,163), rgb(234,175,200))'
				}
			}
		},
		onLoad() {
			console.log('onLoad')
			this.checkNetwork()
		},
		methods: {
			checkNetwork(){
				this.fun.checkNetwork()
				console.log(this.fun.networkType)
			}
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
	
	.button-demo {
		margin-top: 80rpx;
	}
	
	.link-demo {
		margin-top: 80rpx;
	}
</style>
