import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {HomeScreenNavigator, ListScreenNavigator} from './naviStack'
import { GrTextAlignFull,GrTemplate } from "react-icons/fa";

const Tab = createBottomTabNavigator();

export default function tabNaviHome() {
    return(
        <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name = "Home"  component = {HomeScreenNavigator}/>
            <Tab.Screen name = "List" component = {ListScreenNavigator}/>
        </Tab.Navigator>
        </NavigationContainer>
    )
}

/*
function tabNaviHome() {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "Home" component = {HomeScreenNavigator} options={{headerShown:false}}/>
            <Tab.Screen name = "List" component = {ListScreenNavigator} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}
export {tabNaviHome}

function tabNaviList() {
    return(
        <Tab.Navigator>
            <Tab.Screen name = "List" component = {ListScreenNavigator} options={{headerShown:false}}/>
            <Tab.Screen name = "Home" component = {HomeScreenNavigator} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}
export {tabNaviList}*/