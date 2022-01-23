import React from "react";
import { View } from 'react-native';
import {useState, useEffect} from 'react';
import AddRec from './addRecipe'
import styles from './style'

export default function AddRecipeScreen({ navigation, route, newData}){
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

    const addRecipe = async (data) => {
      console.log(data)
      const res = await fetch('http://localhost:5000/data',{
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        navigation.pop()
    }

    return(
        <View style={styles.container}>
            <AddRec onAdd = {addRecipe}/>
        </View>
    )
}