import React, {useState} from "react";
import {css} from "../assets/css/Css";
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform, Text, TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import curso from '../assets/img/cursos.jpg'

export default function Login({navigation})
{
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [display, setDisplay] = useState('none');

    async function sendForm()
    {
        let response = await fetch(`http://192.168.100.46:8000/accounts/login/`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user,
                    password
                })
            });
            if(response.status !== 200)
            {
                setDisplay('flex')
            }
            else
            {
                setDisplay('none')
                navigation.navigate('Main')
            }
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={css.container}
                behavior={Platform.OS === 'ios' ? 'padding': 'height'}
            >
                <View style={css.home__header}>
                    <Image source={curso} style={css.home__image}/>
                </View>


                <View style={css.login__form}>
                    <View>
                        <Text style={css.login__msg(display)}>Usuário ou senha Inválidos</Text>
                    </View>
                    <TextInput
                        style={css.login__input}
                        placeholder='Email ou Usuário'
                        autoCapitalize='none'
                        autoComplete='email'
                        onChangeText={text=>setUser(text)}
                    />

                    <TextInput
                        style={css.login__input}
                        placeholder='Senha'
                        secureTextEntry={true}
                        onChangeText={text=>setPassword(text)}
                    />

                    {/*onPress={()=> navigation.navigate('Main')}*/}
                    <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                        <Text style={css.login__buttonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={css.login__register} onPress={()=> navigation.navigate('Register')}>
                        <Text style={css.login__buttonText}>É novo aqui?</Text>
                        <Text style={[css.login__buttonText, css.login__registerText]}>Registre-se</Text>
                    </TouchableOpacity>


                </View>

            </KeyboardAvoidingView>


        </TouchableWithoutFeedback>
    )
}