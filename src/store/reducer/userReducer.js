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
        return {
          nickName: action.data.nickName,
          token: action.data.token,
          loading: false,
        };
      case userAction.FETCH_LOGIN_FAILURE:
        return {
          ...state,
          loading: false
        };
      default:
        return state;
  }
}