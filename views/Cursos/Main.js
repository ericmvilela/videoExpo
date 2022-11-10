import React from "react";
import { AntDesign, Entypo } from '@expo/vector-icons';
import Cursos from "./Cursos";
import Perfil from "./Perfil";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

export default function Main({navigation})
{
    const Tab = createMaterialBottomTabNavigator();
    return(
        <Tab.Navigator
            initialRouteName='Cursos'
            activeColor="#ecebf3"
            barStyle={{ backgroundColor: '#C20114'}}
            shifting={true}
        >
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={24} color="#c7d6d5" />
                    ),
                }}
            />
            <Tab.Screen
                name="Cursos"
                component={Cursos}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="graduation-cap" size={24} color="#c7d6d5" />
                    ),
                }}
            />
            <Tab.Screen
                name="Postar"
                component={Cursos}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="addfile" size={24} color="#c7d6d5" />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}