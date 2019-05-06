import * as actionTypes from './actionTypes'

export const { OPENSPIN } = actionTypes
export const { CLOSESPIN } = actionTypes
export const { MODIFYIFAJAX } = actionTypes
export const { PREVPATH } = actionTypes
export const { NPROGRESSSTATE } = actionTypes

export const openspin = () => ({ type: actionTypes.OPENSPIN });
export const closespin = () => ({ type: actionTypes.CLOSESPIN });
export const modifyIfAjax = (data) => ({ type: actionTypes.MODIFYIFAJAX, data });
export const modifyPrevPath = (data) => ({ type: actionTypes.PREVPATH, data });
export const modifyNprogressState = (data) => ({ type: actionTypes.NPROGRESSSTATE, data });
