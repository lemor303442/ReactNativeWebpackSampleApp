import React from 'react'
import { View, Text } from 'react-native'

const ToDo =  (
  props
) => {
  return <View>
    <Text>{props.toDo.content}</Text>
  </View>
}

export default ToDo;