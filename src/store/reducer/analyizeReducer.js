import initalState from '../state'
import { analyizeAction } from '../actions'

export default function (state = initalState.analyize, action) {
  switch(action.type) {
     case analyizeAction.INTERVIEWLOADING:
      return {
        interviewLoading: action.loading,
      }
      default:
        return state;
  }
}