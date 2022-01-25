import * as React from 'react';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreenNavigator, ListScreenNavigator} from './naviStack'
import { Image, View, Text } from 'react-native';
import CustomDrawer from './CustomDrawer';

const drawer = createDrawerNavigator()
function Draw() {
    return (
        <drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown:false, 
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
          },
        }}>
            <drawer.Screen name="HomeScreen" component={HomeScreenNavigator} />
            <drawer.Screen name="RecipeList" component={ListScreenNavigator} />
        </drawer.Navigator>
    );
}
function Draw1() {
    return (
        <drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown:false, 
          drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
          },
        }}>
            <drawer.Screen name="RecipeList" component={ListScreenNavigator} />
            <drawer.Screen name="HomeScreen" component={HomeScreenNavigator} />
        </drawer.Navigator>
    );
}



export {Draw}
export {Draw1}