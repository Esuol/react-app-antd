import * as actionTypes from './actionTypes'

export const {
  FETCH_LOGIN_BEGIN,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE } = actionTypes;

export const fetchLoginBegin = () => ({
  type: FETCH_LOGIN_BEGIN
});

export const fetchLoginSuccess = products => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: { products }
});

export const fetchLoginFailure = error => ({
  type: FETCH_LOGIN_FAILURE,
  payload: { error }
});

