<template>
  <div id="app">
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

export default {
  name: 'App',
  components:{
    footernav,
    pop
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
}
</style>
