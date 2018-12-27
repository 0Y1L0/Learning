<template>
    <div>
        <headernav><span class="header-span">健身技巧</span></headernav>
        
    </div>
</template>
<script>
import headernav from '../components/headernav'
export default{
    name:'record',
    mounted:function(){
        var id=this.mytool.getCookie('id');
        var _this=this;
        
    },
    data:function(){
        return{
            msg:'Welcome to your Vue.js'
        }
    },
    components:{
        headernav,
    }
}
</script>