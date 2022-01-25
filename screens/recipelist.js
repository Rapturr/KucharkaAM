import React from "react";
import {ImageBackground, Text, View, Pressable, ScrollView } from 'react-native';
import {useState, useEffect} from 'react';
import Data from "./Data"
import styles from './style'
import {urel} from '../App'
import { Searchbar } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

export default function List({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [list, setList] = useState([]);
  const [data, setdata] = useState([])

  const onChangeSearch = query => setSearchQuery(query);

  const clearString = (value) => {
    return value.replace(/\s/g, '').toLowerCase();
  }
  const checkData = (value) => {
    return clearString(value.name).indexOf(clearString(searchQuery)) >= 0
  }
  const getData = () => {

  return [...new Set(list.searchQuery(checkData))];
}

    useEffect(() => {
        const getData = async ()=>{
          const dataFromServer = await fetchData()
          setdata(dataFromServer)
        }
      getData()
    }, [])
    
    const fetchData = async() =>{

      const res = await fetch(urel+'/data')
      const data = await res.json()
      return data
    }

    const onPressHandler = ()=>{
        navigation.navigate('Home');
    }
    const onPressNewRecipeHandler = ()=>{
      navigation.navigate('NewRecipe')
    }
    const openRecipe = (id,name,desc,ingredients,counter)=>{
        var zm = parseInt(id)
        const res = fetch(urel+'/data/'+zm,{
            method: 'PUT',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({id: id, name:name, ingredients:ingredients, description: desc, counter:counter+1}),
          })
      
      navigation.navigate('Recipe',{id: id, name: name, desc: desc, ingredients: ingredients, counter: counter})
    }

    return(
      <ImageBackground source={require('../assets/Lemons.png')} style={styles.bgimage}>
      <ScrollView>
    <View style={styles.container}>
      <Pressable style={styles.button_1}  title='Dodaj Przepis' onPress={onPressNewRecipeHandler}>
        <Text style={styles.text}>Dodaj Przepis</Text>
      </Pressable>

      <Searchbar style={{width: 300}}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      
      <Data data={data} onToggle={openRecipe} search = {searchQuery}></Data>

      <Pressable style={styles.button}  title='Return' onPress={onPressHandler}>
        <Text style={styles.text}>Powrót</Text>
      </Pressable>
      
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
    </ScrollView>
      </ImageBackground>
    )
}
