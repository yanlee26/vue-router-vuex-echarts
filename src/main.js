import Vue from 'vue'
import Vuex from 'vuex'
import router from './js/Router'
import store from './js/Store'

import App from './App';

new Vue({
	store,
	router,
	component:{
		App
	},	
	render:h=>h(App)
}).$mount('#app')