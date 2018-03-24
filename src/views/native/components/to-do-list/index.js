import React, { Component } from 'react'
import { View, Text } from 'react-native'

import List from './list'
import Input from './input'

class ToDoList extends Component{
  constructor(props){
		super(props)
  }
  render() {
    return (
      <View>
        <Input />
        <List />
      </View>
    )
  }
}

export default ToDoList