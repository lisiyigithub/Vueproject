<template>
    <div id="register">
        <router-link to="/login" tag="p"></router-link>
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
                <input type="text" v-model="sjyzm" placeholder="手机验证码" style="width:60%;">
                <i style="font-size:12px;font-style:normal;text-indent:10px;color:#666666;" @click="yzm()">获取验证码</i>
            </div>
             <div>
                <span class="iconfont icon-ai-eye"></span>
                <input type="text" v-model="pass" placeholder="登录密码为8-18位数字与字母组合">
            </div>
            <button @click='register()'>注册</button>
            <router-link to="/login" tag="p">已有账号直接登录</router-link>    
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Register',
    data(){
        return{
            user:'',
            sjyzm:'',
            pass:''
        }
    },
    methods:{
       register(){
            var res = /^[1]\d{10}$/;
            var rew = /^[a-zA-Z_]\w{5,13}$/;
            if(this.user == ""){
                alert('手机号不能为空')
//              Toast({
//                  message:'贷款王：手机号不能为空',
//                  position:'bottom',
//                  duration:3000
//              })
            }else if(this.sjyzm == ""){
                alert('验证码不能为空')
            	
//              Toast({
//                  message:'贷款王：验证码不能为空',
//                  position:'bottom',
//                  duration:3000
//              })
            }else if(this.pass == ""){
                alert('密码不能为空')
            	
               /* Toast({
                    message:'贷款王：密码不能为空',
                    position:'bottom',
                    duration:3000
                })*/
            }else if(res.test(this.user) == false){
                alert('请输入正确的手机号')
            	
                /*Toast({
                    message:'贷款王：请输入正确的手机号',
                    position:'bottom',
                    duration:3000
                })*/
            }else if(rew.test(this.pass) == false){
                alert('请按照格式填写密码')
            	
                /*Toast({
                    message:'贷款王：请按照格式填写密码',
                    position:'bottom',
                    duration:3000
                })*/
            }else{
                var _this = this;
                axios('http://localhost:3000/register',{
                    method:'post',
                    headers:{
                        'Content-type': 'application/x-www-form-urlencoded'
                    },
                    params:{
                        user:_this.user,
                        pass:_this.pass,
                        sjyzm:_this.sjyzm,
                        id:"2"
                    }
                }).then(function(response){
                    if(response.data == 1){
                        alert('注册成功')
                        location.href='#/login'
                    }else if(response.data == 2){
                        alert('用户名已存在')
                        location.href='#/login'
                    }else if(response.data == 3){
                        alert('手机验证码错误')
                        location.href='#/register'
                    }
                })
                .catch(function(error){
                    console.log(error)
                })
            }
        },
        yzm(){
            // console.log(this.user)
            var _this = this;
            axios('http://localhost:3000/register',{
                method:'post',
                headers:{
                        'Content-type': 'application/x-www-form-urlencoded'
                },
                params:{
                    user:_this.user,
                    pass:_this.pass,
                    id:"1"
                    
                }
            })
        }
    }
}
</script>

<style scoped="">
#register{
    width: 100%;
}
#register>p{
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
    color:#267aeb;
    margin-top: 5px;
}
.info button{
    display: block;
    width:100%;
    border:0;
    outline:none;
    background: #267aeb;
    color:#fff;
    height:34px;
    line-height: 34px;
    border-radius: 4px;
    text-align: center;
    margin-top:25px;
}
</style>
