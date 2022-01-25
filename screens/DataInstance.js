import { View, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import styles from './style'

const DataInstance = ({ dataInstance, onToggle}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onToggle(dataInstance.id, dataInstance.name, dataInstance.description, dataInstance.ingredients)}>
        <Text style = {styles.text1}>{dataInstance.name}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DataInstance
