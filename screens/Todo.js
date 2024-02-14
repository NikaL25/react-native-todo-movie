import { SafeAreaView, Text, ImageBackground ,FlatList,} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import TodoItem from '../components/TodoItem'
import { StyleSheet } from 'react-native'
import { useState } from 'react'
import Form from '../components/Form'

export default function Todo() {
  const [todoItems, setTodoItems] = useState([])


  const addTodo = (newItem) =>{
    setTodoItems([
      ...todoItems,
      {...newItem}
    ])
  }

  const deleteTodo = (id)=>{
    setTodoItems((newList)=>{
      return newList.filter( todoItems => id !== todoItems.id)
    })
  }

  return (
    <SafeAreaView style={styles.app}>
      <Header />    
      
    <ImageBackground
    
    style={styles.bg}
    >
      <Form addTodo={addTodo} />

      {
        todoItems.length
        ?<Text>All: [{todoItems.length}]</Text>
        : null
      }
      <FlatList
        data={todoItems}
        keyExtractor={ item => item.id }
        renderItem={ ({item}) =>(
          <TodoItem
            item={item}
            deleteTodo={deleteTodo}
           />
        )} 
      />

    </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bg:{
    flex: 1,
  },
  app:{
    flex: 1
  }
})