<template>
	<view>
		<view class="news_item" v-for="(item) in list" :key="item.id" @click="goToNewsWeb(item)">
			<image :src="item.envelopePic"></image>
			<view class="right">
				<view class="title">{{ item.desc }}</view>
				<view class="info"> 
					<text>发表时间: {{ item.niceDate }}</text>
					<text>浏览: {{ item.superChapterId }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['list'],
		methods:{
			goToNewsWeb(item) {
				console.log("条目")
				uni.navigateTo({
					url:'./news-web-detail/news-web-detail?url=' + item.link
				})
			}
		}
	}
</script>

<style lang="scss">
	.news_item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;
		image {
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}
		// 设置flex布局为侧轴对其
		.right {
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			// 设置最多显示两行
			.title {
				font-size: 30rpx;
				line-height: 50rpx;
				overflow : hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
			.info {
				font-size: 24rpx;
				text:nth-child(2) {
					margin-left: 30rpx;
				}
			}
		}
		
	}
</style>
