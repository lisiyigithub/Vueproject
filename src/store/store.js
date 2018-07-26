//登录名的存储

import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)


var store = new Vuex.Store({
	state:{
		user:Boolean(localStorage.getItem('isLogin'))?localStorage.getItem('user'):'',
		isLogin:Boolean(localStorage.getItem('isLogin'))?localStorage.getItem('isLogin'):false
//		isLogin:false
	},
	mutations:{
		shuju(a,b){
			a.user = b;
			localStorage.setItem('user',b)
		},
		isLogin(a,b){
			a.isLogin = b;
			localStorage.setItem('isLogin',b)
		}
	}
})


export default store;