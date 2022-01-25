import React from "react";
import { ScrollView, Image, Pressable, Text, View } from 'react-native';
import styles from './style'
import { StatusBar } from 'expo-status-bar';

export default function Gallery({navigation}) {
    const image1 = "../assets/burger.jpg";
    const image2 = "../assets/paele.jpg";
    const image3 = "../assets/pierogi.jpg";
    const image4 = "../assets/pizza.jpg";

    const naviHome = () =>{
        navigation.pop()  
    }
    const naviCamera = ()=>{
        navigation.navigate('cameraScreen')
    }

    return(
        <ScrollView>
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={naviCamera}>
                <Text style={styles.text}>Zrób zdjęcie</Text>
            </Pressable>
            <Image style={styles.foodimages} source={require(image1)}/>
            <Image style={styles.foodimages} source={require(image2)}/>
            <Image style={styles.foodimages} source={require(image3)}/>
            <Image style={styles.foodimages} source={require(image4)}/>
            
            <Pressable style={styles.button} title='About' onPress={naviHome}>
                <Text style={styles.text}>Powrót</Text>
            </Pressable>
            
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
        </ScrollView>
    )
}