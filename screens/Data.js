import { View } from 'react-native'
import DataInstance from './DataInstance'

const Data = ({ data, onToggle, search}) => {
  return (
    <View>
      {data.map((dataInstance) => (
        <DataInstance
          key={dataInstance.id}
          dataInstance={dataInstance}
          onToggle={onToggle}
          search = {search}
        />
      ))}
    </View>
  )
}

export default Data