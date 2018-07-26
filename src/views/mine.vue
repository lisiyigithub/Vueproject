<template>
  <div id="mine">
      <div class="top">
        <i class="iconfont icon-xiaoxi"></i>
        <div class="first">
          <img src="static/login.jpg" alt="">
          <span v-if="this.$store.state.isLogin">{{this.$store.state.user}}</span>
          <span v-else @click="login()">立即登录</span>
        </div>
        <div class="second">
          <!--<div><span class="iconfont icon-shoucang"></span>收藏</div>
          <b>|</b>
          <div><span class="iconfont icon-glassesyanjing"></span>最近浏览</div>-->
          <div>账户余额:{{sum}}</div>
        </div>
      </div>
      <div class="conn">
        <ul>
          <li><span class="iconfont icon-shenghuoxinyongqiahuankuan"></span>我要还款
            <router-link to="/huan" tag="b">></router-link>
          </li>
          <li><span class="iconfont icon-touzi-"></span>我的借款
            <router-link to="/jie" tag="b">></router-link>
          </li>
          <li><span class="iconfont icon-zhong"></span>还款提醒<b>></b></li>
          <li style="margin-bottom:10px;border-bottom:none;"><span class="iconfont icon-jishiben"></span>个人资料<b>></b></li>
          <li><span class="iconfont icon-ren"></span>邀请好友<b>></b></li>
          <li><span class="iconfont icon-dianhua"></span>在线客服<b>></b></li>
          <li style="border-bottom:none;">
          	<span class="iconfont icon-iconset0176"></span>
          	<i v-if="this.$store.state.isLogin" @click="tui()">退出登录</i>
          	<i v-else @click="login()">{{str}}</i>
          	<b>></b>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import store from '../store/store'
import axios from 'axios'
export default {
  name: 'Mine',
  data(){
    return{
    	str:'请登录',
    	arr:[],
    	sum:'',
    	Sum:''
    }
  },
  methods:{
  	login(){
  		this.$router.push('/')
  	},
  	tui(){
		  localStorage.removeItem('user'); 
		  localStorage.removeItem('isLogin');
		  location.reload()
  	}
  },
  mounted(){
  	var _this = this;
  	axios('http://localhost:3000/yue',{
  		method:'post',
  		headers:{
	        'Content-type': 'application/x-www-form-urlencoded'
	    },
	    params:{
	    	user:_this.$store.state.user
	    }
  	}).then(function(data){
			_this.arr = data.data
			_this.sum = Number(_this.Sum)
    	for(let i in _this.arr){      		
    			_this.sum += Number(_this.arr[i].money)
    	}
  	})
  }
}
</script>

<style scoped="">
.top{
  height: 170px;
  background: #267aeb;
  padding: 0 15px;
   color: #fff;
}
.first img{
  float: left;
  width:80px;
  height: 80px;

}
.top i{
  position: absolute;
  right:10px;
  top:10px;
  font-size: 20px;
}
.first{
    padding-top:20px;
    height:80px;
}
.first span{
  float: left;
  height:80px;
  line-height: 80px;
  margin-left:15px;
}
.second{
  margin-top:10px;
  height:60px ;
  line-height: 60px;
  text-align: center;
  border-top: 1px solid #fff;
}
.second>div{
	height: 40px;
  float:left;
  font-size: 16px;
  width:49%;
}
.second b{
  float:left;
}
.second span{
  font-size: 20px;
  margin-right:5px;
}
.conn ul li{
  background: #fff;
  line-height: 40px;
  border-bottom:1px solid #ddd;
  padding:0 15px;
  font-size: 12px;
}
.conn span{
  margin-right:5px;
  color: #267aeb;
}
.conn b{
  float:right;
  font-size: 20px;
  color: #bdbdbd;
}
.conn i{
	font-style: normal;
}
</style>
