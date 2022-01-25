import {useState} from 'react'
import {TextInput, Button, View, ScrollView, Pressable, Text} from 'react-native'
import styles from './style'
import { StatusBar } from 'expo-status-bar';

const AddData = ({onAdd})=>{
    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = () => {
        onAdd({ name, ingredients, description })
    
        setName('')
        setIngredients('')
        setDescription('')
      }

    return (
        <ScrollView>
        <View style={styles.container}>
          <TextInput placeholder='Nazwa dania'
                onChangeText={(text)=>{setName(text)}} 
                style ={{borderWidth:2,
                  borderColor: '#AAAAAA',
                  marginTop:100,
                  marginBottom:20,
                  width:280,
                  padding: 15,
                  backgroundColor: 'rgba(1,1,1,0.8)',
                  color: 'white',}}multiline = {true}
                numberOfLines={1}
                maxLength={50}
                />

                <TextInput placeholder='Składniki'
                onChangeText={(text)=>{setIngredients(text)}} 
                style ={styles.input} multiline = {true}
                numberOfLines={8}/>

                <TextInput placeholder='Opis/przepis '
                onChangeText={(text)=>{setDescription(text)}} 
                style ={styles.input}multiline = {true}
                numberOfLines={12}
                />
                <Pressable style={styles.przycisk} onPress={()=>onSubmit()}>
                  <Text>Dodaj Przepis</Text>
                </Pressable>
                <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
        </ScrollView>
      )
}

export default AddData