<template>
	<view>
		<!-- list -->
		<view class="goods_list">
			<view class="goods_item" v-for="(item,index) in goods" :key="item.id" @click="navigator(item)">
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
</template>

<script>
	export default {
		//接受父组件给子组件传递数据
		props:['goods'],
		methods:{
			navigator(item) {
				this.$emit('goodsItemClick',item)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		//条目, 给盒子设置padding之后盒子会被撑大,要想不被撑大,则设置box-sizing: border-box;
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

			.price {
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
</style>
