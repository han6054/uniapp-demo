<template>
	<view class="content">
		<uni-collapse>
		    <uni-collapse-item title="标题文字">
		        <uni-list>
		            <uni-list-item title="标题文字" thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"></uni-list-item>
		            <uni-list-item title="标题文字" note="描述信息" thumb="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png"></uni-list-item>
		            <uni-list-item title="标题文字" note="描述信息" show-extra-icon="true" :extra-icon="{color: '#4cd964',size: '22',type: 'spinner'}"></uni-list-item>
		        </uni-list>
		    </uni-collapse-item>
		    <uni-collapse-item title="默认开启" open="true">
		        <view style="padding: 30rpx;"> 折叠内容主体，可自定义内容及样式 </view>
		    </uni-collapse-item>
		    <uni-collapse-item title="禁用状态" disabled="true">
		        <view style="padding: 30rpx;"> 禁用状态 </view>
		    </uni-collapse-item>
		</uni-collapse>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>

</style>
