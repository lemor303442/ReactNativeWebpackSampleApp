import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { addToDo } from '../../actions'

class Input extends Component{
  constructor(props){
		super(props)
		this.state = { 
      text: ''
    }
  }
  handleOnInputChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleOnSubmit(e) {
    e.preventDefault()
    const { text } = this.state
    this.props.addToDo({
      isFinished: false,
      content: text
    })
    this.setState({
      text: ''
    })
  }
  render() {
    const { text } = this.state
    return (
      <form onSubmit={this.handleOnSubmit.bind(this)}>
        <input type="text" value={text} onChange={this.handleOnInputChange.bind(this)} />
        <input type="submit" value="ADD" />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addToDo},dispatch)
}

export default connect (null, { addToDo })(Input)