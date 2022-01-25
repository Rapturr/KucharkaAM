import { View } from 'react-native'
import DataInstance from './DataInstance'

const Data = ({ data, onToggle}) => {
  return (
    <View>
      {data.map((dataInstance) => (
        <DataInstance
          key={dataInstance.id}
          dataInstance={dataInstance}
          onToggle={onToggle}
        />
      ))}
    </View>
  )
}

export default Data