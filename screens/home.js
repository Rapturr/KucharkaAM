import React from "react";
import {ImageBackground, Pressable, Text, View, Image } from 'react-native';
import styles from './style'
import { MaterialCommunityIcons, AntDesign, FontAwesome, Feather} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function Home({navigation}) {

    const navi = (zm)=>{
        navigation.push(zm)
    }


    return(
    <View style={styles.container}>
    <ImageBackground source={require('../assets/Lemons.png')} style={styles.bgimage}>
    <Image style={{width: 150, height: 150}} source={require('../assets/kucharka.png')} />
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
    
    <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ImageBackground>
    </View>
    )
}
