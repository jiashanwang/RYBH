<template>
	<view>
		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper activeColor="#f29100" ref="tabs" :list="list" :current="current" @change="change"
					:is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition"
				@animationfinish="animationfinish">
					<swiper-item class="swiper-item">
						<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
							<view class="page-box order">
									<block v-for="(item,index) in orderList" :key="index">
										<view class="item">
											<view class="left">
												<image :src="item.detail_img" mode="widthFix"></image>
											</view>
											<view class="content">
												<view class="title u-line-2">{{ item.product_name }}</view>
												<view class="type">下单时间：{{ item.create_time }}</view>
												<view class="delivery-time" v-if="item.pay_state == 0">发货时间: 次日发货</view>
												<view class="delivery-time" v-if="item.pay_state == 1">支付时间: {{item.pay_time}}</view>
											</view>
											<view class="right">
												<view class="price">
													￥{{ item.amount }}
													<!-- <text class="decimal">.{{ priceDecimal(item.amount) }}</text> -->
												</view>
												<view class="number">x{{ item.buy_no }}</view>
											</view>
										</view>
											<view class="bottom">
												<view class="more"><u-icon name="more-dot-fill"
														color="rgb(203,203,203)"></u-icon></view>
												<view class="logistics btn">查看物流</view>
												<view class="exchange btn">卖了换钱</view>
												<view class="evaluate btn">评价</view>
											</view>
									</block>
								<!-- <u-loadmore :status="loadStatus[0]" bgColor="#f2f2f2"></u-loadmore> -->
							</view>
							<!-- <u-line color="red" /> -->
						</scroll-view>
					</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderList: [],
				list: [{
						name: '待付款'
					},
					{
						name: '待发货'
					},
					{
						name: '待收货'
					},
					{
						name: '退款/售后',
					}
				],
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
				loadStatus: ['loadmore', 'loadmore', 'loadmore', 'loadmore'],
				payState: 0, // 0未支付 1支付成功
			};
		},
		onLoad() {
			this.getOrderList(0);
		},
		computed: {
			// 价格小数
			// priceDecimal() {
			// 	return val => {
			// 		if (val !== parseInt(val)) return val.slice(-2);
			// 		else return '00';
			// },
			// 价格整数
			// priceInt() {
			// 	return val => {
			// 		if (val !== parseInt(val)) return val.split('.')[0];
			// 		else return val;
			// 		return "00"
			// 	};
			// }
		},
		methods: {
			btnClick(){
				
			},
			reachBottom() {
				// 此tab为空数据
				// if (this.current != 2) {
				// 	this.loadStatus.splice(this.current, 1, "loading")
				// 	setTimeout(() => {
				// 		this.getOrderList(this.current);
				// 	}, 1200);
				// }
			},
			// 页面数据
			// getOrderList(idx) {
			// 	for (let i = 0; i < 5; i++) {
			// 		let index = this.$u.random(0, this.dataList.length - 1);
			// 		let data = JSON.parse(JSON.stringify(this.dataList[index]));
			// 		data.id = this.$u.guid();
			// 		this.orderList[idx].push(data);
			// 	}
			// 	this.loadStatus.splice(this.current, 1, "loadmore")
			// },
			getOrderList(index) {
				let payState = index;
				let params = {
					openid: uni.getStorageSync("ipAddress")?uni.getStorageSync("ipAddress"):"",
					productType: 1,
					payState
				};
				uni.request({
					url: 'http://aaa.itgy.com.cn/paybackcmj/miniprogram/getOrderListByType',
					// url: 'http://127.0.0.1:5000/paybackcmj/miniprogram/getOrderListByType',
					data: {
						...params
					},
					method: "POST",
					success: (res) => {
						let result = res.data;
						this.orderList = result.data;
					}
				});
			},
			// 总价
			totalPrice(item) {
				let price = 0;
				// item.map(val => {
				// 	price += parseFloat(val.price);
				// });
				// return price.toFixed(2);
			},
			// 总件数
			totalNum(item) {
				let num = 0;
				// item.map(val => {
				// 	num += val.number;
				// });
				// return num;
			},
			// tab栏切换
			change(index) {
				this.swiperCurrent = index;
				this.getOrderList(index);
			},
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}
		}
	};
</script>

<style>
	/* #ifndef H5 */
	page {
		height: 100%;
		background-color: #f2f2f2;
	}
	/* #endif */
</style>

<style lang="scss" scoped>
	.order {
		width: 710rpx;
		background-color: #ffffff;
		margin: 20rpx auto;
		border-radius: 20rpx;
		box-sizing: border-box;
		padding: 20rpx;
		font-size: 28rpx;
		

		.top {
			display: flex;
			justify-content: space-between;

			.left {
				display: flex;
				align-items: center;

				.store {
					margin: 0 10rpx;
					font-size: 32rpx;
					font-weight: bold;
				}
			}

			.right {
				color: $u-type-warning-dark;
			}
		}

		.item {
			display: flex;
			margin: 20rpx 0 0;
			.left {
				margin-right: 20rpx;

				image {
					width: 200rpx;
					height: 200rpx;
					border-radius: 10rpx;
				}
			}

			.content {
				.title {
					font-size: 28rpx;
					line-height: 50rpx;
				}

				.type {
					margin: 10rpx 0;
					font-size: 24rpx;
					color: $u-tips-color;
				}

				.delivery-time {
					color: #e5d001;
					font-size: 24rpx;
				}
			}

			.right {
				margin-left: 10rpx;
				padding-top: 20rpx;
				text-align: right;

				.decimal {
					font-size: 24rpx;
					margin-top: 4rpx;
				}

				.number {
					color: $u-tips-color;
					font-size: 24rpx;
				}
			}
		}

		.total {
			margin-top: 20rpx;
			text-align: right;
			font-size: 24rpx;

			.total-price {
				font-size: 32rpx;
			}
		}

		.bottom {
			display: flex;
			margin-top: 40rpx;
			padding: 0 10rpx;
			justify-content: space-between;
			align-items: center;

			.btn {
				line-height: 52rpx;
				width: 160rpx;
				border-radius: 26rpx;
				border: 2rpx solid $u-border-color;
				font-size: 26rpx;
				text-align: center;
				color: $u-type-info-dark;
			}

			.evaluate {
				color: $u-type-warning-dark;
				border-color: $u-type-warning-dark;
			}
		}
	}

	.centre {
		text-align: center;
		margin: 200rpx auto;
		font-size: 32rpx;

		image {
			width: 164rpx;
			height: 164rpx;
			border-radius: 50%;
			margin-bottom: 20rpx;
		}

		.tips {
			font-size: 24rpx;
			color: #999999;
			margin-top: 20rpx;
		}

		.btn {
			margin: 80rpx auto;
			width: 200rpx;
			border-radius: 32rpx;
			line-height: 64rpx;
			color: #ffffff;
			font-size: 26rpx;
			background: linear-gradient(270deg, rgba(249, 116, 90, 1) 0%, rgba(255, 158, 1, 1) 100%);
		}
	}

	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;
	}

	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		height: 100%;
	}
</style>