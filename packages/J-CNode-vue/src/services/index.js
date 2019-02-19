import Vue from 'vue'
import axios from 'axios'
import CONFIG from './config'

export default ({
  ajaxGet({
    url
  }) {
    return new Promise((resolve, reject) => {
      const targetUrl = `${CONFIG.BASE}${url}`;
      axios.get(targetUrl)
        .then(function (response) {
          const {
            data,
            success
          } = response.data;
          if (success) {
            return resolve(data);
          } else {
            reject(new Error("fail"));
          }
        })
        .catch(function (err) {
          console.log(err);
        })
    })
  },
  ajaxPost() {

  }
})
