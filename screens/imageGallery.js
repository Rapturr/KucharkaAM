import React from "react";
import { Pressable, Text, View } from 'react-native';
import styles from './style'

export default function Gallery({navigation}) {

    const naviHome = ()=>{
        navigation.push('Home')
    }

    const naviGallery = ()=>{
        
    }

    return(
    <View style={styles.container}>
    <Text style={styles.text}>Galeria</Text>
    <Pressable style={styles.button} title='Lista dań' onPress={naviGallery}>
        <Text style={styles.text}>button</Text>
    </Pressable>
    <Pressable style={styles.button} title='About' onPress={naviHome}>
        <Text style={styles.text}>Return</Text>
    </Pressable>
    </View>
    )
}