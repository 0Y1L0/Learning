<template>
  <div id="app">
    <router-view/>
    <footernav></footernav>
  </div>
</template>

<script>
import footernav from "@/components/footernav"
export default {
  name: 'App',
  components:{
    footernav
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
}
</style>
