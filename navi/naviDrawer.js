import * as React from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreenNavigator, ListScreenNavigator} from './naviStack'
import { Drawer } from 'react-native-paper';
import { Image, View } from 'react-native';

const drawer = createDrawerNavigator()

const DrawerNavi = () => {
    return(
        <drawer.Navigator
            
        >
            <drawer.Screen name = "Home1" component = {HomeScreenNavigator} options={{ title: 'Strona Główna', }}/>
            <drawer.Screen name = "List1" component = {ListScreenNavigator}/>
        </drawer.Navigator>
    )
}

export {DrawerNavi}

const DrawerNavi1 = () => {
    return(
        <drawer.Navigator contentContainerStyle={{backgroundColor: '#3040B3FF',height:'40%'}}>
            <drawer.Screen name = "List1" component = {ListScreenNavigator}/>
            <drawer.Screen name = "Home1" component = {HomeScreenNavigator}/>
        </drawer.Navigator>
    )
}

export {DrawerNavi1}
