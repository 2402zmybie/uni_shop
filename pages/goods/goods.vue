<template>
	<view class="goods_list" >
		<goods-list :goods="goods"></goods-list>
		<view class="over-bootom" v-if="flag">-----------我是有底线的-----------</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue'
	export default {
		components:{
			'goods-list':goodsList
		},
		onLoad() {
			this.getPageHotPictures()
		},
		onReachBottom() {
			//判断是否没有下一页数据
			if(this.goods.length < this.page * 20) return this.flag = true
			console.log("触底了"),
			this.page++,
			this.getPageHotPictures()
		},
		onPullDownRefresh() {
			this.page = 1
			this.goods = []
			this.flag = false
			//下拉刷新的时候传入回调函数
			this.getPageHotPictures(()=> {
				uni.stopPullDownRefresh()
			})
		},
		data() {
			return {
				page:1,
				goods:[],
				flag:false
			}
		},
		methods: {
			getPageHotPictures(callBack) {
				uni.request({
					url:'https://pixabay.com/api/?key=17921301-974ad23d82135fa91669f2b9f&q=cats&image_type=photo&page=' + this.page,
					success: (res) => {
						console.log(res.data.hits.length)
						this.goods = [...this.goods,...res.data.hits]
						//如果有callBack 则调用callBack
						callBack && callBack()
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.goods_list {
	background: #eee;
}
.over-bootom {
	width: 100%;
	height: 50rpx;
	line-height: 50px;
	font-size: 28rpx;
}
</style>
