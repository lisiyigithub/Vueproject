<template>
    <div id="jilu">
        <header>
            <router-link to="/mine" tag="span"><</router-link>
            {{tit}}
        </header>
        <section>
            <router-view @toparent="getdata"></router-view>
        </section>
    </div>
</template>

<script>
export default {
    name:'Jilu',
    data(){
        return{
            tit:''
        }
    },
    methods: {
        getdata(msg) {
            this.tit = msg;
        }
    }
}
</script>

<style scoped="">
header{
    background: blue;
    color:#fff;
    height: 44px;
    line-height: 44px;
    text-align: center;
    position: fixed;
    top:0;
    width:100%;
}
header span{
   position: absolute;
   left:10px;
}
</style>
