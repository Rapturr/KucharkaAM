import React from "react";
import { Text, View, Pressable } from 'react-native';
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
    <View style={styles.container}>
        <Text style={styles.text}>
          {name}
        </Text>
        <Text style={styles.text}>
          Składniki: {ingredients}
        </Text>
        <Text style={styles.text}>
          Przepis: {desc}
        </Text>
    <Pressable style={styles.button}  title='Return' onPress={onPressHandler}>
      <Text style={styles.text}>Return</Text>
    </Pressable>
    </View>
    )
}