<template>
	<view>这是订单详情页面  页面参数 {{JSON.stringify(params)}}}</view>
</template>

<script>
	export default {
		data() {
			return {
				params: {}
			}
		},
		onLoad(options) {
			this.params = options
		}
	}
</script>

<style>
</style>
