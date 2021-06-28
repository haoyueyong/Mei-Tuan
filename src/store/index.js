import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgUrl1: require("../assets/image/logimg.png"),
    imgUrl2: require("../assets/image/logint.jpeg"),
    lo: "登录",
    zc: "注册",
    erd1: "登录",
    erd: window.localStorage.getItem("uname"),
    ab: true,
    zhuce2: "注册",
    tuichu: "退出",
    city: "北京"

  },
  mutations: {

  },
  actions: {

  },
  modules: {

  }
})
