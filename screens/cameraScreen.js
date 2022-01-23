import React from "react";
import { Pressable, Text, View } from 'react-native';
import styles from './style'
import { cam } from './useCamera'

export default function Camera({navigation}) {

    const naviHome = ()=>{
        navigation.navigate('imageGallery');
    }

    const naviGallery = ()=>{
        
    }

    return(
        <View>
            <cam></cam>
        </View>
    )
}

/*
<View style={styles.container}>
            <Text style={styles.text}>Camera Screen</Text>
            <Pressable style={styles.button} title='Lista dań' onPress={naviGallery}>
                <Text style={styles.text}>Lista dań</Text>
            </Pressable>
            <Pressable style={styles.button} title='Galeria' onPress={naviHome}>
                <Text style={styles.text}>Galeria</Text>
            </Pressable>
        </View>
 */