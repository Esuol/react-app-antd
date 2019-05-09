import { combineReducers } from 'redux'
import layoutReducer from './layoutReducer'
import userReducer from './userReducer'
import analyizeReducer from './analyizeReducer'

export default combineReducers({
  layoutReducer,
  userReducer,
  analyizeReducer
})