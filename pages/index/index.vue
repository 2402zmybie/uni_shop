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
				<view class="goods_item" v-for="(item,index) in goods" :key="item.id">
					<image class="goods_item_image" :src="item.previewURL"></image>
					<view class="price">
						<text>${{ item.downloads }}</text>   
						<text>${{ item.favorites }}</text>
					</view>
					<view class="name">
						{{ item.user }}
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
				duration: 500,
				goods:[],
			}
		},
		//请求数据
		onLoad() {
			this.getSwipers()
			this.getHotPictures()
		},
		methods: {
			//请求轮播图
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
			},
			//请求网络图片
			getHotPictures() {
				uni.request({
					url:'https://pixabay.com/api/?key=17921301-974ad23d82135fa91669f2b9f&q=cats&image_type=photo&page=1',
					success: (res) => {
						// console.log(res)
						this.goods = res.data.hits
						console.log(this.goods.length)
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
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				// 条目, 给盒子设置padding之后盒子会被撑大,要想不被撑大,则设置box-sizing: border-box;
				.goods_item {
					background: white;
					width: 355rpx;
					margin: 10rpx 0;
					padding: 15rpx;
					box-sizing: border-box;
					// 条目图片
					.goods_item_image {
						width: 284rpx;
						height: 150px;
						display: block;
						margin: 0 auto;
					}
					.price{
						color: $shop-color;
						font-size: 36rpx;
						margin: 20rpx 0 5rpx 0;
						text:nth-child(2) {
							color: #ccc;
							font-size: 28rpx;
							margin-left: 10rpx;
							text-decoration: line-through;
						}
					}
					.name {
						font-size: 28rpx;
						line-height: 50rpx;
						padding-bottom: 15rpx;
						padding-top: 10rpx;
					}
				}
			}
		}
	}
</style>
