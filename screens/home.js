import React from "react";
import { Pressable, Text, View } from 'react-native';
import styles from './style'

export default function Home({navigation}) {

    const navi = (zm)=>{
        navigation.push(zm)
    }


    return(
    <View style={styles.container}>
    <Pressable style={styles.button} onPress={()=>navi('List')}>
        <Text style={styles.text}>Lista dań</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={()=>navi('imageGallery')}>
        <Text style={styles.text}>Galeria</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={()=>navi('About')}>
        <Text style={styles.text}>About</Text>
    </Pressable>
    <Pressable style={styles.button} onPress={()=>navi('Help')}>
        <Text style={styles.text}>Help</Text>
    </Pressable>
    </View>
    )
}