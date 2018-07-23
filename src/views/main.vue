<template>
  <div id="main">
    <section>
        <router-view/>
    </section>
    <footer>
        <router-link to="/home" tag="span"><i class="iconfont icon-qita"></i>首页</router-link>
        <router-link to="/about" tag="span"><i class="iconfont icon-chongzhi"></i>找借款</router-link>
        <router-link to="/mine" tag="span"><i class="iconfont icon-wode"></i>个人中心</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style>
#main{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
section{
    flex: 1;
    overflow: auto;
    margin-bottom:64px;
}
header,footer{
    height: 44px;
    width: 100%;
    text-align: center;   
    font-size: 16px;
}
header{
    position: fixed;
    top: 0;
    line-height: 44px;
}
header div{
 width: 94%;
 margin:0 auto; 
}
footer{
    position: fixed;   
    background: #Fff;
    bottom:0;
    font-size: 14px;
    padding-top:10px;
}
footer span{
    float:left;
    width: 33.33%;
    color: #555d62;
}
footer span i{
    font-size:18px;
    display: block;
}
footer .router-link-active{
    color: #267aeb;
}
</style>
