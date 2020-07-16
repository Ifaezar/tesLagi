import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/Auth/Home/HomeScreen";
import PostDetailScreen from "../screen/Auth/PostDetail/PostDetailScreen";
import CreatePostScreen from "../screen/Auth/CreatePost/CreatePostScreen";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={PostDetailScreen} name="HomePostDetail" />
      <Stack.Screen component={CreatePostScreen} name="CreatePost" />
    </Stack.Navigator>
  );
};