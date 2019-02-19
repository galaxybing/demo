import axios from 'axios'
import CONFIG from '../config'
import tools from '../tools'
import ajax from "../../services";

const {
  ajaxGet,
  ajaxPost
} = ajax;

function transData(data) {
  data.forEach(item => {
    // item.create_at = tools.transTime(item.create_at);
    item.tabText = tools.transType(item.tab);
    item.topText = tools.transTop(item.top);
    item.goodText = tools.transGood(item.good);
    item.visit_count = tools.limitCount(item.visit_count);
    item.reply_count = tools.limitCount(item.reply_count);
    item.last_reply = tools.timeToNow(item.last_reply_at);
  });
  return data;
}

const state = {
  name: "king",
  list: [],
  page: 1,
  typeArr: ["ask", "share", "job", "good", "dev"]
}

const mutations = {
  dataInit(state, {
    payload: {
      data
    }
  }) {
    state.page = 1;
    state.list = data;
  },
  loadMore(state, {
    payload: {
      data
    }
  }) {
    state.page += 1;
    state.list = state.list.concat(data);
  }
}

const actions = {
  dataInit({
    commit,
    state
  }, {
    tab
  }) {
    return new Promise((resolve, reject) => {
      ajaxGet({
        url: `topics?tab=${tab}&page=${state.page}&limit=${CONFIG.LIMIT}&mdrender=false`
      }).then((data) => {
        transData(data);
        commit({
          type: "dataInit",
          payload: {
            data
          }
        });
        resolve(data);
      })
    })
  },
  loadMore({
    commit,
    state
  }, {
    tab
  }) {
    console.log(`tab====>${tab}`);

    return new Promise((resolve, reject) => {
      axios.get(`${CONFIG.BASE}topics?tab=${tab}&page=${state.page}&limit=${CONFIG.LIMIT}&mdrender=false`)
        .then(function (response) {
          let data = response.data.data;
          data = transData(data);
          commit({
            type: "loadMore",
            payload: {
              data
            }
          })
          resolve(data)
        })
        .catch(function (err) {
          console.log(err);
        })
    })
  }
}
export default {
  state,
  mutations,
  actions
}
