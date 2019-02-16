<template>
  <div class="foot-content">
    <div v-for="item in itemarr">
      <router-link :to=item.url>
        <div class="foot-item">
          <div><span :class="['iconfont',item.imgurl]"></span></div>
          <div>{{item.name}}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footernav',
  data () {
    return {
      itemarr:[
        {url:"/",name:"热力计算",imgurl:"icon-icon-test1"},
        {url:"/news",name:"健身技巧",imgurl:"icon-jianshen"},
        {url:"/record",name:"日常打卡",imgurl:"icon-icon-test"},
        {url:"/mine",name:"个人中心",imgurl:"icon-user"}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foot-content{
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #777;
}
.foot-item{
  float: left;
  width: 25%;
  color:white;
  text-align: center;
  padding: .2rem 0rem;
}
.foot-item div:nth-child(1){
    padding-bottom:10px;
}
.foot-content .iconfont{
    color:white;
    font-size:27px;
}
</style>
