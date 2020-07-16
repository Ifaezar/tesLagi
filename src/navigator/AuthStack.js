import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StackActions } from '@react-navigation/native'
import LoginScreen from '../screen/Auth/LoginScreen'
import RegisterScreen from '../screen/Auth/RegisterScreen'
import WelcomeScreen from '../screen/Auth/WelcomeScreen'

const Stack = createStackNavigator()

export default () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen component={WelcomeScreen} name="Welcome" />
            <Stack.Screen component={LoginScreen} name="Login" />
            <Stack.Screen component={RegisterScreen} name="Register" />
        </Stack.Navigator>
    )
}