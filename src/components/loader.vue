<template>
    <div class="popwraper">
        <div class='popcontent'>
            加载中。。。
        </div>
    </div>
</template>
<script>
export default{
    name:'loader',
    data:function(){
        return{}
    },
    methods:{
        hideme:function(){
            this.$emit('hidden');
        }
    }
}
</script>
<style scoped>
.popwraper{
  position: fixed;
  top:0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 9999;
  background-color: rgba(0,0,0,0.6);
}
.popcontent{
  position: absolute;
  top:50%;
  right: 50%;
  width: 200px;
  height: 100px;
  background-color: white;
  margin-right: -100px;
  margin-top: -50px;
}
</style>
