import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigator from "./HomeStackNavigator";
import ProfileScreen from "../screen/Auth/Profile/ProfileScreen";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Icon } from "native-base";


const Tab = createBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: Colors.primaryColor,
            style: {
                backgroundColor: "#20242F",
                borderTopWidth: 0,
                paddingTop: 4
            }
        }}>
            <Tab.Screen name="home" component={HomeStackNavigator} options={{
                tabBarIcon: ({ color, size }) => <Icon type="Entypo" name="home" style={{color, fontSize: size}} />
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ color, size }) => <Icon type="FontAwesome5" name="user" style={{color, fontSize: size}} />
            }} />
        </Tab.Navigator>
    );
};