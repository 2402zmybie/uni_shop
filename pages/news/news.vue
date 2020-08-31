<template>
	<view class="news">
		<news-item :list="news" @itemClick="goToNewsWeb"></news-item>
			<view class="over-bootom" v-if="flag">-----------我是有底线的-----------</view>
	</view>
</template>

<script>
	import {newsItem} from '../../components/news-item/news-item.vue'
	export default {
		onLoad() {
			this.getNews()
		},
		onPullDownRefresh() {
			this.page = 0
			this.news = []
			//解决闪烁方法: 下拉请求的时候参数回调函数
			this.getNews(() => {
				uni.stopPullDownRefresh()
			})
			//在这里结束下拉刷新 会有闪烁效果
			// uni.stopPullDownRefresh()
		},
		onReachBottom() {
			//判断是否没有下一页数据
			if(this.news.length < this.page * 20) return this.flag = true
			this.page++
			console.log(this.page)
			this.getNews()
		},
		components:{
			'news-item':newsItem
		},
		data() {
			return {
				page:0,
				flag:false,
				news:[]
			}
		},
		methods: {
			getNews(callback) {
				uni.request({
					url:'https://wanandroid.com/article/listproject/'+ this.page +'/json',
					success: (res) => {
						this.news = [...this.news, ...res.data.data.datas]
						console.log(this.news.length)
						callback && callback()
					}
				})
			},
			goToNewsWeb(item) {
				console.log('父组件接收到条目点击事件了')
				console.log(item)
				uni.navigateTo({
					url:'./news-web-detail/news-web-detail?url=' + item.link
				})
			}
			
		}
	}
</script>

<style lang="scss">
.news{
	width: 100%;
	height: 100%;
	.over-bootom {
		width: 100%;
		height: 50rpx;
		line-height: 50px;
		font-size: 28rpx;
	}
}	
</style>
