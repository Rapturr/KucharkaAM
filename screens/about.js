import { StatusBar } from 'expo-status-bar';
import { Pressable, Platform, View, Text } from 'react-native';
import styles from './style'

export default function AboutScreen({navigation}) {
    const onPressHandler = ()=>{
    navigation.navigate('Home');
    }
    return (
    <View style={styles.container}>
        <View style={styles.container}>
        <Text style={styles.title}>Książka kucharska</Text>
        </View>
        <View style={styles.container}>
        <Text style={styles.authors}>Authors:</Text>
        <Text style={styles.authors}>Katarzyna Skrobisz</Text>
        <Text style={styles.authors}>Jakub Pawlik</Text>
        <Text style={styles.authors}>Daniel Stokowiec</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <Pressable style={styles.button} title='Lista dań' onPress={onPressHandler}>
            <Text style={styles.text}>Powrót</Text>
        </Pressable>

        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    </View>
    );
}
