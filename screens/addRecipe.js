import {useState} from 'react'
import {StyleSheet} from 'react-native'
import mystyles from './style'

const AddData = ({onAdd})=>{
    const [name, setName] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [description, setDescription] = useState('')

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
        <form className='add-form' onSubmit={onSubmit}>
          <div className='form-control'>
            <label>Nazwa Dania<br /></label>
            <input
              type='text'
              placeholder='Name of the dish'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>Lista składników<br /></label>
            <input
              type='text'
              placeholder='List of ingredients'
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label>Przepis<br /></label>
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

export default AddData