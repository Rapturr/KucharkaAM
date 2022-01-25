import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import styles from './style'

const DataInstance = ({ dataInstance, onToggle, search}) => {
  const clearString = (value) => {
    return value.replace(/\s/g, '').toLowerCase();
  }
  var zm = clearString(dataInstance.name)
  var srch = clearString(search)
  if(clearString(zm).indexOf(clearString(srch)) >= 0){
    return (
      <View>
        <TouchableOpacity style={styles.recipebutton} onPress={() => onToggle(dataInstance.id, dataInstance.name, dataInstance.description, dataInstance.ingredients, dataInstance.counter)}>
          <Text style = {styles.text1}>{dataInstance.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
  else{
    return(
      <View>
      </View>
    )
  }
}

export default DataInstance
