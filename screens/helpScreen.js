import React from "react";
import { Pressable, Text, View, Linking, ImageBackground } from 'react-native';
import styles from './style'
import { StatusBar } from 'expo-status-bar';

export default function helpScreen({navigation}) {

    const openPaige = (page)=>{
        Linking.openURL(page)
    }

    const naviHome = ()=>{
        navigation.pop()
    }

    return(
    <View style={styles.container}>
        <ImageBackground source={require('../assets/Lemons.png')} style={styles.bgimage}>
            <Pressable style={styles.button} onPress={()=>openPaige('https://reactnative.dev/')}>
                <Text style={styles.text}>Strona React Native</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={()=>openPaige('https://twitter.com/reactnative')}>
                <Text style={styles.text}>Twitter React Native</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={()=>openPaige('https://opensource.facebook.com/legal/privacy')}>
                <Text style={styles.text}>Polityka prywatności</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={()=>openPaige('https://opensource.facebook.com/legal/terms')}>
                <Text style={styles.text}>Warunki usługi</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={()=>openPaige('https://github.com/Rapturr/KucharkaAM')}>
                <Text style={styles.text}>Github Repozytorium</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={naviHome}>
                <Text style={styles.text}>Powrót</Text>
            </Pressable>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </ImageBackground>
    </View>
    )
}