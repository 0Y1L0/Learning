import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        allKcal:0,
        allTime:0,
        allFoodKcal:0,
        allFood:0,
        publicWord:'操作成功',
        popshow:false,
    },
    mutations:{
        changeKcal:function(kcal){
            state.allKcall=kcal;
        }
    },
    action:{
        changeKcal:function(kcal){
            this.commit('changeKcal',kcal)
        }
    }
})