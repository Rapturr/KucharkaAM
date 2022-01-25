import React from "react";
import {ImageBackground, Pressable, Text, View } from 'react-native';
import styles from './style'
import { MaterialCommunityIcons, AntDesign, FontAwesome, Feather} from '@expo/vector-icons';

export default function Home({navigation}) {

    const navi = (zm)=>{
        navigation.push(zm)
    }


    return(
    <View style={styles.container}>
    <ImageBackground source={require('../assets/Lemons.png')} style={styles.bgimage}>
    <Text style={{marginTop: 10,
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white', marginBottom:80}}>KUCHARKA</Text>
    <Pressable style={styles.button} onPress={()=>navi('List')}>
        <MaterialCommunityIcons name="format-list-bulleted" size={24} color="black" />
    </Pressable>
    <Pressable style={styles.button} onPress={()=>navi('images')}>
        <FontAwesome name="picture-o" size={24} color="black" />
    </Pressable>
    <Pressable style={styles.button} onPress={()=>navi('About')}>
        <AntDesign name="infocirlceo" size={24} color="black" />
    </Pressable>
    <Pressable style={styles.button} onPress={()=>navi('Help')}>
        <Feather name="help-circle" size={24} color="black" />
    </Pressable>
    </ImageBackground>
    </View>
    )
}
