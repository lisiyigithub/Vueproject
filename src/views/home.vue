<template>
  <div id="home">
    <header>
      <div>
        <select v-model='opi'>
          <option v-for="(item,i) in arr">{{item}}</option>
        </select>
        <input type="text" placeholder="请选择借款金额" v-model="ipt">
        <span class="iconfont icon-qita"></span>
      </div>
    </header>
    <div>
      <mt-swipe :auto="2000" style="height:180px;">
         <mt-swipe-item><img style="width:100%;height:100%;" src="//static.rong360.com/upload/jpg/a9/09/a9094c4572195e8eefc8dae928630ef7.jpg"/></mt-swipe-item>
        <mt-swipe-item><img style="width:100%;height:100%;" src="https://static.rong360.com/upload/jpg/39/88/3988297254eed99ae695653e40e449bd.jpg"/></mt-swipe-item>
        <mt-swipe-item><img style="width:100%;height:100%;" src="https:////static.rong360.com/upload/jpg/83/e6/83e6bfdf4fdd3c6a54fa44c8654a4014.jpg"/></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="wrap">
      <div class="hot">
        <p>热门推荐</p>
        <div style="border:1px solid #d93509"><router-link to="/about" tag="span">2000以下</router-link></div>       
        <div style="border:1px solid #f06e06"><router-link to="/about" tag="span">2000-5000</router-link></div>
        <div style="border:1px solid #70a9f5"><router-link to="/about" tag="span">5000-10000</router-link></div>
        <div style="border:1px solid #4cda8f"><router-link to="/about" tag="span">10000以上</router-link></div>
      </div>
    </div>
    <div class="jiekuan">
      <p>热门借款</p>      
      <dl v-for="(item,i) in tui">
        <router-link :to="'/detail/'+item.id" tag="div">
        <dt><img src="static/tubiao1.jpg" alt=""></dt>
        <dd>
          <h4>{{item.tit}}<span>{{item.num}}人已放贷</span></h4>         
          <p>{{item.mes}}</p>
        </dd>
        </router-link>
      </dl>    
    </div>
    <div class="last">
      <button @click="mess()">查看更多借款信息</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'

export default {
  name: 'Home',
  data(){
    return{
      opi:'郑州市',
      ipt:'',
      arr:['郑州市','北京市','上海市'],
      tui:''
    }
  },
  methods:{
  	mess(){
  		this.$router.push('/about')
  	}
  },
  mounted(){
    var _this = this;
    axios('http://localhost:3000/home',{
      method:'post',				
      headers:{
        'Content-type': 'application/x-www-form-urlencoded'
      },
      params:{
        
      }
    }).then(function(data){
      _this.tui = data.data;
    })	
  }
}
</script>

<style scoped="">
 #home{
  margin-top: 44px;
} 
header{
  background:#267aeb;
  z-index:999; 
}
header select{
  color: #fff;
  background:none;
  border: none;
  outline: none;
  float: left;
  margin: 12px 0;
}
header select option{
  background: rgba(0,0,0,0.3);
  border: none;
}
header span{
  color: #fff;
  float: right;
}
header input{
  width:65%;
  height: 24px;
  line-height: 24px;
  outline: none;
  border: 0;
  border-radius: 4px;
  text-indent: 5px;
}
.wrap{
  background: #fff;
}
.hot{
  margin-top: 15px; 
  padding: 10px 15px;
}
.hot>p{
  padding-bottom:20px;
}
.hot div{
  display: inline-block;
  width: 23%;
  border: 1px solid #000;
  text-align: center;
  border-radius: 2px;
}
.hot div span{
  display: block;
  width: 60%;
  margin: 0 auto;
  line-height: 24px;
  color: #000;
}
.jiekuan>p{
  background:#fff;
  padding: 10px 15px;
}
.jiekuan dl{
  height: 50px;
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;
}
 dl dt{
  float:left;
  width: 20%;
  height: 100%;
}
dl dt img{
  width:90%;
  height: 100%;
}
dl dd{
  width: 75%;
  height: 100%;
  overflow:hidden;
}
dd h4{
  font-size: 14px;
}
dd h4 span{
  font-size: 12px;
  float:right;
}
dd p{
  line-height: 24px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  color: #666666;
  font-size: 12px;
} 
.last{
  padding: 0 20px;
}
.last button{
  border:none;
  background: #267aeb;
  color:#fff;
  text-align: center;
  line-height: 44px;
  border-radius: 5px;
  width:100%;
  margin: 5px 0 28px;
}

</style>
