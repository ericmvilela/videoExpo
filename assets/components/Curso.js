import React from "react";
import {css} from "../css/Css";
import {Image, Text, TouchableOpacity} from "react-native";
import logoCurso from '../img/cursoLogo.png'

export default function Curso(props)
{
    return(
        <TouchableOpacity style={css.curso}>
            <Image source={logoCurso} style={css.cursoLogo}/>
            <Text style={css.cursoName}>Educação Financeira</Text>
        </TouchableOpacity>
    )
}