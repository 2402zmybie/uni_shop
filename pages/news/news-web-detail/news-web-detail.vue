<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="src"></web-view>
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			this.src = options.url
		},
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				},
				src:''
			}
		},
		methods: {

		}
	}
</script>

<style>

</style>
