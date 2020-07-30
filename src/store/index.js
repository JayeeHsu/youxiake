import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//默认值北京
let defaultCity="北京";
//如果localStorage有city，则赋值给defaultCity
defaultCity=localStorage.city;


export default new Vuex.Store({
  state: {
    //defaultCity为cityName的默认值
    cityName:defaultCity
  },
  mutations: {
    changeCity(state,cityName){
      //传过来的cityName赋给state.cityName和localStorage.city
      state.cityName=cityName;
      localStorage.city=cityName;
    },
  },
  actions: {
  },
  modules: {
  }
})
