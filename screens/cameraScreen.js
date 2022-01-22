import React from "react";
import { Pressable, Text, View } from 'react-native';
import styles from './style'

export default function Camera({navigation}) {

    const naviHome = ()=>{
        navigation.push('Home')
    }

    const naviGallery = ()=>{
        
    }

    return(
    <View style={styles.container}>
    <Text style={styles.text}>Home Screen</Text>
    <Pressable style={styles.button} title='Lista dań' onPress={naviGallery}>
        <Text style={styles.text}>Lista dań</Text>
    </Pressable>
    <Pressable style={styles.button} title='About' onPress={naviHome}>
        <Text style={styles.text}>About</Text>
    </Pressable>
    </View>
    )
}