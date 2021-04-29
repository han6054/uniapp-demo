import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		hasLogin: false,
		userInfo: {
			name: '张三',
		},
		count: [1]
	},
    mutations: {
		increment(state, payload) {
			console.log(payload, 'payload')
			state.count.push(payload);
		}
	},
    actions: {}
})
export default store