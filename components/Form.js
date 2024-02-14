import { View, Text , StyleSheet, TextInput, Button} from 'react-native'
import React from 'react'
import uuid from 'react-native-uuid'

export default function Form({addTodo}) {
    const [inputValue, setInputValue] = React.useState('')

     
  return (
    <View style={styles.form}>
      <TextInput
      placeholder='Add a Todo' 
      style={styles.textInput}
      onChangeText={ text => setInputValue(text)}
      value={inputValue}
      />

      <Button
      title='Add a goal' 
      disabled={!inputValue}
      onPress={()=>{
        addTodo({
            id: uuid.v4(),
            text: inputValue
        })
        setInputValue('')
        
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    textInput: {
        padding: 15,
        margin: 15, 
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width:1 , height: 1},
        shadowOpacity: .3, 
        shadowRadius: 3
    }, 
    
})