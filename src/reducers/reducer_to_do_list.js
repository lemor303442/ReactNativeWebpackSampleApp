import { ADD_TO_DO, DELETE_TO_DO, CHANGE_IS_FINISHED } from '../actions'

export default (state = [], action) => {
  switch(action.type){
    case ADD_TO_DO:
      return [...state, action.payload]
    case DELETE_TO_DO:
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ]
    case CHANGE_IS_FINISHED:
      const index = action.payload
      return [
        ...state.slice(0, index),
        {
          isFinished: !state[index].isFinished,
          content: state[index].content
        },
        ...state.slice(index + 1)
      ]
  }
  return state
}