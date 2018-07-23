<template>
    <div id="detail">
        <header>
            <span style="text-align:left;"><——</span>
            <span style="color:#000;weight:900;">恒易贷</span>
            <span class="iconfont icon-wujiaoxingkong" style="text-align:right;"></span>
        </header>
        <div class="title">
            <img src="" alt="">
            <p>成功率：<span>2502773人已放款</span></p>
            <p>超低利率，无抵押信用贷款，1分钟申请</p>
        </div>
        <div class="center">
            <div class="center-first">
                <div>
                    <span>借款金额（0.3-5...</span>
                    <b>3000></b>
                </div>
                <div >
                    <span>分期期限（1-36月）</span>
                    <b>1></b>
                </div>
            </div>
            <div class="center-second">
                <div><span><b>3021.90</b>每月还款</span></div>
                <div><span><b>0.73%</b>参考月利率</span></div>
                <div><span><b>24小时内</b>最快放款时间</span></div>
            </div>
        </div>
        <div class="bottom">
            <div>
                <h4>|申请资格</h4>
                年龄要求：
            </div>
            <div>
                <h4>|产品介绍</h4>
                借款用途：
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Detail'
}
</script>

<style scoped="">
header{
    padding: 0 10px;
    height: 44px;
    background: #Fff;
    border-bottom: 1px solid #267aeb;
}
header span{
    float:left;
    width: 33.3%;
    text-align: center;
    line-height: 44px;
    color: #267aeb;
}
.title{
    padding: 10px 15px 20px;
    font-size: 12px;
    height: 50px;
}
.title img{
    float:left;
    width: 20%;
    height: 100%;
}
.title p{
    width:80%;
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
    padding:20px 15px 15px;
}
.center-first>div{
    width: 50%;
    float:left;
    font-size: 14px;
    text-align: center;
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
    width: 33.33%;
    padding: 15px 0;
    float: left;
    line-height: 20px;
}
.center-second>div span b{
    display: block;
}
.bottom{
    background: #fff;
    margin-top: 10px;
}
</style>


