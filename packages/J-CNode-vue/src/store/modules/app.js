import axios from 'axios'
import CONFIG from '../config'
import tools from '../tools'

const state = {
  mark: "523e9d7e-cd92-4b8e-881e-946a958ecb97",
  accesstoken: "523e9d7e-cd92-4b8e-881e-946a958ecb97",
  avatar_url: "",
  loginname: "",
  id: "",
  messageNoRead: ""
}

const mutations = {
  validateAccessToken(state, {
    payload: data
  }) {
    state.avatar_url = data.avatar_url;
    state.loginname = data.loginname;
    state.id = data.id;
  },
  loginValidate(state, payload) {
    console.log(`validateState`);
  },
  cleanLogin(state, payload) {
    // state.accessToken = "";
    state.avatar_url = "";
    state.loginname = "";
    state.id = "";
    console.log(`cleanLogin`);
  },
  getMessageNoRead(state, payload) {
    console.log(payload);
    state.messageNoRead = payload;
  }
}

const actions = {
  validateAccessToken({
    commit,
    state
  }, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${CONFIG.BASE}accesstoken`, {
          accesstoken: state.accessToken
        })
        .then(function (response) {
          let data = response.data;
          commit({
            type: "validateAccessToken",
            payload: data
          })
          resolve({
            success: true,
            data
          })
        })
        .catch(function (err) {
          console.log(err);
        })
    })
  },
  loginValidate({
    commit,
    state
  }, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${CONFIG.BASE}accesstoken`, {
          accesstoken: state.accesstoken
        })
        // .then(function (response) {
        //   let
        // })
    })
  },
  cleanLogin({
    commit,
    state
  }, payload) {
    return new Promise((resolve, reject) => {
      commit({
        type: "cleanLogin"
      })
      resolve({
        success: true
      })
    })
  },
  getMessageNoRead({
    commit,
    state
  }, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`${CONFIG.BASE}message/count?accesstoken=${state.accessToken}`)
        .then(function (response) {
          let data = response.data.data;
          commit({
            type: "getMessageNoRead",
            payload: {
              data
            }
          })
        })
    })
  }
}
export default {
  state,
  mutations,
  actions
}
