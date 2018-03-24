export const ADD_TO_DO = 'add_to_do'
export const DELETE_TO_DO = 'delete_to_do'
export const CHANGE_IS_FINISHED = 'change_is_finished'

export const addToDo = (toDo) => {
  return {
    type: ADD_TO_DO,
    payload: toDo
  }
}

export const deleteToDo = (index) => {
  return {
    type: DELETE_TO_DO,
    payload: index
  }
}

export const changeIsFinished = (index) => {
  return {
    type: CHANGE_IS_FINISHED,
    payload: index
  }
}