<!-- 父组件获取子组件的值
    1.在父组件定义一个带参数的方法  sonmsg1
    2.在子组件的dom中绑定父组件的方法  @sonmsg2="sonmsg1"
    3.在子组件中定义一个触发所绑定方法的方法，并传参  this.$emit('sonmsg2',this.son)
    4.事件触发，父组件便拿到子组件的方法 -->
<template>   
    <div class="calc-main">
        <div class=calc-main-item>
            <div class="calc-title">
                <!-- <span class="iconfont icon-paobu"></span> -->
                <span :class="[type?'icon-paobu':'icon-miantiao','iconfont']"></span>
                <h6>{{type?'运动量计算':'摄入量计算'}}</h6>
            </div>
            
            <div class="calc-item-data">
                <div class="calc-data-num">
                    <p>{{type?'运动总时长':'摄入量总量'}}</p>
                    <p>{{type?allTime+'分钟':allFood+'kCal'}}</p>
                </div>
                <div class="calc-data-num">
                    <p>{{type?'运动消耗热量':'摄入增加热量'}}</p>
                    <p>{{type?allKcal:allFoodKacl}}kCal</p>
                </div>
                <div class="calc-data-num">
                    <p>{{type?'整体消耗热量':'整体摄入热量'}}</p>
                    <p>{{type?allKcal:allFoodKacl}}kCal</p>
                </div>
            </div>
            <div class="calc-input-content" v-for="(itemf,index) in $store.state.nowAdd" v-if='type'>
                <div class="select-content">
                    <select v-model='itemf.type'>
                    <option v-for='item in sportList' :value="item.type">{{item.type}}</option>
                    </select>
                    <input class="my-selected" v-model='itemf.time' placeholder="0" @input="calcKcal(itemf)"/>
                    <button class="choose-delete" @click='deletesport(index)'>删除</button>
                </div>
                <p class="fire-content"><span class="fire iconfont icon-huoyanjiare"></span>  &nbsp{{oneAction}}kCal</p>
            </div>
            <div class="calc-input-content" v-for="(itemf,index) in $store.state.nowfood" v-if='!type'>
                <div class="select-content">
                    <select v-model='itemf.type'>
                    <option v-for='item in foodList' :value="item.type">{{item.type}}</option>
                    </select>
                    <input class="my-selected" type="" name="" v-model='itemf.time' placeholder="0" @input="calcKcal(itemf)"/>
                    <button class="choose-delete" @click='deletesport(index)'>删除</button>
                </div>
                <p class="fire-content"><span class="fire iconfont icon-huoyanjiare"></span>  &nbsp{{oneAction}}kCal</p>
            </div>
            <div class="calc-input-adder" @click='addsport'>添加运动项目</div>
        </div>
        <!-- <button @click='handle'>计算</button> -->
    </div>
