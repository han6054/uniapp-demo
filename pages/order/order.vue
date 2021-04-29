<template>
	<view>
		<view>这是订单页面</view>	
		<view><button type="primary" @click="go">跳转到订单详情</button></view>
	</view>
</template>

<script>
	export default {
		methods:{
			go() {
				this.$util.jumpTo('navigateTo', '/pages/order/orderDetail?id=12')
			}
		}
	}
</script>

<style>
</style>
