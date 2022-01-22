import React from "react";
import { Text, View, Pressable } from 'react-native';
import {useState, useEffect} from 'react';
import Data from "./Data"
import styles from './style'


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
      const res = await fetch('http://localhost:5000/data')
      const data = await res.json()
      return data
    }

    const fetchDataInstance = async(id) =>{
      console.log("fetching id ",id);
        const res = await fetch("http://localhost:5000/data/{id}")
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
    <View style={styles.container}>
      
      <Data data={data} onToggle={openRecipe}></Data>

    <Pressable style={styles.button}  title='Dodaj Przepis' onPress={onPressNewRecipeHandler}>
      <Text style={styles.text}>Dodaj Przepis</Text>
    </Pressable>

    <Pressable style={styles.button}  title='Return' onPress={onPressHandler}>
      <Text style={styles.text}>Return</Text>
    </Pressable>

    </View>
    )
}
