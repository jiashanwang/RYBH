<template>
	<view>
		<!-- 导航栏 -->
		<u-navbar :is-back="true" :is-fixed="true" title="搜索" back-icon-color="white" title-color="white" :background="background" :border-bottom="false"/>
		
		<view class="">
			<u-dropdown>
				<u-dropdown-item v-model="value1" title="综合" :options="options1"></u-dropdown-item>
				<u-dropdown-item v-model="value2" title="价格" :options="options2"></u-dropdown-item>
				<u-dropdown-item v-model="value2" title="销量" :options="options2"></u-dropdown-item>
			</u-dropdown>
		</view>
		
		<view class="u-m-20">
			<u-row gutter="16" class="goods-list">
				
				<u-col span="6" :key="item" v-for="(item) in 12" class="goods-item-box u-m-b-20">
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
		</view>

		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: {
					backgroundImage: 'linear-gradient(90deg, rgb(42,132,255), rgb(234,175,200))'
				},
				value1: 1,
				value2: 2,
				options1: [{
						label: '默认排序',
						value: 1,
					},
					{
						label: '距离优先',
						value: 2,
					},
					{
						label: '价格优先',
						value: 3,
					}
				],
				options2: [{
						label: '从低到高',
						value: 1,
					},
					{
						label: '从高到底',
						value: 2,
					},
				],
				loadStatus: 'loadmore',
				flowList: [],
				list: [
					{
						price: 35,
						title: '北国风光，千里冰封，万里雪飘',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23327_s.jpg'
					},
					{
						price: 75,
						title: '望长城内外，惟余莽莽',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic.sc.chinaz.com/Files/pic/pic9/202002/zzpic23325_s.jpg'
					},
					{
						price: 385,
						title: '大河上下，顿失滔滔',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'
					},
					{
						price: 784,
						title: '欲与天公试比高',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/zzpic23369_s.jpg'
					},
					{
						price: 7891,
						title: '须晴日，看红装素裹，分外妖娆',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2130_s.jpg'
					},
					{
						price: 2341,
						shop: '李白杜甫白居易旗舰店',
						title: '江山如此多娇，引无数英雄竞折腰',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23346_s.jpg'
					},
					{
						price: 661,
						shop: '李白杜甫白居易旗舰店',
						title: '惜秦皇汉武，略输文采',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23344_s.jpg'
					},
					{
						price: 1654,
						title: '唐宗宋祖，稍逊风骚',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					},
					{
						price: 1678,
						title: '一代天骄，成吉思汗',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					},
					{
						price: 924,
						title: '只识弯弓射大雕',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					},
					{
						price: 8243,
						title: '俱往矣，数风流人物，还看今朝',
						shop: '李白杜甫白居易旗舰店',
						image: 'http://pic1.sc.chinaz.com/Files/pic/pic9/202002/zzpic23343_s.jpg'
					}
				]
					
				
			
			};
		}
	}
</script>

<style lang="scss">
	.content {
		background-color: #F8F8F8;
		height: 100vh;
		width: 100vw;
	}
	.u-dropdown{
		border-bottom: 1upx solid #FDF6EC;
	}
</style>
