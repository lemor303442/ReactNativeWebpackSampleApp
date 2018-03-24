import React, { Component } from 'react'

import List from './list'
import Input from './input'

class ToDoList extends Component{
  constructor(props){
		super(props)
		this.state = { 
      toDoList: []
    }
  }
  render() {
    const { toDoList, text } = this.state
    return (
      <div>
        <Input />
        <List />
      </div>
    )
  }
}

export default ToDoList