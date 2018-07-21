<template>
  <div id="main">
    <section>
        <router-view/>
    </section>
    <footer>
        <router-link to="/home" tag="span">首页</router-link>
        <router-link to="/about" tag="span">找借款</router-link>
        <router-link to="/mine" tag="span">个人中心</router-link>
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
}
header,footer{
    height: 44px;
    line-height: 44px;
    text-align: center;
    background: blue;
    font-size: 16px;
}
footer span{
    float:left;
    width: 33.33%;
}
.router-link-active{
    color: #fff;
}
</style>
