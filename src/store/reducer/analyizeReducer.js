import initalState from '../state'
import { analyizeAction } from '../actions'

console.log(initalState)

export default function (state = initalState.analyize, action) {
  switch(action.type) {
     case analyizeAction.INTERVIEWLOADING:
     console.log(action)
      return {
        interviewLoading: action.loading,
      }
      default:
        return state;
  }
}