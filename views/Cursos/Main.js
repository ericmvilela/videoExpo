import React, {useEffect, useState} from "react";
import { AntDesign, Entypo } from '@expo/vector-icons';
import Cursos from "./Cursos";
import Perfil from "./Perfil";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {View} from "react-native";

export default function Main({navigation})
{

    const Tab = createMaterialBottomTabNavigator();
    const [user, setUser] = useState('')

    async function sendForm()
    {
        let response = await fetch('http://192.168.100.46:8000/accounts/me/', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        let json = await response.json()
        setUser(json)
    }

    useEffect(()=> {
        sendForm();
    });

    return(
        <Tab.Navigator
            initialRouteName='Cursos'
            activeColor="#ecebf3"
            barStyle={{ backgroundColor: '#0C120C'}}
            shifting={true}
        >
            <Tab.Screen
                name="Perfil"
                initialParams={user}
                component={Perfil}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={24} color="#c7d6d5" />
                    ),
                }}
            />
            <Tab.Screen
                initialParams={user}
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