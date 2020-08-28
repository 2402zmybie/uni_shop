<template>
	<view class="content">
		<!-- 轮播图 -->
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item,index) in swipers" :key="item.id">
				<image class="swiper-item-image" :src="item" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item">
				<view class="iconfont icon-ziyuan"></view>
				<text>老何超市</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-guanyuwomen"></view>
				<text>联系我们</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-tupian"></view>
				<text>社区图片</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-shipin"></view>
				<text>学习视频</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="title">推荐商品</view>
			<!-- list -->
			<view class="goods_list">
				<view class="goods_item">
					<image class="goods_item_image" src="https://cdn.pixabay.com/photo/2014/04/14/20/11/japanese-cherry-trees-324175_150.jpg"></image>
					<view class="price">
						<text>869874</text>
						<text>2615</text>
					</view>
					<view class="name">
						Hans
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: [],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500
			}
		},
		//请求数据
		onLoad() {
			this.getSwipers()
		},
		methods: {
			// async getSwipers() {
			// 	const res = await this.$myRequest({
			// 		url:'/banner/json'
			// 	})
			// 	console.log(res)
			// }

			getSwipers() {
				uni.request({
					url: 'https://www.wanandroid.com/banner/json',
					success: (res) => {
						// console.log(res)
						var dataList = res.data.data
						//循环集合,并加入数组中
						dataList.forEach((item, index) => {
							this.swipers.push(dataList[index]['imagePath'])
						})

						// console.log(this.swipers)
					},
					fail: (e) => {
						console.log(e)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		swiper {
			width: 750rpx;
			height: 380rpx;
			.swiper-item-image {
				width: 100%;
				height: 100%;
			}	
		}
		// nav子view设置flex布局,排列在一行
		.nav{
			display: flex;
			.nav_item {
				width: 25%;
				text-align: center;
				view{
					width: 120rpx;
					height: 120rpx;
					background: $shop-color;
					border-radius: 60rpx;
					margin: 20rpx auto;
					line-height: 120rpx;
					color: white;
					font-size: 50rpx;
				}
				.icon-tupian {
					font-size: 45rpx;
				}
				text{
					font-size: 30rpx;
				}
			}
		}
		.hot_goods {
			background: #eee;
			overflow: hidden;
			margin-top: 10px;
			.title {
				background: white;
				height: 50px;
				line-height: 50px;
				text-align: center;
				letter-spacing: 10px;
				color: $shop-color;
				margin: 7px 0;
			}
			.goods_list {
				padding: 0 15rpx;
				// 条目
				.goods_item {
					background: white;
					width: 355rpx;
					// 条目图片
					.goods_item_image {
						
						width: 284rpx;
						height: 150px;
					}
				}
			}
		}
	}
</style>
