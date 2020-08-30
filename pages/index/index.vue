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
			<view class="nav_item"v-for="item in navs" :key="item.title" @click="navItemClick(item)">
				<view :class="item.icon"></view>
				<text>{{ item.title }}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="title">推荐商品</view>
			<!-- 给子组件传递数据 -->
			<goods-list :goods="goods"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				swipers: [],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				//推荐商品
				goods:[],
				//导航跳转
				navs:[{
					icon:'iconfont icon-ziyuan',
					title:'商品列表',
					path:'/pages/goods/goods'
				},{
					icon:'iconfont icon-guanyuwomen',
					title:'联系我们',
					path:'/pages/contact/contact'
				},{
					icon:'iconfont icon-tupian',
					title:'社区图片',
					path:'/pages/pics/pics'
				},{
					icon:'iconfont icon-shipin',
					title:'学习视频',
					path:'/pages/videos/videos'
				}]
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
			},
			navItemClick(item) {
				uni.navigateTo({
					url:item.path
				})
			}
		},
		components:{
			'goods-list':goodsList
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
			
		}
	}
</style>
