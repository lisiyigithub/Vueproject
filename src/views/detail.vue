<template>
    <div id="detail">
        <header>
           <router-link to="/about" tag="span" style="text-align:left;margin-left:10px;"> <</router-link>
            <span style="color:#000;weight:900;">{{str.tit}}</span>
            <span class="iconfont icon-wujiaoxingkong" style="text-align:right;margin-right:10px;"></span>
        </header>
        <div class="title">
            <img src="static/tubiao3.jpg" alt="">
            <p>成功率：<span>{{str.num}}人已放款</span></p>
            <p>{{str.mes}}</p>
        </div>
        <div class="center">
            <div class="center-first">
                <div>
                    <span><b class="iconfont icon-chongzhi"></b>借款金额({{str.jine}})</span>
                    <p>{{str.shuju}}></p>
                </div>
                <div >
                    <span><b class="iconfont icon-tixian"></b>分期期限({{str.qixian}})</span>
                    <p>{{str.fenqi}}></p>
                </div>
            </div>
            <div class="center-second">
                <div><span><b>{{str.yuegong}}</b>每月还款</span></div>
                <i></i>
                <div><span><b>{{str.lv}}%</b>参考月利率</span></div>
                <i></i>
                <div><span><b>{{str.hour}}小时内</b>最快放款时间</span></div>
            </div>
        </div>
        <div class="bottom">
            <div>
                <h4><i></i>申请资格</h4>
                年龄要求：{{str.age}}
            </div>
        </div>
        <div class="footer">
            <router-link :to="'/jiekuan/'+str.id" tag="div">申请借款</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Detail',
    data(){
        return{
            str:''
        }
    },
    mounted(){
        var _this = this;
        axios('http://localhost:3000/detail',{
            method:'post',				
            headers:{
                'Content-type': 'application/x-www-form-urlencoded'
            },
            params:{
                id:_this.$route.params.id
            }
        }).then(function(data){
            
            _this.str = (data.data)[0];
            console.log(_this.str)
            // console.log(_this.str[0].xmm)
        })	
    }
}
</script>

<style scoped="">
#detail{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
header{
    height: 44px;
    background: #Fff;
    border-bottom: 1px solid #267aeb;
    position: fixed;
    top: 0;
    width:100%;
}
header span{
    float:left;
    width: 31%;
    text-align: center;
    line-height: 44px;
    color: #267aeb;
}
.title{
    padding: 10px 10px 20px;
    font-size: 12px;
    margin: 54px 10px 10px;
    height: 50px;
    background:#fff;
    border-radius: 4px;
}
.title img{
    float:left;
    width: 20%;
    height: 100%;
    margin-right:10px;
}
.title p{
    width:76%;
    float:left;
    line-height: 22px;
}
.title p span{
    float:right;
}
.center{
    background: #fff;
    border-radius: 4px;
    margin:0 8px;
}
.center-first{
    height:70px;
    padding:20px 8px 15px;
}
.center-first>div{
    width: 50%;
    float:left;
    font-size: 14px;
    text-align: center;
    line-height:30px;
}
.center-first>div b{
    font-size: 12px;
    color:#267aeb;
    margin-right:4px;
}
.center-first>div p{
    font-size: 22px;
    font-weight: 900;
}
.center-second{
    height: 70px;
    background: #666666;
    color:#fff;
    border-radius: 0 0 4px 4px;
    font-size: 14px;
    text-align: center;
}
.center-second>div{
    width: 33%;
    padding: 15px 0;
    float: left;
    line-height: 20px;
    font-size: 12px;
}
.center-second>div span b{
    display: block;
    font-weight: 100;
    font-size: 14px;
}
.center-second i{
    float:left;
    width: 1px;
    background: #fff;
    height: 28px;
    margin-top: 20px;
}
.bottom{
    background: #fff;
    margin-top: 10px;
    padding: 0 10px;
    font-size: 12px;  
    flex:1;
    margin-bottom:40px;
}
.bottom h4{
    line-height: 50px;
    font-size: 14px;
}
.bottom h4 i{
    float: left;
    width: 2px;
    height: 12px;
    background: #267aeb;
    border-radius: 1px;
    margin:19px 5px 0 0;
}
.footer{
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #267aeb;
    color:#fff;
    position: fixed;
    bottom:0;
    width:100%;
    font-size: 14px;
}
</style>


