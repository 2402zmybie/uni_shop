<template>
	<view class="content">
		<web-view class="box3" :src="url"></web-view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		components: {uniGoodsNav},
		onLoad(options) {
			this.url = options.url
		},
		data() {
			return {
				url:'',
				options: [{
				            icon: 'headphones',
				            text: '客服'
				        }, {
				            icon: 'shop',
				            text: '店铺',
				            info: 2,
				            infoBackgroundColor:'#007aff',
				            infoColor:"red"
				        }, {
				            icon: 'cart',
				            text: '购物车',
				            info: 2
				        }],
				        buttonGroup: [{
				          text: '加入购物车',
				          backgroundColor: '#ff0000',
				          color: '#fff'
				        },
				        {
				          text: '立即购买',
				          backgroundColor: '#ffa200',
				          color: '#fff'
				        }
				]
			}
		},
		methods: {
			 onClick (e) {
			        uni.showToast({
			          title: `点击${e.content.text}`,
			          icon: 'none'
			        })
			      },
			      buttonClick (e) {
			        console.log(e)
			        this.options[2].info++
			      }
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: 100%;
		.box3 {
			position: absolute;
			width: 100%;
			bottom: 100rpx;
		}
		.goods_nav {
			position: absolute;
			height: 100rpx;
			bottom: 0;
			width: 100%;
		}
	}


</style>
