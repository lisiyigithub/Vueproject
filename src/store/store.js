//登录名的存储

import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)


var store = new Vuex.Store({
	state:{
		name:''
	},
	mutations:{
		shuju(a,b){
			a.name = b;
			console.log(b)
		}
	}
})


export default store;