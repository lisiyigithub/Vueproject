<template>
    <div id="huan">
        <div>
            <p>已借金额</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'Huan',
    data(){
        return{
            tit:'我要还款'
        }
    },
    mounted() {
        this.$emit("toparent", this.tit);
    }
}
</script>

<style scoped="">
#huan{
    margin-top:44px;
}
</style>

