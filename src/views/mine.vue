<template>
  <div id="mine">
      <div class="top">
        <i class="iconfont icon-xiaoxi"></i>
        <div class="first">
          <img src="static/login.jpg" alt="">
          <span @click="login()">{{name}}</span>
        </div>
        <div class="second">
          <div><span class="iconfont icon-shoucang"></span>收藏</div>
          <b>|</b>
          <div><span class="iconfont icon-glassesyanjing"></span>最近浏览</div>
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
          <li style="border-bottom:none;"><span class="iconfont icon-iconset0176"></span>设置<b>></b></li>
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
    }
  },
  methods:{
    login(){
      this.$router.push('/')
    }
  },
  computed:{
    name(){
      return store.state.name
    }
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
  float:left;
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
</style>
