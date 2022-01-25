import { StatusBar } from 'expo-status-bar';
import {ImageBackground, Pressable, Platform, View, Text, ScrollView } from 'react-native';
import styles from './style'

export default function AboutScreen({navigation}) {
    const onPressHandler = ()=>{
    navigation.navigate('Home');
    }
    return (
    <ScrollView>
    <View style={styles.container}>
        <ImageBackground source={require('../assets/Lemons.png')} style={styles.bgimage}>
        

        
        <Text style={styles.authors}>1 kg = 1000 g</Text>
        <Text style={styles.authors}>1 hg = 100 g</Text>
        <Text style={styles.authors}>1 stone = 14 pounds = 6,35 kg</Text>
        <Text style={styles.authors}>1 pound (lb) - 16 ounces = 453,6 g</Text>
        <Text style={styles.authors}>1 ounce (o) = 28,35 g</Text>
        <Text style={styles.authors}>1 US gallon = 4 liquid quarts = 3,7851 lit</Text>
        <Text style={styles.authors}>1 liquid quart = 2 liquid pints = 9,5 dl</Text>
        <Text style={styles.authors}>1 liquid pint = 16 US fl. oz. = 4,73 dl</Text>
        <Text style={styles.authors}>1 liquid pint = 2 cups = 4,73 dl</Text>
        <Text style={styles.authors}>1 US fluid ounce(fl. oz.) = 29,6 ml</Text>
        <Text style={styles.authors}>1 dry quart(qt.) = 2 dry pints(pt.) = 1,1 lit</Text>
        <Text style={styles.authors}>1 imperial gallon = 4,55 lit</Text>
        <Text style={styles.authors}>1 pint = 2 cups = 5,68 lit</Text>
        <Text style={styles.authors}>1 cup = 10 Brit fl. oz. = 2,84 ml</Text>
        <Text style={styles.authors}>1 British fluid ounce(Brit fl. oz.) = 28,4 ml</Text>
        <Text style={styles.authors}>1 tsp = 3 ml</Text>
        <Text style={styles.authors}>1 tbsp = 15 ml</Text>
        <Text style={styles.authors}>1 dl = 100 ml</Text>
        <Text style={styles.authors}>1 lit = 1000 ml</Text>
        <Text style={styles.authors}>100C = 212F  225F = 110C</Text>
        <Text style={styles.authors}>125C = 257F  275F = 140C</Text>
        <Text style={styles.authors}>150C = 302F  325F = 160C</Text>
        <Text style={styles.authors}>175C = 347F  350F = 175C</Text>
        <Text style={styles.authors}>200C = 392F  375F = 190C</Text>
        <Text style={styles.authors}>225C = 437F  425F = 220C</Text>
        <Text style={styles.authors}>250C = 482F  450F = 235C</Text>




        <Pressable style={styles.button} title='Lista dań' onPress={onPressHandler}>
            <Text style={styles.text}>Powrót</Text>
        </Pressable>

        </ImageBackground>
    </View>
    </ScrollView>
    );
}
