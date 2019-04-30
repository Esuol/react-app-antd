import * as actionTypes from './actionTypes'

export const { OPENSPIN } = actionTypes
export const { CLOSESPIN } = actionTypes

export const openspin = () => ({ type: actionTypes.OPENSPIN });
export const closespin = () => ({ type: actionTypes.CLOSESPIN });
