<template>
	<div id="jiekuan">
		<header><router-link to="/about" tag="span">X</router-link>我要借款</header>
		<div class="top">
			<h4>借款项目：{{str.tit}}</h4>
			<p>借款范围：{{str.money}}元</p>
			<p>还款期限：{{str.qixian}}月</p>
			<p>贷款利率：{{str.lv}}</p>			
			<input type="text" v-model='ipt1' placeholder="还款期限(月)"/>
			<input type="" v-model='ipt' placeholder="填入借款金额"/>
			<button @click="que()">确定</button>
		</div>
	</div>
</template>

<script>
import store from '../store/store'
import axios from 'axios'
export default{
	name:'Jiekuan',
	data(){
		return{
			ipt1:'',
			ipt:'',
			str:'',
			ipt2:'',
			arr:[],
			arr1:[],
			arr2:[]
		}
	},
	methods:{		
		que(){	
			this.arr = this.str.qixian.split('-')
//			console.log(this.arr)
			this.arr1 = this.str.money.split('-')
//			this.arr2 = this.str.lv.split('%')[0];
			
			console.log(Number(this.arr2))
//			console.log(this.arr1)
			if(Number(this.ipt)<Number(this.arr1[0])){
				alert('请参考最低贷款额度贷款')
			}else if(Number(this.ipt)>Number(this.arr1[1])){
				console.log(typeof Number(this.arr1[1]))
				alert('您已超过了最大贷款额度')
			}else if(Number(this.ipt1)<Number(this.arr[0])){
				alert('请选择合理还款期限')
			}else if(Number(this.ipt1)>Number(this.arr[1])){
//				console.log(this.arr[1])
				alert('不能超出借款期限')
			}else if(this.ipt2.length>14){
				alert('请输入规定的银行卡号')
			}else{
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
		                qixian:this.ipt1,
		                lv:this.str.lv,
		                user:_this.$store.state.user
		            }
				}).then(function(data){
					if(data.data==1){
						alert('此项目只限贷款一次')
						location.href="#/about"
					}else{
						alert('借款成功')
						location.href='#/about'
					}
				})				
			}
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
//          console.log(_this.str)
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