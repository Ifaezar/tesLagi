import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions } from "react-native";
import WelcomeBg from '../../../assets/fonts/images/welcome_bg.png'
import H1 from "../../components/Text/H1";
import TextUI from "../../components/Text/TextUI";
import Button from "../../components/Button/Button";
import DarkOverlay from "../../components/General/DarkOverlay";
import AsyncStorage from "@react-native-community/async-storage";
import { useDispatch, useSelector } from 'react-redux'
const { height } = Dimensions.get("screen")

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: height * (314 / 812)
  },
  bgImage: {
    flex: 1
  }
})

export default ({navigation}) => {


  return (
    <ImageBackground style={{ ...styles.bgImage }} source={WelcomeBg}>
      <DarkOverlay/>
      <View style={styles.container}>
        <H1 style={{ fontSize: 44, lineHeight: 50 }} bold>Find New Friend Nearby</H1>
        <TextUI style={{ marginTop: 14 }}>
          With millions of users all over the wolrd, we gives you the ability to
          connect with people no matter where you are.
        </TextUI>
        <Button onPress={() => navigation.navigate("Login")} size="lg" type="secondary" containerStyle={{ marginTop: 44, marginBottom: 10 }}>Log in</Button>
        <Button onPress={() => navigation.navigate("Register")} size="lg">Sign Up</Button>
      </View>
    </ImageBackground>
  );
}


