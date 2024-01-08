<template>
	<view class="content">
		
		<!-- 导航栏 -->
		<search-navbar/>
		
		<!-- 轮播 -->
		<view class="wrap">
			<u-swiper :list="list" mode="rect" :effect3d="false"></u-swiper>
		</view>
		
		<!-- 栅格系统 -->
		<u-grid col="4" class="category" :border="false">
			<u-grid-item :key="key" v-for="(item,key) in categoryList" @tap="jumpToCat">
				<image :src="item.img" class="category-img"></image>
				<view class="grid-text">{{item.name}}</view>
			</u-grid-item>
		</u-grid>
		
		
		<!-- 广告 -->
		<image class="adv" mode="widthFix" src="/static/adv.jpg"></image>
		
		<!-- 优惠专区 discount -->
		<view class="discount">
			<text class="discount-title">随机秒杀专区</text>
			<view class="u-flex">
				<view class="left" @tap="jumpToCat">
					<text class="main-title">整点秒杀</text>
					<text class="sub-title">随机秒杀专区</text>
					<image src="../../static/s1.jpg" class="cover" mode="widthFix"></image>
					<text class="u-link">点击进入</text>
				</view>
				<view class="right" @tap="jumpToCat">
					<text class="main-title">限时抢购</text>
					<text class="sub-title">每天14点到23上线</text>
					<image src="../../static/s1.jpg" class="cover" mode="widthFix"></image>
					<text class="u-link">点击进入</text>
				</view>
				<!-- <u-count-down :timestamp="timestamp"></u-count-down> -->
			</view>
		</view>
		
		<!-- 猜你喜欢 -->
	<!-- 	<view class="like-box">
			
			<text class="main-title">
				猜你喜欢
			</text>
			
			<u-row gutter="16" class="goods-list">
				<u-col span="6" :key="item" v-for="(item) in 10" class="goods-item-box">
					<view class="goods-item">
						<u-image src="/static/goods/p1.jpg" :fade="true" duration="450" class="goods-cover" :lazy-load="true" mode="widthFix"></u-image>
						<text>商品名称-商品名称-{{item}}</text>
						<view class="goods-info">
							<text class="price">168￥</text>
							<text class="sale-number" style="font-size: 10upx;">100人付款</text>
						</view>
					</view>
				</u-col>
			</u-row>
			
		</view> -->
		
<!-- 		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">uView - 快速开发的UI框架</text>
		</view> -->

	</view>
</template>

<script>
	import searchNavbar from '@/components/search-navbar.vue';
	export default {
		data() {
			return {
				list: [
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				// 分类菜单
				categoryList: [
					{ id: 1, name: '办公', img: '/static/category/1.png' },
					{ id: 2, name: '家电', img: '/static/category/2.png' },
					{ id: 3, name: '服饰', img: '/static/category/3.png' },
					{ id: 4, name: '日用', img: '/static/category/4.png' },
					{ id: 5, name: '蔬果', img: '/static/category/5.png' },
					{ id: 6, name: '运动', img: '/static/category/6.png' },
					{ id: 7, name: '书籍', img: '/static/category/7.png' },
					{ id: 8, name: '文具', img: '/static/category/8.png' }
				],
				timestamp: 86000
				
				
			}
		},
		onLoad() {
			console.log('onLoad')
			this.checkNetwork()
			console.log(this.$u.os())
		},
		methods: {
			jumpToCat(){
				uni.switchTab({
					url:"/pages/category/category",
				})
			},
			checkNetwork(){
				this.fun.checkNetwork()
				console.log(this.fun.networkType)
			}
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
		background-color: #FDFDFD;
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
	
	.wrap {
		padding: 30rpx;
		width: 100vw;
	}
	
	.category{
		padding: 0 30upx;
		border: 1upx solid #FDF6EC;
		border-left: none;
		border-right: none;
		margin-bottom: 10upx;
	}
	.category-img{
		width: 55upx;
		height: 55upx;
		margin-bottom: 5upx;
	}
	
	.adv{
		margin: 10upx 0;
		width: 90%;
	}
		
	.discount{
		padding: 20upx 50upx;
		width: 100vw;
		.discount-title{
			font-weight: bold;
			font-size: 34upx;
			
		}
		.discount-cover{
			// height: 100upx;
			width: 150upx;
		}
		.u-flex{
			margin-top: 20upx;
			.cover{
				width: 120upx;
				float: right;
				// height: 80upx;
			}
			.left{
				width: 50%;
				background-color: #EBF9F9;
				padding: 15upx;
				margin-right: 1.5%;
				height: 220upx;
			}
			.right{
				width: 50%;
				background-color: #EBF9F9;
				padding: 15upx;
				height: 220upx;
			}
			.main-title{
				// font-weight: bold;
				font-size: 24upx;
				display: block;
			}
			.sub-title{
				font-size: 10upx;
				color: #C8C9CC;
			}
			.u-link{
				font-size: 18upx;
				display: block;
				position: relative;
				top: 70upx;
			}
			.u-countdown{
				font-size: 24upx;
			}
		}
		
	}

	.like-box{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 20upx;
		width: 100vw;
		
		.goods-list{
			width: 100vw;
			padding: 30upx;
			.goods-item-box{
				margin-bottom: 28upx;
			}
			.goods-item{
				padding: 5upx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				background-color: #FFFFFF;
				border: 1upx solid #FDF6EC;
				.goods-cover{
					width: 100%;
				}
				.goods-info{
					width: 100%;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					padding: 10upx 20upx;

					.price{
						flex: 1;
						font-weight: bold;
						color: red;
						text-align: left;
					}
					.sale-number{
						flex: 2;
						font-size: 12upx;
						color: #FAB6B6;
						text-align: right;
					}
				}
			}
		}
		.main-title{
			font-weight: bold;
		}

	}
</style>
