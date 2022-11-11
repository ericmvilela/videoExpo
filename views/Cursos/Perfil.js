import React, {useEffect} from "react";
import {css} from "../../assets/css/Css";
import {Image, Text, TouchableOpacity, View} from "react-native";
import curso from '../../assets/img/nopicture.png'
import config from '../../config/config.json'

export default function Perfil({navigation, route})
{
    async function logout()
    {
        let response = await fetch(config.urlRoot+'/accounts/logout/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        if(response.status == 200)
        {
            navigation.navigate('Home')
        }
    }

    useEffect(()=> {
        console.log()
    });


    return(
        <View style={[css.container, css.profilePage]}>
            <View style={css.profileHeader}>
                {route.params.profilePic ?
                    <Image source={{uri: config.urlRoot + route.params.profilePic}} style={css.profilePicture}/> :
                    <Image source={curso} style={css.profilePicture}/>}

                <Text style={css.profileName}>{route.params.name}</Text>
                <TouchableOpacity style={css.profileEditButton} activeOpacity={0.5}>
                    <Text style={css.profileEditButtonText}>Editar Perfil</Text>
                </TouchableOpacity>
            </View>
            <View style={css.profileButtons}>
                <TouchableOpacity style={css.profileButton} activeOpacity={0.5}>
                    <Text style={css.profileButtonText}>Suporte</Text>
                </TouchableOpacity>

                <TouchableOpacity style={css.profileButton} activeOpacity={0.5}>
                    <Text style={css.profileButtonText}>Meus conteúdos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[css.profileButton, css.profileButtonLogout]} activeOpacity={0.5} onPress={logout}>
                    <Text style={[css.profileButtonText, {color: 'white'}]}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}