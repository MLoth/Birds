import Vuex from 'vuex'
import Vue from 'vue';

Vue.use( Vuex )

export default new Vuex.Store({
	state: {
		page: 'home'
	},
	mutations: {
		updatePage(state, pageName) {
			state.page = pageName
		}
	}
})