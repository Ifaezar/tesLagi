import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView
} from "react-native";
import Login_Bg from "../../../assets/fonts/images/login_bg.png"
import DarkOverlay from "../../components/General/DarkOverlay";
import TextUI from "../../components/Text/TextUI";
import Button from "../../components/Button/Button";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from "@react-native-community/async-storage"


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover"
  },
  contentContainer: {
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontFamily: "AvenirNextLTPro-Bold",
    fontSize: 34,
    lineHeight: 40,
  },
  loginText: {
    marginTop: 12
  }
})

export default (props) => {
  let [fontsLoaded] = useFonts({
    // "Inter-Black": require(".../../assets/fonts/Inter-Black.otf"),
    "AvenirNextLTPro-Bold": require("../../../assets/fonts/AvenirNextLTPro-Bold.otf"),
    "AvenirNextLTPro-Regular": require("../../../assets/fonts/AvenirNextLTPro-Regular.otf")
  });

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const userSelector = useSelector((state) => state.user)


  const loginButtonHandler = () => {
    Axios.get(`${API_URL}/users/login`, {
      params: {
        username,
        password
      }
    })
      .then((res) => {
        console.log(res.data)
        const {
          bio,
          fullname,
          email,
          username,
          profilePicture,
          id
        } = res.data.result
        AsyncStorage.setItem(
          "userData",
          JSON.stringify({
            bio,
            fullname,
            email,
            username,
            profilePicture,
            id
          })
        )
          .then((res) => {
            dispatch({
              type: "USER_LOGIN",
              payload: { bio, fullname, email, username, profilePicture, id }
            })
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ImageBackground source={Login_Bg} style={{ ...styles.bgImage }}>
      <DarkOverlay />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>


        <KeyboardAvoidingView
          behavior="padding"
          style={{ justifyContent: "center", flex: 1 }}>
          <View style={{ ...styles.contentContainer }}>
            <TextUI style={{ ...styles.welcomeText }}>Welcome Back {userSelector.username}</TextUI>
            <TextUI style={{ ...styles.loginText }}>Login to Your Account</TextUI>
            <View style={{
              borderRadius: 22,
              paddingVertical: 11,
              paddingHorizontal: 20,
              justifyContent: "center"
            }}>
              <View style={{
                backgroundColor: "white",
                opacity: 0.2,
                borderRadius: 22,
                height: 40,
                ...StyleSheet.absoluteFillObject
              }}>
                <TextInput style={{
                  fontFamily: "AvenirNextLTPro-Regular",
                  fontSize: 17,
                  lineHeight: 19,
                  color: "white"
                }}
                  placeholder="Username"
                  value={username}
                  onChangeText={(text) => setUsername(text)}
                />
              </View>
            </View>
            <View style={{
              borderRadius: 22,
              paddingVertical: 11,
              paddingHorizontal: 20,
              marginTop: 30,
              justifyContent: "center"
            }}>
              <View style={{
                backgroundColor: "white",
                opacity: 0.2,
                borderRadius: 22,
                height: 40,
                ...StyleSheet.absoluteFillObject
              }}>
                <TextInput
                  secureTextEntry
                  style={{
                    fontFamily: "AvenirNextLTPro-Regular",
                    fontSize: 17,
                    lineHeight: 19,
                    color: "white"
                  }}
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
            </View>
            <Button
              onPress={loginButtonHandler}
              containerStyle={{ marginTop: 40 }} size="lg">LOGIN</Button>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

function useFonts(fontMap) {
  let [fontsLoaded, setFontsLoaded] = useState(false);
  (async () => {
    await Font.loadAsync(fontMap);
    setFontsLoaded(true);
  })();
  return [fontsLoaded];
}
