<template>
	<view class="content">
		<u-navbar :is-back="false" title="购物车" title-color="white" :background="background"></u-navbar>
		
		<!-- 购物车 -->
		<view class="cart">
			
			<view class="cart-item" :key="item" v-for="(item) in 6">
				<u-row gutter="16">
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
							<view class="cart-footer">
								<text class="price">166￥</text>
								<u-number-box v-model="value" 
								@change="valChange" :max="100">	
								</u-number-box>
							</view>
						</view>
					</u-col>
				</u-row>
			</view>
			
		</view>
		
		
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
	margin-top: 20upx;
	width: 100vw;
	height: 180upx;
	background-color: #FFFFFF;
	// border-bottom: 1px solid #DBF1E1;
	.cart-item{
		width: 100%;
		height: 180upx;
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
				display: flex;
				flex-direction: row;
				align-items: left;
				justify-content: space-between;
				.price{
					flex: 1;
					width: 50%;
				}
				.u-numberbox{
					flex: 1;
					width: 50%;
				}
			}
		}
	}
}
</style>
