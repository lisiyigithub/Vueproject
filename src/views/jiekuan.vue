<template>
	<div id="jiekuan">
		<header><router-link to="/about" tag="span">X</router-link>我要借款</header>
		<div class="top">
			<h4>借款项目：{{str.tit}}</h4>
			<p>借款范围：{{str.money}}</p>
			<p>还款期限：{{str.qixian}}</p>
			<input type="text" v-model='ipt1' placeholder="还款期限(月)"/>
			<input type="" v-model='ipt' placeholder="填入借款金额"/>
			<button @click="que()">确定</button>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
export default{
	name:'Jiekuan',
	data(){
		return{
			ipt1:'',
			ipt:'',
			str:''
		}
	},
	methods:{
		que(){
			console.log(this.ipt)
			var _this = this;
			axios('http://localhost:3000/jiekuan',{
				method:'post',				
	            headers:{
	                'Content-type': 'application/x-www-form-urlencoded'
	            },
	            params:{
	                id:_this.$route.params.id,
	                tit:this.str.tit,
	                money:this.ipt,
	                qixian:this.ipt1
	            }
			})
			alert('借款成功')
			location.href='#/about'
			this.ipt=''
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
	header{
		height: 44px;
		line-height: 44px;
		background: #267aeb;
		color:#fff;
		text-align: center;
		position: fixed;
		top: 0;
		width:100%;
	}
	header span{
		position: absolute;
		font-size: 20px;
		left:10px;
	}
	.top{
		background: #fff;
		border-radius: 5px;
		margin:54px 15px;
		padding: 10px 10px;
		line-height: 50px;
	}
	.top input{
		width: 90%;
		height: 40px;
		margin: 0 5%;
		border-radius: 5px;
		outline: none;
	}
	.top button{
		width: 90%;
		height: 40px;
		margin:20px 5% 10px;
		border-radius: 5px;
		outline: none;
		background: #19B5FE;
		color: #fff;
	}
</style>