import React from "react";
import {ImageBackground, Text, View, Pressable, ScrollView } from 'react-native';
import {useState, useEffect} from 'react';
import Data from "./Data"
import styles from './style'
import {urel} from '../App'

export default function List({navigation}) {
    const [data, setdata] = useState([])
    useEffect(() => {
        const getData = async ()=>{
          const dataFromServer = await fetchData()
          setdata(dataFromServer)
        }
      getData()
    }, [])
    //Fetch data
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
    const openRecipe = (id,name,desc,ingredients)=>{
      navigation.navigate('Recipe',{id: id, name: name, desc: desc, ingredients: ingredients})
    }

    return(
    <ScrollView>
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Lemons.png')} style={styles.bgimage}>
      <Pressable style={styles.button}  title='Dodaj Przepis' onPress={onPressNewRecipeHandler}>
        <Text style={styles.text}>Dodaj Przepis</Text>
      </Pressable>

      <Pressable style={styles.button}  title='Return' onPress={onPressHandler}>
        <Text style={styles.text}>Powrót</Text>
      </Pressable>

      <Data data={data} onToggle={openRecipe}></Data>

      
      </ImageBackground>
    </View>
    </ScrollView>
    )
}
