import axios from 'axios'
import CONFIG from '../config'
import tools from '../tools'
import { ajaxGet, ajaxPost } from "../../services";

const state = {
  detailData: ""
}

const mutations = {
  getDetail(state, {
    payload: data
  }) {
    state.detailData = data;
  }
}

const actions = {
  getDetail({
    commit,
    state
  }, {
    detailId
  }) {
    return new Promise((resolve, reject) => {
      axios.get(`${CONFIG.BASE}/topic/${detailId}`)
        .then(function (response) {
          let data = response.data.data;
          commit({
            type: "getDetail",
            payload: data
          })
          resolve(data)
        })
        .catch(function (err) {
          console.log(err);
        })
    })
  },
  demo() {
    console.log("success");

  }
}
export default {
  state,
  mutations,
  actions
}
