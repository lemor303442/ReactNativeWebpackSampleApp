import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'

import { addToDo } from '../../../../actions'

class Input extends Component{
  constructor(props){
		super(props)
		this.state = { 
      text: ''
    }
  }
  handleOnInputChange(text) {
    this.setState({ text })
  }
  handleOnSubmit() {
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
    return <View>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => this.handleOnInputChange(text)}
        value={text}
      />
      <TouchableHighlight
        onPress={this.handleOnSubmit.bind(this)}
        style={styles.button}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableHighlight>
    </View>
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addToDo},dispatch)
}

export default connect (null, { addToDo })(Input)

const styles = StyleSheet.create({
  textInput: {
    height: 30,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {
    width: 100,
    backgroundColor: '#999999'
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center'
  }
})
