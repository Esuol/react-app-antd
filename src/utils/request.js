import axios from 'axios'
// import NProgress from 'nprogress'
import * as antd from 'antd'
// import store from '../store'
// import store from 'store'
import { getToken } from "./token"
import history from '../history'
import store from '../store/index'

process.nextTick(() => {
  console.log(store.getState())
},0)

console.log(history.location.pathname)

const service = axios.create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 1000 * 60,
  validateStatus (status) {
    return status >= 200
  }
})

service.interceptors.request.use(config => {
  const token = getToken('token')

  if (token) {
    config.headers['X-Token'] = token
  }

  return config
})

service.interceptors.response.use(
  response => {
    const {msg} = response.data

    if (msg === '未登陆/登陆失效，请重新登陆') {

      antd.message.error(msg)


    }

    if (response.data.code === 'ERROR') {

      antd.message.error(msg || '服务器在开小差')

      return Promise.reject(new Error(response.data.msg))
    }
    return response.data.data
  },
  error => {
    console.log('error', error)
    return Promise.reject(error)
  }
)

export default service