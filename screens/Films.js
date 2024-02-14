import {FlatList, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import FilmItem from '../components/FilmItem'
import axios from 'axios';

export default function Films() {
  const [films, setFilms] = useState([])

  useEffect(()=>{
    const getFilms = async () =>{
      const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=674e2d4d95b18bc70f060f7b51c7ba0a&language=en-US&page=1' )
      setFilms(res.data.results)
    }
    getFilms()
  }, [])
  return (
    <View>
      <Header />
      <FlatList 
      columnWrapperStyle={{flex:1, justifyContent: 'space-around'}}
      numColumns={3}
      contentContainerStyle={{paddingBottom: 100}}
        data={films}
        keyExtractor={item => item.id}
        renderItem={({item}) =>(
          <FilmItem
             film={item} 
          />
        )} 
      />
    </View>
  )
}