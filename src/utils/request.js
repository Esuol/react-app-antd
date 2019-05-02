import axios from 'axios'
// import NProgress from 'nprogress'
import * as antd from 'antd'


const service = axios.create({
  baseURL: `http://antdReact.com/`,
  timeout: 1000 * 60,
  validateStatus (status) {
    return status >= 200
  }
})

service.interceptors.request.use(config => {
  // const token

  // if (token) {
  //   config.headers['X-Token'] = token
  // }

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