import React, { Component } from 'react'
import { View, Text } from 'react-native'

import List from './list'
import Input from './input'

class ToDoList extends Component{
  constructor(props){
		super(props)
		this.state = { 
      toDoList: [
        {isFinished: false, content: "yey"},
        {isFinished: false, content: "yeyyey"}
      ]
    }
  }
  addToDo(text) {
    console.log("addToDo")
    console.log(text)
    const { toDoList } = this.state
    const newToDo = {
      isFinished: false,
      content: text
    }
    this.setState({
      toDoList: [...toDoList, newToDo]
    })
  }
  removeToDo(index) {
    const { toDoList } = this.state
    let newToDoList = toDoList.slice()
    newToDoList.splice(index, 1)
    this.setState({
      toDoList: newToDoList
    })
  }
  render() {
    const { toDoList, text } = this.state
    return (
      <View>
        <Input addToDo={this.addToDo.bind(this)} />
        <List toDoList={toDoList}/>
      </View>
    )
  }
}

export default ToDoList