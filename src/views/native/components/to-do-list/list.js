import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import ToDo from './to-do'

const List =  (
  props
) => {
  return <View>
    { props.toDoList.map((item, i) => { return <ToDo key={i} index={i} toDo={item} /> }) }
  </View>
}


const mapStateToProps = ({ toDoList }) => {
  return { toDoList }
}

export default connect(mapStateToProps)(List)
