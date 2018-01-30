import { combineReducers } from 'redux'
import { ADD_MESSAGE, SET_NAME } from '../actions/types'

const messages = (state = [], action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      return state.concat([action.message])
    default:
      return state
  }
}

const name = (state = '', action) => {
  switch(action.type) {
    case SET_NAME:
      return action.name
    default:
      return state
  }
}

export default combineReducers({
  messages,
  name
})
