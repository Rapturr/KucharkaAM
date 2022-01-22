/*import {useState} from 'react'
import { Pressable, StyleSheet, Text, View, useForm } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Input = ({ name, control })=>{
  return(
    <TextInput />
  )
}

const AddData = ({onAdd})=>{
    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [description, setDescription] = useState('')

    const {control, handleSubmit} = useForm();

    const onSubmit = (e) => {
        e.preventDefault()
    
        if (!name) {
          alert('Dodaj danie')
          return
        }
    
        onAdd({ name, ingredients, description })
    
        setName('')
        setIngredients('')
        setDescription('')
      }

    return (
      <View>
        <Text>Nazwa Dania</Text>
          <input
            type='text'
            placeholder='Name of the dish'
            value={name}
            onChange={(e) => setName(e.target.value)}
            control = {control}
          />
          <Text>Lista składników</Text>
          <input
            type='text'
            placeholder='List of ingredients'
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <Text>Przepis</Text>
          <input
            type='text'
            placeholder='Recipe'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
      </View>
      
        <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
            <Text>Nazwa Dania</Text>
            <input
              type='text'
              placeholder='Name of the dish'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <Text>Lista składników</Text>
            <input
              type='text'
              placeholder='List of ingredients'
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <Text>Przepis</Text>
            <input
              type='text'
              placeholder='Recipe'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
    
          <input type='submit' value='Save Dish' className='btn btn-block' />
        </form>
      )
}

export default AddData*/