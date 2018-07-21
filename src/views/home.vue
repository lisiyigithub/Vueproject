<template>
  <div id="home">
    <header>
      <select v-model='opi'>
        <option v-for="(item,i) in arr">{{item}}</option>
      </select>
      <input type="text" placeholder="请选择借款金额" v-model="ipt">
      <span class="iconfont icon-qita"></span>
    </header>
    <mt-swipe :auto="2000" style="height:180px;">
      <mt-swipe-item style="background:red;">1</mt-swipe-item>
      <mt-swipe-item style="background:yellow;">2</mt-swipe-item>
      <mt-swipe-item style="background:pink;">3</mt-swipe-item>
    </mt-swipe>
    <div>
      <p>热门推荐</p>
      <ul>
      	<li>我爱你</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      opi:'郑州市',
      ipt:'',
      arr:['郑州市','北京市','上海市']
    }
  }
}
</script>

<style scoped="">
header{
  padding: 0 10px;
}
header select{
  color: #fff;
  background: none;
  border: none;
  outline: none;
  float: left;
  margin: 12px 0;
}
header select option{
  background: rgba(0,0,0,0.3);
  border: none;
}
header span{
  color: #fff;
  float: right;
}
header input{
  width:65%;
  height: 24px;
  line-height: 24px;
  outline: none;
  border: 0;
  border-radius: 4px;
  text-indent: 5px;
}
</style>
