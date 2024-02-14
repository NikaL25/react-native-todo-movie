import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function TodoItem({item, deleteTodo}) {
  return (
    <TouchableOpacity 
        onLongPress={ () => deleteTodo(item.id)}
        onDoublePress={ () => deleteTodo(item.id)}
        style={styles.todo}>
      <Text style={styles.text}>
        { item.text }
      </Text>
      <TouchableOpacity
      onPress={ () => deleteTodo(item.id)}
        >
        <Text>
            &#128465;
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    todo:{
        display: 'flex',
        justifyContent: 'space-between', 
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 5
    }, 
    text: {
        fontSize: 18,
    }
})