</template>
<script>
import headernav from '../components/headernav'
export default{
    name:'calcer',
    props:['type'],
    data:function(){
        return {
            sportList:[
                {type:"慢跑",kcal:10.9},
                {type:"快跑",kcal:12},
                {type:"跳绳",kcal:7.4},
                {type:"有氧操",kcal:10.1},
                {type:"游泳",kcal:9},
                {type:"跳舞(快)",kcal:6.4},
                {type:"跳舞(慢)",kcal:4.8},
                {type:"散步",kcal:3.8},
                {type:"无氧训练",kcal:7.2}
            ],
            foodList:[
                {type:"鸡胸肉沙拉",kcal:1296},      
                {type:"果蔬沙拉",kcal:765.5}, 
                {type:"龙利鱼沙拉",kcal:1194.4},
                {type:"水果酸奶沙拉",kcal:824.2},
                {type:"健身小盒",kcal:1924.6},
                {type:"减脂小盒",kcal:1230.4},       
                {type:"玉米紫薯",kcal:236},
                {type:"粗粮抓饭",kcal:210},
                {type:"香辣烤鸡胸",kcal:628},
                {type:"烤龙利鱼",kcal:523},
                {type:"麻辣鸡丝",kcal:729},
            ],         
            oneAction:0
        }
    },
    watch:{},
    computed:{
        allKcal:function(){//运动减少的kcl
            var _allKcal=0;
            for(var i=0;i<this.$store.state.nowAdd.length;i++){
                _allKcal+=this.calcKcal(this.$store.state.nowAdd[i]);
            }
            _allKcal=_allKcal.toFixed(1)
            this.$store.state.allKcal=_allKcal;
            return _allKcal;
        },
        allTime:function(){//运动总时长
            var _alltime=0;
            for(var i=0;i<this.$store.state.nowAdd.length;i++){
                _alltime+=this.$store.state.nowAdd[i].time-0;
            }
            this.$store.state.allTime=_alltime;
            return _alltime;
        },
        allFoodKacl:function(){//摄入食物增加的kcl
            var _allFoodKacl=0;
            for(var i=0;i<this.$store.state.nowfood.length;i++){
                _allFoodKacl+=this.calcKcal(this.$store.state.nowfood[i]);
            }
            _allFoodKacl=_allFoodKacl.toFixed(1)
            this.$store.state.allFoodKcal=_allFoodKacl;
            return _allFoodKacl;
        },
        allFood:function(){//摄入食物分量
            var _allfood=0;
            for(var i=0;i<this.$store.state.nowfood.length;i++){
                _allfood+=this.$store.state.nowfood[i].time-0;
            }
            this.$store.state.allFood=_allfood;

            return _allfood;
        }
    },
    methods:{
        // handle:function(){//将总消耗和总输出传递给父组件
        //     if(this.type){
        //         this.$emit('fhandle',this.allTime,this.allKcal,this.type)
        //     }else{
        //         this.$emit('fhandle',this.allFood,this.allFoodKacl,this.type)
        //     }
        //},  
        deletesport:function(index){
            if(this.type){
                this.$store.state.nowAdd.splice(index,1)
            }else{
                this.$store.state.nowfood.splice(index,1)
            }
        },
        addsport:function(){
            if(this.type){
                this.$store.state.nowAdd.push({type:'慢跑',time:""});
            }else{
                this.$store.state.nowfood.push({type:'鸡胸肉沙拉',time:""});
            }
            
        },
        calcKcal:function(itemf){//计算单项运动/食物的卡路里
            var nowhot=0;
            var _arr=[];
            if(this.type){
                _arr=this.sportList;
            }else{
                _arr=this.foodList
            }
            for(var i=0;i<_arr.length;i++){
                if(itemf.type==_arr[i].type){
                    nowhot=_arr[i].kcal;
                }
            }
            // return (itemf.time*nowhot).toFixed(1);//保留两位小数
            var _calcKcal=itemf.time*nowhot;
            this.oneAction=_calcKcal.toFixed(1)
            return _calcKcal;
        }
    }
}
</script>
<style>
.fire-content{
    margin:10px 0;
}
.calc-input-adder{
   width:40%;
   background-color:#777;
   border-radius:15px;
   color:#fff;
   line-height: 24px;
   transform:translateX(80%);
   font-size:15px;
}
.calc-title{
    display:flex;
}
.calc-title .icon-paobu{
    font-size:50px;
    text-align: center;
    color:#ccc
}
.calc-title .icon-miantiao{
    box-sizing: border-box;
    font-size:30px;
    text-align: center;
    color:#ccc;
    display:block;
    padding-top:5px;
    height:50px;
    width:50px;
}
.fire.iconfont{
    color:red;
}
.calc-main-item h6{
    font-size:22px;
    text-align:left;
    padding:15px;
    margin-left:-15px;
    font-weight: normal;
}
.calc-item-data{
    overflow: hidden;
    background-image:linear-gradient(120deg,#fda885 0%,#f6d365 100%);
    color:white;
    padding:15px 0px;
}
.calc-data-num{
    width:33%;
    float:left;
}
.calc-data-num p:nth-child(1){
    padding-bottom: 5px;
}
.calc-input-content{
    margin-top:10px;
}
.select-content{
    height: 28px;
    display:flex;
    justify-content:space-around
}
select{
    border:1px solid #ccc;
    height:25px;
    width:40%;
}
.my-selected{
    width:30%;
    height:23px;
    padding:0;
    border:1px solid #ccc;
    border-radius:5px;
}
.choose-delete{
    width:20%;
    background-color:#777;
    border-radius: 5px;
    color:#fff;
}
</style>

