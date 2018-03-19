import React from 'react'
import { connect } from 'react-redux'

import ToDo from './toDo'

const List =  (
  props
) => {
  return(
    <div>
      {props.toDoList.map((item, i) => (
        <ToDo
          key={i}
          index={i}
          toDo={item} />
      ))}
    </div>
  )
}

const mapStateToProps = ({ toDoList }) => {
  return { toDoList }
}

export default connect(mapStateToProps)(List)