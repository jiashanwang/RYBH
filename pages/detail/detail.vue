<template>
	<!--大牌卡劵购物车页面-->
	<view class="card-container">
		<view class="card-header">
			<view class="left-wrap">
				<view class="img-wrap">
					<u-image :src="orderData.icon" width="140rpx" height="140rpx" shape="square"></u-image>
				</view>
				<view class="product-desc">
					<view class="name u-font-lg">{{orderData.name}}</view>
					<view class="face-value">价格：{{orderData.amount}}元</view>
				</view>
			</view>
			<view class="notice-desc">支持 7 天无理由退换货</view>
		</view>
		<view class="line-operate"></view>
		<view class="guige">
			<view>规格：默认规格</view>
			<view>包装：默认包装</view>
		</view>
		<view class="use-desc">支付成功后，可前往 "个人中心 - 我的订单" 查看</view>
		<!-- 	 <view class="buy-wrap u-padding-10">
	    <view class="buy-title u-font-xl">购买数量</view>
	    <view class="buy-operate">
		  <u-number-box v-model="buyNum" @minus="minusClick" @plus="plusClick" :step="1" :min="1" :max="100" :size="26"></u-number-box>
	    </view>
	  </view> -->
		<view class="buy-wrap u-padding-10">
			<view class="buy-title">购买数量</view>
			<view class="buy-operate">
				<u-number-box v-model="buyNum" :min="1" :max="100" @change="valChange" integer></u-number-box>
			</view>
		</view>
		<u-gap height="10" bg-color="#f4f4f5"></u-gap>
		<view class="total-wrap product-total u-padding-10">
			<view class="title u-font-xl">商品合计</view>
			<view class="total-style">¥ {{totalPrice}}</view>
		</view>
		<view class="total-wrap u-padding-10">
			<view class="title u-font-xl">快递费</view>
			<view class="total-style u-font-md">包邮到家</view>
		</view>
		<view class="footer-wrap">
			<view class="left-box">
				<view class="total-num">共 {{buyNum}} 件</view>
				<view class="total-money u-flex-row">合计 <i class="price-style">¥ {{totalPrice}}</i></view>
			</view>
			<!-- <view class="buy-btn u-font-lg" @tap="getAliPayFormData">立即支付</view> -->
			<view class="buy-btn u-font-lg" @tap="handleExchangePay">立即支付</view>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ipAddress:"",// 当前访问的ip地址
				payType: "alipay",
				goodsUrl: "",
				orderData: {},
				buyNum: 1,
				totalPrice: 0,
				list: [
					// {
					// 	name: '微信',
					// 	disabled: false
					// },
					{
						name: '支付宝',
						disabled: true
					}
				],
				value: '微信',
			}
		},
		onLoad(option) {
			this.orderData = JSON.parse(decodeURIComponent(option.orderData));
			this.totalPrice = this.orderData.amount;
		},
		methods: {
			handleExchangePay() {
				let outtradeno = window.sessionStorage.getItem("outOrderNo");
				let orderType = 2;
				if (!outtradeno) {
					outtradeno = this.randomNumber();
					orderType = 1;
				};
				let amount = this.totalPrice; 
				let params = {
					outtradeno,
					amount,
					orderType,
					openid:"", // 小程序用户openid
					appid:"",// 小程序appid
					productName:this.orderData.name,
					buyNum:this.buyNum,
					detailImg:this.orderData.icon
				};
				uni.request({
					url: 'http://aaa.itgy.com.cn/paybackcmj/miniprogram/createPayOrder',
					// url: 'http://127.0.0.1:5002/paybackcmj/miniprogram/createPayOrder',
					data: {
						...params
					},
					method: "POST",
					success: (res) => {
						let result = res.data;
						if (result.code == 0){
							let ipAddress = result.data;
							this.ipAddress = ipAddress;
							uni.setStorageSync("ipAddress",ipAddress);
							this.getAliPayFormData(outtradeno,amount);
						}
					}
				});
			},
			valChange(e) {
				console.log('当前值为: ' + e.value)
				let currNum = e.value;
				this.totalPrice = this.orderData.amount * currNum;
			},
			randomNumber() {
				const now = new Date()
				let month = now.getMonth() + 1
				let day = now.getDate()
				let hour = now.getHours()
				let minutes = now.getMinutes()
				let seconds = now.getSeconds()
				month = month < 10 ? "0" + month : month;
				day = day < 10 ? "0" + day : day;
				hour = hour < 10 ? "0" + hour : hour;
				minutes = minutes < 10 ? "0" + minutes : minutes;
				seconds = seconds < 10 ? "0" + seconds : seconds;
				let orderCode = now.getFullYear().toString() + month.toString() + day + hour + minutes + seconds + (Math
					.round(Math.random() * 1000000)).toString();
				return orderCode;
			},
			generateCode(url) {
				// 方法1:
				// const newPage = window.open(); 
				// newPage.location.href = url
				// 方法2: 推荐
				const a = document.createElement('a');
				const id = 'newpage'
				a.setAttribute('href', url);
				a.setAttribute('target', '_self');
				a.setAttribute('id', id);
				// 防止反复添加
				if (!document.getElementById(id)) {
					document.body.appendChild(a);
				}
				a.click();
			},
			/**
			 * 获取支付宝支付链接
			 */
			getAliPayFormData(outOrderNo,amount) {
				let params = {
					outOrderNo: outOrderNo,
					amount: amount,
					// appid: "2021004125645133", // 庭行百货
					appid:"2021004125637397",// 国晟商行
					// appid:"2021004126692216",// 如风五金商行
					// notifyUrl:"",
					notify_url_ali: "",
					goodsName: this.orderData.name
				}
				uni.request({
					url: 'http://aaa.itgy.com.cn/paybackcmj/order/getAliPayObject',
					// url: 'http://127.0.0.1:5001/paybackcmj/order/getAliPayObject',
					data: {
						...params
					},
					method: "POST",
					success: (res) => {
						let result = res.data;
						this.generateCode(result);
					}
				});
			},
			radioGroupChange(value) {
				this.payType = value == "微信" ? "wxpay" : "alipay";
			},
			radioChange(value) {
				this.payType = value == "微信" ? "wxpay" : "alipay";
			},
			exchangePay() {
				this.$refs.uToast.show({
					type: 'success',
					message: "正在跳转支付页面......",
					duration: 3000,
				})
			},
			// 购买数量加事件
			plusClick() {
				let handleBuyNum = this.buyNum + 1;
				this.totalPrice = handleBuyNum * this.orderData.amount;
			},
			// 购买数量减事件
			minusClick(data) {
				let handleBuyNum = this.buyNum - 1;
				this.totalPrice = handleBuyNum * this.orderData.amount;
			},


		}
	}
