import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home'
import About from '../screens/about'
import List from '../screens/recipelist'
import Recipe from '../screens/showRecipe'
import NewRecipe from '../screens/addRecipeScreen'
import imageGallery from '../screens/imageGallery'
import images from '../screens/showImages'
import cameraScreen from '../screens/cameraScreen'
import Help from '../screens/helpScreen'


const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}} >
            <Stack.Screen name="Home"component={Home}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="List" component={List}/>
            <Stack.Screen name="Recipe" component={Recipe}/>
            <Stack.Screen name="NewRecipe" component={NewRecipe}/>
            <Stack.Screen name="imageGallery" component={imageGallery}/>
            <Stack.Screen name="cameraScreen" component={cameraScreen}/>
            <Stack.Screen name="Help" component={Help}/>
            <Stack.Screen name="images" component={images}/>
        </Stack.Navigator>
    )
}
export {HomeScreenNavigator}

const ListScreenNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="List"component={List}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="About" component={About} options={{headerShown:false}}/>
            <Stack.Screen name="Recipe" component={Recipe} options={{headerShown:false}}/>
            <Stack.Screen name="NewRecipe" component={NewRecipe}/>
            <Stack.Screen name="imageGallery" component={imageGallery}/>
            <Stack.Screen name="cameraScreen" component={cameraScreen}/>
            <Stack.Screen name="Help" component={Help}/>
            <Stack.Screen name="images" component={images}/>
        </Stack.Navigator>
    )
}
export {ListScreenNavigator}

/*
export default function Navigation() {
    return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={tabNavi}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="List" component={tabNavi}/>
            <Stack.Screen name="Recipe" component={Recipe}/>
            <Stack.Screen name="NewRecipe" component={NewRecipe}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}*/