<template>
	<view class="content">
		<u-navbar :is-back="false" title="购物车" title-color="white" :background="background"></u-navbar>
		
		<!-- 购物车 -->
		<view class="cart u-p-20">
			
			<view class="cart-item" :key="item" v-for="(item) in 4">
				<u-row gutter="1">
					<u-col span="1">
						<u-checkbox-group>
							<u-checkbox v-model="checked" shape="circle"></u-checkbox>
						</u-checkbox-group>
					</u-col>
					<u-col span="3">
						<u-image height="160upx" src="/static/goods/p1.jpg" class="cart-item-cover"></u-image>
					</u-col>
					<u-col span="8">
						<view class="cart-info">
							<view class="goods-name">
								<text>DUNKINDONUTS唐恩都乐美国甜甜圈6个礼盒装 随机搭配6款</text>
							</view>
							<view class="">
								<u-tag text="醇黑巧克力【20枚】" mode="light" size="mini" type="info"/>
							</view>
							<u-row class="cart-footer">
								<u-col span="6">
									<text class="price">166￥</text>
								</u-col>
								<u-col span="6" class="number-box">
									<u-number-box v-model="value" 
									@change="valChange" :max="100">	
									</u-number-box>
								</u-col>
							</u-row>

						</view>
					</u-col>
				</u-row>
			</view>
			
		</view>
		
		
		<!-- 底部框 -->
		<u-row gutter="16" class="cart-footer-tool">
			<u-col span="3">
				<u-checkbox-group>
					<u-checkbox v-model="checked" shape="circle">全选</u-checkbox>
				</u-checkbox-group>
			</u-col>
			<u-col span="9" style="text-align: right;">
				<view class="">
					<text>
						合计: 
						<text>￥100</text>
					</text>
					<u-button type="error" size="mini" style="margin:0 30upx;">结算</u-button>
				</view>
			</u-col>
		</u-row>	
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundImage: 'linear-gradient(45deg, rgb(42,132,255), rgb(234,175,200))'
				},
				checked: true,
				value: 1,
			};
		},
		methods: {
			valChange(e) {
				console.log('当前值为: ' + e.value)
			}
		}
	}
</script>

<style lang="scss">
.content{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #FDFDFD;
}
.cart{
	width: 100vw;
	background-color: #FFFFFF;

	.cart-item{
		width: 100%;
		height: 185upx;
		.u-col,
		.u-checkbox-group
		{
			height: 100%;
		}
		.cart-item-cover{
			border: 1upx solid #DBF1E1;
		}
		.cart-info{
			display: flex;
			flex-direction: column;
			align-items: left;
			justify-content: center;
			.goods-name{
				font-size: 20upx;
				margin-bottom: 10upx;
			}
			.cart-footer{
				margin-top:10upx;
				.number-box{
					display: flex;
					flex-direction: column;
					align-items: right;
				}
			}
		}
	}
}

.cart-footer-tool{
	width: 100vw;
	height: 100upx;
	border: 1px solid #DCDFE6;
	position: fixed;
	left: 0;
	bottom: 94upx;
}
</style>
