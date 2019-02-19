import Vue from 'vue';
import Vuex from 'vuex';
import app from "./modules/app";
import home from "./modules/home";
import detail from "./modules/detail";
import profile from "./modules/profile";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    home,
    detail,
    profile
  }
})
