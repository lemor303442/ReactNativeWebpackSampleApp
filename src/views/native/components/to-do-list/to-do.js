import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { 
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight
} from 'react-native'

import { deleteToDo, changeIsFinished } from '../../../../actions'


const ToDo =  (
  props
) => {
  return <View style={ styles.wrapper }>
    <TouchableHighlight
      style={ styles.checkBoxWrapper }
      onPress={ () => props.changeIsFinished(props.index) }>
      <Text style={ styles.checkBoxText }>{ props.toDo.isFinished ? '☑︎' : '◻︎' }</Text>
    </TouchableHighlight>

    <Text style={ styles.contentText }>{props.toDo.content}</Text>

    <TouchableHighlight
      style={ styles.deleteButtonWrapper }
      onPress={ () => props.deleteToDo(props.index) }>
      <Text style={ styles.deleteButtonText }>x</Text>
    </TouchableHighlight>
  </View>
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ deleteToDo, changeIsFinished }, dispatch)
}

export default connect(null, mapDispatchToProps)(ToDo)


const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    height: 20,
    margin: 5
  },
  checkBoxWrapper: {
    height: 20,
    marginRight: 10
  },
  checkBoxText: {
    fontSize: 22,
    marginTop: -5
  },
  contentText: {
    width: 200
  },
  deleteButtonWrapper: {
    height: 20,
    width: 20,
    backgroundColor: '#C57568'
  },
  deleteButtonText: {
    fontSize: 16,
    textAlign: 'center'
  }
})