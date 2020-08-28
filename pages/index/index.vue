<template>
	<view class="content">
		 <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item,index) in swipers" :key="item.id">
				<image class="swiper-item-image" :src="item" mode="aspectFill"></image>
			</swiper-item>		                        
		  </swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers:[],
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
					url:'https://www.wanandroid.com/banner/json',
					success:(res)=> {
						console.log(res)
						var dataList = res.data.data
						//循环集合,并加入数组中
						dataList.forEach((item, index) => {
							this.swipers.push(dataList[index]['imagePath'])
						})
						
						console.log(this.swipers)
					},
					fail: (e) => {
						console.log(e)
					}
				})
			}
		}
	}
</script>

<style>
	.swiper-item-image {
		width: 750rpx;
		height: 360rpx;
	}
</style>
