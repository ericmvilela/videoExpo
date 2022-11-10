import React, {useState, useEffect} from "react";
import {css} from "../../assets/css/Css";
import { Text, TouchableOpacity, View } from "react-native";
import Curso from "../../assets/components/Curso";

export default function Cursos({navigation})
{
    const [nome, setNome] = useState('')

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
        setNome(json.name.split(" ")[0])
    }

    useEffect(()=> {
        sendForm();
    });

    return(
        <View style={[css.container, css.cursoPage]}>
            <View style={css.main__greetings}>
                <Text style={css.main__text}>Olá, {nome}!</Text>
                <Text style={css.main__text}>Escolha uma categoria de curso do seu interesse</Text>
            </View>
            <View style={css.cursosContainer}>
                <Text style={css.main__text}>Categorias de curso</Text>
                <View style={css.cursos}>
                    <Curso></Curso>
                    <Curso></Curso>
                    <Curso></Curso>
                </View>
                <TouchableOpacity style={css.cursosShowall}>
                    <Text style={css.cursosShowallText}>Ver todos ...</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}