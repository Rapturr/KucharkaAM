import {useState} from 'react'
import {TextInput, Button, View} from 'react-native'
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
        <View>
          <TextInput placeholder='Nazwa dania'
                onChangeText={(text)=>{setName(text)}} 
                style ={styles.input}/>

                <TextInput placeholder='Składniki'
                onChangeText={(text)=>{setIngredients(text)}} 
                style ={styles.input}/>

                <TextInput placeholder='Opis/przepis '
                onChangeText={(text)=>{setDescription(text)}} 
                style ={styles.input}/>

                <Button title='Dodaj' onPress={()=>{onSubmit()}} />
        </View>
      )
}

export default AddData