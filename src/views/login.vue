<template>
    <div id="login">
        <router-link to="/home" tag="p"></router-link>
        <div class="two">
            <img src="static/register.jpg" alt="">
            <span>贷款王</span>
        </div>
        <div class="info">
            <div>
                <span class="iconfont icon-ren"></span>
                <input type="text" v-model="user" placeholder="请输入手机号">
            </div>   
            <div>
                <span class="iconfont icon-ai-eye"></span>
                <input type="text" v-model="pass" placeholder="请输入密码">
            </div>
            <button @click='login()'>登录</button> 
            <p>忘记密码？<router-link to="/register">点击注册</router-link></p>
                     
        </div>
    </div>
</template>

<script>
import store from '../store/store'
import axios from 'axios'
export default {
    name:'Login',
    data(){
        return{
            user:'',
            pass:'',
            str:''
        }
    },
    methods:{
        login(){       	
            if(this.user == ''){
            	alert('手机号不能为空')
                /*Toast({
                    message:'贷款王：手机号不能为空',
                    position:'bottom',
                    duration:3000
                })*/
            }else if(this.pass == ''){
            	alert('密码不能为空')
            	
                /*Toast({
                    message:'贷款王：密码不能为空',
                    position:'bottom',
                    duration:3000
                })*/
            }else{
                var _this = this;
                console.log(_this.user)
                axios('http://localhost:3000/login',{
                    method:'post',
                    headers:{
                        'Content-type': 'application/x-www-form-urlencoded'
                    },
                    params:{
                        user:_this.user,
                        pass:_this.pass,
                        id:'2'
                    }
                }).then(function(data){
                    console.log(data.data)
                    if(data.data == 2){
        				store.commit('shuju',_this.user)
        				store.commit('isLogin',_this.str=true)
        				
                        // alert('登录成功')
                        location.href='#/mine'
                    }else{
                        alert('用户名或密码错误')
                        location.href='#/login'
                    }
                })
            }
        }
    }
}
</script>

<style scoped="">
#login{
    width: 100%;
}
#login>p{
    width:15px;
    height: 15px; 
    margin:10px 0 0 10px;
    background: url(../../static/close.jpg) no-repeat center;
    background-size: cover;
}
.two{
    height: 220px;
    position: relative;
}
.two img{
    width: 60px;
    height: 60px;
    position: absolute;
    bottom:40px;
    left:0;
    right:0;
    margin:auto;
}
.two span{
    position: absolute;
    left:0;
    right:0;
    bottom:10px; 
    margin:auto;
    text-align: center;
    font-size: 14px;
}
.info{
    padding:0 40px;
}
.info>div{
    border-bottom:1px solid #ddd;
    height: 40px;
    line-height: 40px;
    margin-top:10px;
    font-size: 12px;
}
.info>div input{
    border: 0;
    outline:none;
    width:85%;
    margin-left:10px;
}
.info p{
    font-size: 12px;
    line-height: 28px;
    text-align: center;
}
.info button{
    display: block;
    width:100%;
    border:0;
    outline: none;
    background: #267aeb;
    color:#fff;
    height:34px;
    line-height: 34px;
    border-radius: 4px;
    text-align: center;
    margin-top:25px;
}
</style>
