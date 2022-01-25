import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {DrawerNavi, DrawerNavi1} from './naviDrawer'
 
const Tab = createBottomTabNavigator();

export default function tabNaviHome() {
    return(
        <NavigationContainer>
        <Tab.Navigator screenOptions={ {tabBarStyle: {backgroundColor: "yellow"}}, ({route})=>
        ({
            tabBarIcon:()=>{
            if (route.name === 'HomeScreen') {
                return <MaterialCommunityIcons name="home-group" size={24} color="black" />;
            } else if (route.name === 'RecipeList') {
                return <MaterialCommunityIcons name="format-list-bulleted" size={24} color="black" />;
            }

            // You can return any component that you like here!
        },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
            <Tab.Screen name = "HomeScreen"  component = {DrawerNavi} options={{headerShown:false}}/>
            <Tab.Screen name = "RecipeList" component = {DrawerNavi1} options={{headerShown:false}}/>
        </Tab.Navigator>
        </NavigationContainer>
    )
}