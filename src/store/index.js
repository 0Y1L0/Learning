import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{//要设置的全局访问的state对象
        allKcal:0,
        allTime:0,
        allFoodKcal:0,
        allFood:0,
        publicWord:'操作成功',
        popshow:false,
    },
    getter:{//承载变化的值，实时监听state值的变化

    },
    mutations:{//自定义改变state初始值的方法
        changeKcal:function(kcal){
            state.allKcall=kcal;
        }
    },
    action:{//自定义触发mutations里面的函数方法
        changeKcal:function(kcal){
            this.commit('changeKcal',kcal)
        }
    }
})