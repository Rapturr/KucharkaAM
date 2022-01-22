import { View } from 'react-native'
import DataInstance from './DataInstance'

const Data = ({ data, onDelete, onToggle}) => {
  return (
    <View>
      {data.map((dataInstance) => (
        <DataInstance
          key={dataInstance.id}
          dataInstance={dataInstance}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </View>
  )
}

export default Data