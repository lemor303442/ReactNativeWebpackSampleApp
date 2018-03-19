import React, { Component } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native'

export default class Input extends Component{
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
    console.log("handleOnSubmit")
    console.log(this.state.text)
    this.props.addToDo(this.state.text)
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
