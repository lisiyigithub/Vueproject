<template>
    <div id="huan">
        <div class="give">
            <h4>总借款额：{{sum}}元</h4>
            <p>借款产品：</p>
            <ul>
            	<li v-for="(item,i) in arr">
            		<p>{{item.tit}}:{{item.money}}元</p>
            		<p>利息：</p>
            		<button @click="huan(i)">一键还款</button>
            	</li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Huan',
    data(){
        return{
            tit:'我要还款',
            arr:[],
            arr1:[],
            Sum:'',
            sum:''
        }
    },
    methods:{
    	huan(i){
//  		console.log(this.arr[i].id)
			var _this = this;
    		axios('http://localhost:3000/cha',{
    			method:'post',
	        	headers:{
	                'Content-type': 'application/x-www-form-urlencoded'
	            },
	            params:{
	                id:_this.arr[i].id
	            }
    		}).then(function(data){
    			if(data.data == 1){
    				alert('还款成功')
    				location.reload()
    			}else{
    				alert('未找到数据')
    			}
    		})
    	}
    },
    mounted() {
        this.$emit("toparent", this.tit);
        var _this = this;
        axios('http://localhost:3000/huan',{
        	method:'post',
        	headers:{
                'Content-type': 'application/x-www-form-urlencoded'
            },
            params:{
                
            }
        }).then(function(data){
        	console.log(data.data)
        	_this.arr = eval(data.data);
        	_this.sum = Number(_this.Sum)
        	_this.lx = Number(_this.Lx)
        	for(let i in _this.arr){      		
        		_this.sum += Number(_this.arr[i].money)
        	}
        })
    }
}
</script>

<style scoped="">
#huan{
    margin-top:44px;
    background: #fff;
    display: flex;
    flex-direction: column;
	height: 100vh;
}
.give{
	min-height: 200px;
	background:rgba(240,200,255,0.5);
	margin: 15px 15px;
	padding: 10px 15px;
	line-height: 30px;
	border-radius: 10px;
}
.give ul li{
	list-style: none;
	border-bottom:1px solid #ddd;
	min-height: 100px;
	line-height: 50px;
}
.give ul li p{
	width:60%;
	float:left;
}
.give ul li button{
	float:right;
	border:none;
	background: #92B8B1;
	color: #fff;
	height: 30px;
	width:80px;
	border-radius: 5px;
}
</style>

