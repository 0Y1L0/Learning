<template>
    <div class="calc-content">
        <headernav><span class="header-span">热量计算</span></headernav>
        <calcer :type='true' @fhandle="fatherhandle"></calcer>
        <calcer :type='false' @fhandle="fatherhandle"></calcer>
        <div>
            <p>总共消耗了：{{$store.state.allKcal}}</p>
            <p>总共增加了：{{$store.state.allFoodKcal}}</p>
            <p>总共脂肪{{$store.state.allKcal-$store.state.allFoodKcal>0?'消耗':'增加'}}：{{Math.abs($store.state.allKcal-$store.state.allFoodKcal)}}</p>
        </div>
    </div>
    
</template>
<script>
import headernav from "@/components/headernav"
import calcer from "@/components/calcer"
export default {
  name: 'App',
  data:function(){
      return {
          nowSportList:[{time:0,allhot:0,type:""}],
          alltime:0,
          allkcal:0,
          allfood:0,
          allfoodkcal:0,
      }
  },
  methods:{
      fatherhandle:function(time,kcal,type){
          if(type){
              this.alltime=time;
              this.allkcal=kcal;
          }else{
              this.allfood=time;
              this.allfoodkcal=kcal
          }
                console.log(time,kcal,type)

      }
  },
  computed:{
    
  },
  components:{
    headernav,
    calcer
  }
}
</script>
<style>

</style>
