import React, { useState, useEffect, useRef  } from 'react';
import {Text, View, TouchableOpacity, StatusBar} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import styles from './style'

const useCamera = ({ navigation, sendPhoto, resetFlag }) => {
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const ref = useRef(null)

	  useEffect(() => {
		(async () => {
		  const { status } = await Camera.requestCameraPermissionsAsync();
		  setHasPermission(status === 'granted');
		})();
	  }, []);

		const _takePicture = async () => {
			const photo = await ref.current.takePictureAsync()
            console.log(photo.uri)
			setImage(photo.uri)
			sendPhoto(photo.uri)
			resetFlag(0)
		}

	  if (hasPermission === null) {
		return <View />;
	  }
	  if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	  }
  return (

	 <View style={styles.camcontainer}>
		 <StatusBar barStyle="light-content" />
				
      <Camera style={styles.camera} type={type} ref={ref}>
        <View style={styles.buttonContainer}>

			<TouchableOpacity
				style={styles.flipbutton}
				onPress={() => {
					setType(
						type === Camera.Constants.Type.back
							? Camera.Constants.Type.front
							: Camera.Constants.Type.back
					);
				}}>
				<MaterialIcons name='flip-camera-ios' size={40} color={"white"}/>
			</TouchableOpacity>

		<TouchableOpacity style={styles.takebutton} onPress={_takePicture}>
		<MaterialIcons name='camera' size={50} color={"white"}/>
		</TouchableOpacity>
		  

        </View>
      </Camera>
    </View>
	
  );
}
export default useCamera