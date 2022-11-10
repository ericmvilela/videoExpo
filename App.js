import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Home, Login, Register, Main } from "./views/index";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
            //     options={{
            //     title: 'Home',
            //     headerStyle: {backgroundColor: '#C20114'},
            //     headerTintColor: '#ECEBF3',
            //     headerTitleStyle: {fontWeight: 'bold', alignSelf:'center'},
            //     headerTitleAlign: 'center'
            // }}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name='Login'
                component={Login}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name='Register'
                component={Register}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name='Main'
                component={Main}
                options={{headerShown: false, gestureEnabled: false}}
            />


        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
