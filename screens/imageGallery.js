import React from "react";
import { Pressable, Text, View } from 'react-native';
import styles from './style'

export default function Gallery({navigation}) {

    const naviHome = ()=>{
        navigation.navigate('Home')
    }

    const naviGallery = ()=>{
        navigation.navigate('images')
    }
    
    return(
        <View style={styles.container}>
        <Pressable style={styles.button} onPress={naviGallery}>
                <Text style={styles.text}>Galeria</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={naviHome}>
            <Text style={styles.text}>Powrót</Text>
        </Pressable>
        </View>
    )
}