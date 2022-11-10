import React, {useEffect} from "react";
import {css} from "../assets/css/Css";
import {Image, Text, TouchableOpacity, View} from "react-native";
import curso from '../assets/img/cursos.jpg'

export default function Home({navigation})
{
    async function sendForm()
    {
        let response = await fetch('http://192.168.100.46:8000/accounts/confirm/', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if(response.status === 200)
        {
            navigation.navigate('Main')
        }
    }

    useEffect(()=> {
        sendForm();
    });

    return(
        <View style={[css.container]}>
            <View style={css.home__header}>
                <Text style={css.home__title}>A melhor plataforma de cursos grátis</Text>
                <Image source={curso} style={css.home__image}/>
            </View>
            <View>
                <TouchableOpacity style={css.home__button} onPress={()=> navigation.navigate('Login')}>
                    <Text style={css.home__loginText}>Fazer Login</Text>
                </TouchableOpacity>
                <Text style={css.home__loginOr}>ou</Text>
                <TouchableOpacity style={css.home__button} onPress={()=> navigation.navigate('Register')}>
                    <Text style={css.home__loginText}>Registrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}