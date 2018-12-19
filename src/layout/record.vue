<template>
    <div>
        <headernav><span class="header-span">健身技巧</span></headernav>
        <h1>this is record page</h1>
    </div>
</template>
<script>
import headernav from '../components/headernav'
export default{
    name:'HelloWorld',
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