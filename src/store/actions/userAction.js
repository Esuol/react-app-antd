/* eslint-disable no-undef */
import { message} from 'antd';
import * as actionTypes from './actionTypes'
import api from '../../services/index'
import { setToken } from '../../utils/token'
// import history from '../../history'

export const {
  FETCH_LOGIN_BEGIN,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
  BEGIN_LOGINOUT,
  SUCCESS_LOGINOUT,
  FAILURE_LOGINOUT } = actionTypes;

export const fetchLoginBegin = () => ({
  type: FETCH_LOGIN_BEGIN
});

export const fetchLoginSuccess = (data) => ({
  type: FETCH_LOGIN_SUCCESS,
  data
});

export const fetchLoginFailure = () => ({
  type: FETCH_LOGIN_FAILURE
});

export const beginLogout = () => ({
  type: BEGIN_LOGINOUT
});

export const successLogout = () => ({
  type: SUCCESS_LOGINOUT
});

export const failureLogout = () => ({
  type: FAILURE_LOGINOUT
});


export function fetchLogin(data) {
  return async function action(dispatch) {
    dispatch(fetchLoginBegin())
    const request = await api.users.login(data)
    if(request.status === 'ok') {
      setToken(request.token)
      dispatch(fetchLoginSuccess(request))
      // history.push('/dashboard/monitor')
      message.success('登录成功')
      window.location.href="/myapp/dashboard/analyze"
    }
    else dispatch(fetchLoginFailure())
  }
}


