import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
      <Image
      style={styles.logo}
       />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 50, 
    display: 'flex',
    justifyContent: 'center',
    alighItem: 'center',
    padding: 15, 
    backgroundColor: 'white'
  },
  logo: {
    maxWidth: 250, 
    width: '100%',
    height: 40
  }
})