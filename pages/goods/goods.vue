<template>
	<view class="goods_list" >
		<goods-list :goods="goods"></goods-list>
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
		data() {
			return {
				page:1,
				goods:[]
			}
		},
		methods: {
			getPageHotPictures() {
				uni.request({
					url:'https://pixabay.com/api/?key=17921301-974ad23d82135fa91669f2b9f&q=cats&image_type=photo&page=' + this.page,
					success: (res) => {
						console.log(res.data.hits.length)
						this.goods = res.data.hits
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
</style>
