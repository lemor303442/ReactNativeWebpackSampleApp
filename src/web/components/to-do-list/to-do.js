import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { deleteToDo, changeIsFinished } from '../../actions'

const ToDo = (
  props
) => {
  const {
    toDo,
    index,
    changeIsFinished,
    deleteToDo
  } = props
  return <div>
    <input type="checkbox" checked={toDo.isFinished} onChange={() => changeIsFinished(index)} />
    <span>{toDo.content}</span>
    <button onClick={() => deleteToDo(index)}>x</button>
  </div>
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteToDo, changeIsFinished }, dispatch)
}

export default connect(null, mapDispatchToProps)(ToDo)