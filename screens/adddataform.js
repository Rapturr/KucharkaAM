/*import React from 'react'
import {View, Button, TextInput} from 'react-native'
import styles from './style';

class Form extends React.Component{
    //const [name, setName] = useState('')
    //const [ingredients, setIngredients] = useState('')
    //const [description, setDescription] = useState('')
    constructor(){
        super();
        this.state = {
            name:'',
            ingredients:'',
            description:'',
        }
    }
    submit(){
         console.warn(this.state)
    }

    render(){
        return(
            <View>
                <TextInput placeholder='Nazwa dania'
                onChangeText={(text)=>{this.setState({name:text})}} 
                style ={styles.input}/>

                <TextInput placeholder='Składniki'
                onChangeText={(text)=>{this.setState({ingredients:text})}} 
                style ={styles.input}/>

                <TextInput placeholder='Opis/przepis '
                onChangeText={(text)=>{this.setState({description:text})}} 
                style ={styles.input}/>

                <Button title='Dodaj' onPress={()=>{this.submit()}} />
            </View>
        )
    }
}*/