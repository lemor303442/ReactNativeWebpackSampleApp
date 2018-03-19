import React from 'react'
import { View } from 'react-native'

import ToDo from './to-do'

const List =  (
  props
) => {
  return <View>
    { props.toDoList.map((item, i) => { return <ToDo key={i} toDo={item} /> }) }
  </View>
}

export default List