import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import querystring from 'querystring'

Vue.use(Vuex)
axios.defaults.baseURL = '/ys/gzrz/services/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 600000

let post = ({
  url,
  data = {},
  loading = true
}) => {
  return new Promise((resolve, reject) => {
    // if (loading) Vue.$vux.loading.show({})
    axios.post(url, querystring.stringify(data))
      .then(res => {
        // if (loading) Vue.$vux.loading.hide()
        if (res.data.code === 'SUCCESS') {
          resolve(res.data.body)
        } else {
          //if (parseInt(res.data.code) === 100000) {
          //  this.$router.go(0)
          //} else {
            // if (!tips) {
            //   Vue.$vux.toast.show({
            //     type: 'warn',
            //     text: '错误码:' + res.data.code + ', 错误信息: ' + res.data.msg
            //   })
            // }
          //}
          reject(res.data.code, res.data.msg)
        }
      })
      .catch(err => {
        // if (loading) Vue.$vux.loading.hide()
        // Vue.$vux.toast.show({
        //   type: 'warn',
        //   text: '请求超时'
        // })
        reject(err, '请求超时')
      })
  })
}

export default {
  post
}
