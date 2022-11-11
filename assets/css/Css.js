import {StyleSheet} from "react-native";
import Constants from "expo-constants";

const css = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0C120C',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 10
    },
    home__image: {
        resizeMode: 'contain',
        width: 300,
        height: undefined,
        aspectRatio: 1,
    },
    home__title: {
        color: '#fffbf0',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    },
    home__header: {
        alignItems: 'center'
    },
    home__button: {
        backgroundColor: '#5B3EFF',
        borderRadius: 15
    },
    home__loginText: {
        color: '#fff',
        fontSize: 20,
        padding: 10,
        paddingHorizontal: 25,
        textAlign: "center"
    },
    home__loginOr: {
        color: '#fff',
        fontSize: 20,
        paddingVertical: 10,
        textAlign: 'center'
    },
    login__input: {
        backgroundColor: '#ECEBF3',
        fontSize: 17,
        padding: 7,
        borderRadius: 10,
        margin: 10
    },
    login__form:{
        width: '90%',
    },
    login__button: {
        backgroundColor: '#52933D',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    login__buttonText: {
        textAlign: 'center',
        fontSize: 19,
        color: '#ECEBF3',
        marginHorizontal: 2
    },
    login__register: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    login__registerText: {
        color: '#C20114',
        textDecorationLine: 'underline'
    },
    register__header: {
        width: '80%',
        alignItems: 'center'
    },
    register__header__text: {
        color: '#ECEBF3',
        fontSize: 16,
        marginVertical: 7,
        textAlign: 'center'
    },
    register__header__title:{
        color: '#C20114',
        fontSize: 30,
        fontWeight: 'bold'
    },
    cursoPage: {
        justifyContent: "flex-start"
    },
    main__greetings: {
        alignSelf: 'flex-start',
        paddingVertical: Constants.statusBarHeight,
        alignItems: 'flex-start',
    },
    main__text: {
        color: '#ECEBF3',
        fontSize: 20,
        padding: 15,
        paddingVertical: 10
    },
    cursosContainer: {
        alignSelf: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
    },
    cursos: {
        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        alignSelf: 'center',
        width: '95%',
        height: 140,
        justifyContent: 'space-between'
    },
    cursoLogo: {
        resizeMode: 'contain',
        width: 75,
        height: 75,
        backgroundColor: '#BBFFFF',
        borderRadius: 10
    },
    curso: {
        paddingVertical: 10,
        alignItems: 'center',
        width: '33%'
    },
    cursoName: {
        color: '#ECEBF3',
        textAlign: "center",
        alignSelf: "center",
        paddingTop: 5
    },
    cursosShowallText: {
        color: 'white',
        fontSize: 16,
        textDecorationLine: "underline",
    },
    cursosShowall: {
        alignSelf: 'flex-end',
        padding: 5,
        paddingRight: 15,
    },
    login__msg:(text = 'none') =>({
        fontWeight: 'bold',
        fontSize: 22,
        color: 'red',
        marginTop: 5,
        marginBottom: 15,
        display: text,
        alignSelf: 'center'
    }),
    profilePage: {
        justifyContent: 'space-between',
        paddingVertical: Constants.statusBarHeight,
        paddingHorizontal: 0,
    },
    profileHeader: {
        backgroundColor: '#C20114',
        width: '100%',
        alignItems: "center",
        justifyContent: 'space-evenly',
        padding: 20,
        borderRadius: 10,
        height: '50%',
    },
    profilePicture: {
        resizeMode: 'cover',
        width: 190,
        height: 190,
        borderRadius: 190 / 2,
        backgroundColor: '#ECEBF3',
        borderWidth: 1,
        borderColor: '#0C120C'
    },
    profileButtons: {
        width: '100%',
        height: '50%',
        justifyContent: "center",
        alignItems: 'center'
    },
    profileName: {
        fontSize: 20,
        color: '#ECEBF3',
        fontWeight: 'bold',
        paddingVertical: 10
    },
    profileEditButton: {
        backgroundColor: '#ECEBF3',
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    profileEditButtonText: {
        fontSize: 16,
        color: '#0C120C',
        fontWeight: 'bold'
    },
    profileButton: {
        backgroundColor: '#ECEBF3',
        padding: 12,
        marginVertical: 10,
        width: '70%',
        borderRadius: 15
    },
    profileButtonText: {
        color: '#0C120C',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    profileButtonLogout: {
        backgroundColor: '#C20114'
    }
})

export {css}