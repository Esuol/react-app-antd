import * as actionTypes from './actionTypes'

export const { INTERVIEWLOADING } = actionTypes

export const interviewLoading = (data) => ({ type: actionTypes.INTERVIEWLOADING, loading: data });

export function fetchLogin() {
  return async function action(dispatch) {
   setTimeout(() => {
    dispatch(interviewLoading(true))
   },2000)
  }
}
