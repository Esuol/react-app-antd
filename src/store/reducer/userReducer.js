/* eslint-disable consistent-return */
import { userAction } from '../actions'
import initalState from '../state'

export default function (state = initalState.userState, action) {
  switch(action.type) {
     case userAction.FETCH_LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };
      case userAction.FETCH_LOGIN_SUCCESS:
        return Object.assign({}, state, {
          loading: false,
          token: action.data.token,
          nickName: action.data.nickName
        })
      case userAction.FETCH_LOGIN_FAILURE:
        return {
          ...state,
          loading: false
        };
      default:
        return state;
  }
}