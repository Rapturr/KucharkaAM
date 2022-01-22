import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {tabNaviHome, tabNaviList} from './naviTab'

const drawer = createDrawerNavigator()

export default function drawerNavi() {
    return(
    <NavigationContainer>
        <drawer.Navigator>
            <drawer.Screen name = "Home" component = {tabNaviHome} options={{headerShown:false}}/>
            <drawer.Screen name = "List" component = {tabNaviList} options={{headerShown:false}}/>
        </drawer.Navigator>
    </NavigationContainer>
    )
}