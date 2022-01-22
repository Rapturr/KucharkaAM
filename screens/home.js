import React from "react";
import { Pressable, Text, View } from 'react-native';
import styles from './style'

export default function Home({navigation}) {

    const naviAbout = ()=>{
        navigation.push('About')
    }

    const naviLista = ()=>{
        navigation.push('List')
    }

    const naviGaleria = ()=>{
        navigation.push('imageGallery')
    }

    return(
    <View style={styles.container}>
    <Pressable style={styles.button} title='Lista dań' onPress={naviLista}>
        <Text style={styles.text}>Lista dań</Text>
    </Pressable>
    <Pressable style={styles.button} title='About' onPress={naviAbout}>
        <Text style={styles.text}>About</Text>
    </Pressable>
    <Pressable style={styles.button} title='About' onPress={naviGaleria}>
        <Text style={styles.text}>Galeria</Text>
    </Pressable>
    </View>
    )
}