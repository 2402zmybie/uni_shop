<template>
	<view class="news">
		<news-item :list="news"></news-item>
	</view>
</template>

<script>
	import {newsItem} from '../../components/news-item/news-item.vue'
	export default {
		onLoad() {
			this.getNews()
		},
		components:{
			'news-item':newsItem
		},
		data() {
			return {
				news:[]
			}
		},
		methods: {
			getNews() {
				uni.request({
					url:'https://wanandroid.com/article/listproject/0/json',
					success: (res) => {
						this.news = res.data.data.datas
						console.log(this.news.length)
					}
				})
			},
			
		}
	}
</script>

<style lang="scss">
.news {
	
}
</style>
