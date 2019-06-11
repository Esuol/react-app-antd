import axios from 'axios'
// import NProgress from 'nprogress'
import * as antd from 'antd'
import NProgress from 'nprogress'
// import store from '../store'
// import store from 'store'
import { getToken } from "./token"
import history from '../history'
import store from '../store/index'
import { layoutAction, analyizeAction } from '../store/actions';

const currentPathname = history.location.pathname

function overNProgress () {
  NProgress.done()
  process.nextTick(() => {
    store.dispatch(layoutAction.modifyIfAjax(true))
  })
}

const service = axios.create({
  baseURL: process.env.REACT_APP_URL,
  timeout: 1000 * 60,
  validateStatus (status) {
    return status >= 200
  }
})

service.interceptors.request.use(config => {
  process.nextTick(() => {
    store.dispatch(layoutAction.modifyIfAjax(true))
    const prevPathname = store.getState().layoutReducer.prevPath
    if(currentPathname !== prevPathname) {
      store.dispatch(layoutAction.modifyNprogressState(0))
      store.dispatch(analyizeAction.modifyInterviewLoading(true))
    }
    store.dispatch(layoutAction.modifyPrevPath(currentPathname))
    store.dispatch(layoutAction.modifyNprogressState(1))
  })

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
      overNProgress()
      antd.message.error(msg)
    }

    if (response.data.code === 'ERROR') {
      antd.message.error(msg || '服务器在开小差')
      overNProgress()
      return Promise.reject(new Error(response.data.msg))
    }

    process.nextTick(() => {
      store.dispatch(layoutAction.modifyNprogressState(-1))
      if(store.getState().layoutReducer.nprogressstate === 0) overNProgress()
    })

    return response.data.data
  },
  error => {
    overNProgress()
    console.log('error', error)
    return Promise.reject(error)
  }
)

export default service