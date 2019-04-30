/* eslint-disable consistent-return */
import Actions from '../actions'
import initalState from '../state'

export default function (state = initalState, action) {
  switch(action.type) {
     case Actions.openspin:
      return {
        spinState: true
      };
      case Actions.closespin:
      return {
        spinState: false
      };
      default:
      return state;
  }
}