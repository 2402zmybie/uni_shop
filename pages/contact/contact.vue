<template>
	<view class="contact">
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="phone">联系电话:  1234567890( 点击拨打 )</view>
			<view>联系地址:  北京市xxx区xxx街xxx号</view>
		</view>
		<map class="map" :scale="scale" :longitude="longitude" :latitude="latitude" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:114.306039,
				latitude:30.442563,
				scale:11,
				markers: [
					{
						longitude:114.306039,
						latitude:30.442563,
						iconPath:'../../static/hmlogo.png',
						width:30,
						height:30
					}
				]
			}
		},
		methods: {
			phone() {
				console.log('拨打')
				uni.makePhoneCall({
					phoneNumber:'1234567890'
				})
			}
		}
	}
</script>

<style lang="scss">
.contact {
	.img {
		width: 750rpx;
		height: 320rpx;
	}
	.info {
		padding: 10rpx 20rpx;
		font-size: 30rpx;
		view {
			line-height: 80rpx;
			border-bottom: 1px solid #eee;
		}
	}
	.map {
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
