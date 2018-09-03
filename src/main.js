import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import router from './router'
import store from '../store/index'

import './registerServiceWorker'

Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app')
