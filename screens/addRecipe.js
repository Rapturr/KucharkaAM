import {useState} from 'react'
import {TextInput, Button, View, ScrollView} from 'react-native'
import styles from './style'

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
        <View>
          <TextInput placeholder='Nazwa dania'
                onChangeText={(text)=>{setName(text)}} 
                style ={styles.input}multiline = {true}
                numberOfLines={1}/>

                <TextInput placeholder='Składniki'
                onChangeText={(text)=>{setIngredients(text)}} 
                style ={styles.input} multiline = {true}
                numberOfLines={8}/>

                <TextInput placeholder='Opis/przepis '
                onChangeText={(text)=>{setDescription(text)}} 
                style ={styles.input}multiline = {true}
                numberOfLines={12}
                
                />

                <Button style={styles.przycisk} title='Dodaj' onPress={()=>{onSubmit()}} />
        </View>
        </ScrollView>
      )
}

export default AddData