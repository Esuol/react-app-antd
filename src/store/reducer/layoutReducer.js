/* eslint-disable consistent-return */
import { layoutAction } from '../actions'
import initalState from '../state'

export default function (state = initalState.layoutState, action) {
  switch(action.type) {
     case layoutAction.OPENSPIN:
      return Object.assign({}, state, {
        spinState: true
      })
      case layoutAction.CLOSESPIN:
        return Object.assign({}, state, {
          spinState: false
        })
      default:
        return state;
  }
}