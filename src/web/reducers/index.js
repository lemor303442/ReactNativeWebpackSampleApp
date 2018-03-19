import { combineReducers } from 'redux'
import ToDoListReducer from './reducer_to_do_list'

const rootReducer = combineReducers({
  toDoList: ToDoListReducer
})

export default rootReducer