</script>

<style lang="scss" scoped>
	.guige {
		// width:80%;
		// padding:0 auto;
		display: flex;
		padding: 30rpx;
		justify-content: space-between;
		align-items: center;
		background-color: #ffffff;
	}

	.card-container {
		display: block;
		/* margin:0 24rpx; */
		background-color: #f5f5f5;
		position: relative;
	}

	.card-header {
		display: block;
		padding: 0 24rpx;
		height: 180rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #ffffff;
		position: relative;
	}

	.left-wrap {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 180rpx;
	}

	.product-desc {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		margin-left: 15rpx;
		height: 150rpx;
	}

	.img-wrap .img {
		height: 150rpx;
		border-radius: 15rpx;
	}

	.face-value,
	.use-desc {
		color: #999999;
		font-size: 24rpx;
	}

	.use-desc {
		background-color: #ffffff;
		padding: 40rpx 24rpx;
	}

	.notice-desc {
		background-color: #fff6eb;
		color: #eb8013;
		height: 40rpx;
		line-height: 40rpx;
		border-radius: 20rpx;
		padding-left: 16rpx;
		padding-right: 16rpx;
		font-size: 20rpx;
		position: absolute;
		bottom: 10rpx;
		right: 24rpx;
	}

	.line-operate-mid {
		width: 100%;
		height: 10rpx;
		background-color: #f4f4f5;
	}

	.line-operate {
		height: 30rpx;
		background-color: #ffffff;
		border-bottom: 1rpx solid #eeeeee;
	}

	.buy-wrap {
		font-size: 34rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 140rpx;
		line-height: 140rpx;
		background-color: #ffffff;
	}

	.buy-operate {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.buy-operate .reduce,
	.buy-operate .add {
		width: 70rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		border: 1rpx solid #f2f2f2;
	}

	.buy-operate .num-input {
		width: 80rpx;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		background-color: #f8f8f8;
		border-top: 1rpx solid #f2f2f2;
		border-bottom: 1rpx solid #f2f2f2;
	}

	.total-wrap {
		display: flex;
		justify-content: space-between;
		height: 80rpx;
		line-height: 80rpx;
		background-color: #ffffff;
	}

	.total-wrap .title {
		width: 200rpx;
	}

	.footer-wrap {
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: fixed;
		bottom: 0rpx;
		left: 24rpx;
		right: 24rpx;
		height: 140rpx;
		font-size: 32rpx;
	}

	.pay-type {
		background-color: #ffffff;
	}

	.left-box {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex: 1;
	}

	.price-style,
	.total-style {
		color: #eb8013;
		width: 100rpx;
		margin-left: 10rpx;
	}

	.total-style {
		flex: 1;
		text-align: right;
	}

	.buy-btn {
		width: 190rpx;
		text-align: center;
		color: #ffffff;
		height: 70rpx;
		line-height: 70rpx;
		background: linear-gradient(to right, #fdb208, #f97b04);
		letter-spacing: 5rpx;
		border-radius: 40rpx;
	}

	.total-num {
		flex: 1;
	}

	.total-money {
		flex: 2;
	}

	.pay-box {
		background-color: #ffffff;
	}
</style>