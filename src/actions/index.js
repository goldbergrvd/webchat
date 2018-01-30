import { SET_NAME, ADD_MESSAGE } from './types'

export const setName = (name) => ({ type: SET_NAME, name })
export const addMessage = (message) => ({ type: ADD_MESSAGE, message})
