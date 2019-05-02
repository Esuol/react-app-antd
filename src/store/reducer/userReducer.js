/* eslint-disable consistent-return */
import { userAction } from '../actions'
import initalState from '../state'

export default function (state = initalState.userState, action) {
  switch(action.type) {
     case userAction.FETCH_LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
      case userAction.FETCH_LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.products
        };
      case userAction.FETCH_LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
      default:
        return state;
  }
}