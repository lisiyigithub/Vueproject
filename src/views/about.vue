<template>
  <div id="about">
      <header>
        <span><b class="iconfont icon-chongzhi"></b>资金不限</span>
        <b>|</b>
        <span><b class="iconfont icon-sifour86"></b>类型不限</span>
      </header>
      <mt-navbar v-model="selected" style="border-bottom:1px solid #ddd;position:fixed;top:44px;width:100%;">
        <mt-tab-item id="1">综合排序</mt-tab-item>
        <mt-tab-item id="2" @click="tong()">通过率高</mt-tab-item>
        <mt-tab-item id="3">下款最快</mt-tab-item>
        <mt-tab-item id="4">利率最低</mt-tab-item>
      </mt-navbar> 
      <p style="line-height:30px;font-size:14px;">共{{arr.length}}个借款产品，已为你准备推荐{{arr.length}}个,所有产品都限贷一次 </p>         
          <!-- 综合排序 -->
      <mt-tab-container v-model="selected" style="position:static;">       
        <mt-tab-container-item id="1">        
          <div v-for="(item,i) in arr" class="wai">
            <router-link :to="'/detail/'+item.id" tag="div">
              <div class="inn-wap">  
                <img src="static/tubiao2.jpg"/>
              <div class="inn">     
                  <h4>{{item.tit}}<span style="color:#ababab;float:right;">{{item.num}}人已放款</span></h4> 
                  <p>可贷金额<span>{{item.money}}元</span></p>
                  <p>最快下款<span>{{item.hour}}小时</span>|　参考月利率<span>{{item.lv}}%</span></p>
                </div>  
              </div>
              <p>{{item.mes}}</p>  
            </router-link>         
          </div>         
        </mt-tab-container-item>
        <!-- 通过率高 -->    
        <mt-tab-container-item id="2">
          <div v-for="(item,i) in arr" class="wai">
            <router-link :to="/detail/+item.id" tag="div">
              <div class="inn-wap">  
                <img src="static/tubiao2.jpg"/>
              <div class="inn">     
                  <h4>{{item.tit}}<span style="color:#ababab;float:right;">{{item.num}}人已放款</span></h4> 
                  <p>可贷金额<span>{{item.money}}元</span></p>
                  <p>最快下款<span>{{item.hour}}小时</span>|　参考月利率<span>{{item.lv}}%</span></p>
                </div>  
              </div>
              <p>{{item.mes}}</p>  
            </router-link>         
          </div>         
        </mt-tab-container-item>
        <!-- 下款最快 -->      
        <mt-tab-container-item id="3">        
          <div v-for="(item,i) in arr" class="wai">
            <router-link :to="/detail/+item.id" tag="div">
              <div class="inn-wap">  
                <img src="static/tubiao2.jpg"/>
              <div class="inn">     
                  <h4>{{item.tit}}<span style="color:#ababab;float:right;">{{item.num}}人已放款</span></h4> 
                  <p>可贷金额<span>{{item.money}}元</span></p>
                  <p>最快下款<span>{{item.hour}}小时</span>|　参考月利率<span>{{item.lv}}%</span></p>
                </div>  
              </div>
              <p>{{item.mes}}</p>  
            </router-link>         
          </div>         
        </mt-tab-container-item>
        <!-- 利率最低 -->     
        <mt-tab-container-item id="4"> 
          <div v-for="(item,i) in arr" class="wai">
            <router-link :to="/detail/+item.id" tag="div">
              <div class="inn-wap">  
                <img src="static/tubiao2.jpg"/>
	              <div class="inn">     
                  <h4>{{item.tit}}<span style="color:#ababab;float:right;">{{item.num}}人已放款</span></h4> 
                  <p>可贷金额<span>{{item.money}}元</span></p>
                  <p>最快下款<span>{{item.hour}}小时</span>|　参考月利率<span>{{item.lv}}%</span></p>
	              </div>   
              </div>
              <p>{{item.mes}}</p>  
            </router-link>         
          </div>         
        </mt-tab-container-item>
      </mt-tab-container>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'About',
  data(){
    return{
      selected:'1',
      arr:[],
      str:[]
    }
  },
  mounted(){
     var _this = this;
    axios('http://localhost:3000/about',{
      method:'post',				
      headers:{
        'Content-type': 'application/x-www-form-urlencoded'
      },
      params:{
        
      }
    }).then(function(data){
      _this.arr = data.data;
    })	
  }
  // methods:{
  //   tong(){
  //     axios('http://localhost:3000/tong',{
  //     method:'post',				
  //     headers:{
  //       'Content-type': 'application/x-www-form-urlencoded'
  //     },
  //     params:{
        
  //     }
  //   }).then(function(data){
  //     this.str = data.data;
  //   })	
  //   }
  // }
}
</script>

<style scoped="">
#about{
  margin-top:91px;
}
header{
  background: #fff;
}
header span{
  float:left;
  width: 49%;
  text-align: center;
}
header>b{
  float:left;
  color: #ddd;
}
header span b{
  margin-right:5px;
  color:#267aeb;
}
.wai{
  background:#fff;
  margin-bottom:10px;
  text-indent: 15px;
  font-size: 12px;
  
}
.wai>div>p{
	padding: 10px 0;
}
.wai>div p{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.inn-wap{
  border-bottom:1px solid #ddd;
}
.inn-wap img{
  width:18%;
  height:60px;
  float:left; 
  margin: 10px 0 0 10px;
}
.inn{
  line-height: 20px;
   padding:10px 15px 0;
}
.inn h4{
  font-size: 14px;
}
.inn p{
  height: 28px;
  line-height: 22px;
  font-size: 12px;
}
.is-selected{
  border-bottom:none!important;
}
.inn span{
  color: #f02828;
  margin-left:5px;
  padding-right:5px;   
}
</style>
