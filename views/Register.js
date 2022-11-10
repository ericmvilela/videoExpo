import React from "react";
import {css} from "../assets/css/Css";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform, Text, TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import curso from '../assets/img/cursos.jpg'

export default function Register({navigation})
{
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={css.container}
                behavior={Platform.OS === 'ios' ? 'padding': 'height'}
            >
                <View style={css.register__header}>
                    <Text style={[css.register__header__text, css.register__header__title]}>Registro</Text>
                    <Text style={css.register__header__text}>Cadastre-se para ter acesso a vários cursos gratuitos</Text>
                </View>

                <View style={css.login__form}>
                    <TextInput
                        style={css.login__input}
                        placeholder='Nome Completo'
                        autoCapitalize='none'
                    />

                    <TextInput
                        style={css.login__input}
                        placeholder='Email'
                        autoCapitalize='none'
                        autoComplete='email'
                    />

                    <TextInput
                        style={css.login__input}
                        placeholder='Username'
                        autoCapitalize='none'
                        autoComplete='email'
                    />

                    <TextInput
                        style={css.login__input}
                        placeholder='Senha'
                        secureTextEntry={true}
                    />

                    <TextInput
                        style={css.login__input}
                        placeholder='Confirme a senha'
                        secureTextEntry={true}
                    />

                    <TouchableOpacity style={css.login__button}>
                        <Text style={css.login__buttonText}>Registrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={css.login__register} onPress={()=> navigation.navigate('Login')}>
                        <Text style={css.login__buttonText}>Já possui conta?</Text>
                        <Text style={[css.login__buttonText, css.login__registerText]}>Login</Text>
                    </TouchableOpacity>


                </View>

            </KeyboardAvoidingView>


        </TouchableWithoutFeedback>
    )
}