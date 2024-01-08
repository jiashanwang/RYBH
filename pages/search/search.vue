<template>
	<view class="content">
		<!-- 导航栏 -->
		<u-navbar :is-back="true" :is-fixed="true" title="搜索" back-icon-color="white" title-color="white" :background="background" :border-bottom="false"/>
		
		<view class="u-p-20 search-box">
			<u-search placeholder="关键字" v-model="keyword" :focus="true"
			:show-action="true" :animation="true" @search="searchKeyword"></u-search>
		</view>
		
		<!-- 关键字 -->
		<view class="u-p-20 keyword-box u-m-t-10">
			<view class="u-m-b-20">
				<text>历史搜索</text>
			</view>
			<view class="keyword-list">
				<u-tag :text="item" mode="light" type="info" class="u-m-l-10 u-m-t-20"
				shape="circle" size="mini" closeable 
				v-for="(item,index) in keywordList"
				@close="tagClick(index)"/>
			</view>
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
				keyword: null,
				keywordList:[
					'男装',
					'鞋品',
					'箱包',
					'配饰',
					'户外运动'
				]
			};
		},
		methods: {
			tagClick(index) {
				console.log(index)
				// delete this.keywordList[index];
				this.keywordList.splice(index,1);
			},
			searchKeyword(){
				let keyword = this.$u.trim(this.keyword);
				if(keyword != ''){
					this.keywordList.push(this.keyword);
					this.keyword = '';
				}else{
					console.log('关键字不存在');
					uni.showToast({title: '关键字不存在',duration: 2000,icon: 'none'})
				}
				
			}
			
		}
	}
</script>

<style lang="scss">
	.content {
		background-color: #F8F8F8;
		height: 100vh;
	}
	.search-box{
		width: 100vw;
		background-color: #FFFFFF;
	}
	.keyword-box{
		width: 100vw;
		background-color: #FFFFFF;
		min-height: 200upx;
	}
</style>
