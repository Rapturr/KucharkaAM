import React from "react";
import { Text, View, Pressable, ImageBackground } from 'react-native';
import { FaCreativeCommonsPd } from "react-icons/fa";
import styles from './style'

export default function Recipe({navigation, route}) {
  //const [data, setdata] = useState(route.params.data);
  //const [index, setindex] = useState(route.params.index);
  const id = route.params.id;
  const name = route.params.name;
  const desc = route.params.desc;
  const ingredients = route.params.ingredients;
  
    const onPressHandler = ()=>{
      navigation.navigate('List')
    }
    return(
    <View style={styles.Przepiscontainer}>
      <ImageBackground source={require('../assets/Lemons.png')} style={styles.bgimage}>
        <Text style={styles.authors}>
          {name}
        </Text>
        <Text style={styles.authors}>
          Składniki:
        </Text>
        <Text style={styles.authors}>
        {ingredients}
        </Text>
        <Text style={styles.authors}>
          Przepis:
        </Text>
        <Text style={styles.authors}>
          {desc}
        </Text>
    <Pressable style={styles.button}  title='Return' onPress={onPressHandler}>
      <Text style={styles.text}>Powrót</Text>
    </Pressable>
    </ImageBackground>
    </View>
    )
}