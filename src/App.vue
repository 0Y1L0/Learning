<template>
  <div id="app">
    <headernav><span>{{headtitle}}</span></headernav>
      <keep-alive>
          <router-view/>
      </keep-alive>   
    <footernav></footernav>
    <pop :word='$store.state.publicWord' v-if="$store.state.popshow"></pop>
  </div>
</template>

<script>
import footernav from "@/components/footernav"
import pop from "@/components/pop"
import headernav from "@/components/headernav"
import Router from 'vue-router'

export default {
  name: 'App',
  data:function(){
      return {
      }
  },
  components:{
    footernav,
    pop,
    headernav
  },
  computed:{
    headtitle:function(){
      var _headtitle=this.$route.meta.headtitle;
      // _headtitle=$router.meta.headtitle
      return _headtitle;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 52px;
  font-size:100%;
  height: 100%; 
  /* overflow:scroll; */
}
</style>
