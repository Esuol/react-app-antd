/* eslint-disable no-undef */
import * as actionTypes from './actionTypes'
import api from '../../services/index'

export const {
  FETCH_LOGIN_BEGIN,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE } = actionTypes;

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


export function fetchLogin() {
  return async function action(dispatch) {
    dispatch(fetchLoginBegin())

    const request = await api.users.login()

    if(request.status === 'ok') dispatch(fetchLoginSuccess(request))

    else dispatch(fetchLoginFailure())
  }
}

