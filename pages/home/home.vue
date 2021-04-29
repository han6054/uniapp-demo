<template>
	  <view>这是home页面 
	   <view v-for="(item,index) in count" :key="index">
		   <view>{{item}}</view>
	   </view>
	   <button class="button" type="default" @click="add">添加Count</button>
	  </view>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';
	export default {
		data() {
			return {
				number: 1
			}
		},
		computed:{
			...mapState(['count'])
		},
		onLoad() {
			console.log(this.count)
		},
		methods:{
			 ...mapMutations(['increment']),
			add() {
				this.increment(this.number++)
			}
		}
	}
</script>

<style>
	.button {
		 width: 200px;
		 height: 50px;;
	}
</style>
