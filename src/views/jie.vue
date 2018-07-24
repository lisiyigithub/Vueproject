<template>
    <div id="jie">
        <ul>
            <li v-for="item in str">
                <p>借款项目:{{item.tit}}</p>
                <p>借款金额:{{item.money}}</p>
                <p>还款期限:{{item.qixian}}个月</p>
            </li>
        </ul>
    </div>
</template>

<script>
	import axios from 'axios'
export default {
    name:'Jie',
    data(){
        return{
            tit:'借款记录',
            str:''
        }
    },
    mounted() {
        this.$emit("toparent", this.tit);
        var _this = this;
    	axios('http://localhost:3000/jilu',{
    		method:'post',	
    		headers:{
				'Content-type': 'application/x-www-form-urlencoded'
			},
			params:{
				id:_this.$route.params.id
			}
    	}).then(function(data){
    		_this.str = data.data;
    		console.log(_this.str)
    		
    	})
    }
}
</script>

<style scoped="">
#jie{
    margin-top:50px;
    font-size: 14px;
}
#jie ul li{
    background: #fff;
    margin-bottom:10px;
    min-height: 50px;
    line-height: 28px;
    padding: 0 15px;
    border-radius: 10px;
    margin: 10px 5px;
}

</style>

