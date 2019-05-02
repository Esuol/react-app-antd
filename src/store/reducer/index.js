import { combineReducers } from 'redux'
import layoutReducer from './layoutReducer'
import userReducer from './userReducer'

export default combineReducers({
  layoutReducer,
  userReducer
})