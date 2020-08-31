<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view :class="active === index? 'active':''" v-for="(item,index) in cates" :key="index" @click="leftClickHandle(index)">{{ item }}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="item" v-for="(item,index) in secondData">
				<image :src="item.previewURL" @click="previewImg(index)"></image>
				<text>{{ item.user }}</text>
			</view>
			<text v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			this.leftClickHandle(0)
		},
		data() {
			return {
				cates:["cat","dog","flowers","children","tiger","fish","bird","cat","dog","cat","dog"],
				active:0,
				secondData:[]
			}
		},
		methods: {
			leftClickHandle(index) {
				this.active = index
				//获取右侧数据
				uni.request({
					url:'https://pixabay.com/api/?key=17921301-974ad23d82135fa91669f2b9f&q='+ this.cates[index] +'&image_type=photo&page=1',
					success: (res) => {
						console.log(res)
						this.secondData = res.data.hits
					}
				})
			},
			previewImg(index) {
				//得到所有图片的集合
				const urls = this.secondData.map((item)=> {
					return item.previewURL
				})
				console.log(urls)
				uni.previewImage({
					urls:urls,
					current:index
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	height: 100%;
}
.pics {
	height: 100%;
	display: flex;
	.left{
		height: 100%;
		width: 200rpx;
		border-right:1px solid #eee;
		view{
			height: 60px;
			line-height: 60px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee;
		}
		.active{
			background: $shop-color;
			color: #FFFFFF;
		}
	}
	.right{
		height: 100%;
		width: 530rpx;
		margin: 10rpx auto;
		image{
			width: 530rpx;
			height: 530rpx;
			border-radius: 5px;
		}
		text{
			font-size: 30rpx;
			line-height: 60rpx;
		}
	}
	
}
</style>
