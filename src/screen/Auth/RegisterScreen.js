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
import signUp_Bg from "../../../assets/fonts/images/signup_bg.png"
import DarkOverlay from "../../components/General/DarkOverlay";
import TextUI from "../../components/Text/TextUI";
import Button from "../../components/Button/Button";
import Axios from "axios";
import { API_URL } from "../../constants/API";


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
    "AvenirNextLTPro-Bold": require("../../../assets/fonts/AvenirNextLTPro-Bold.otf"),
    "AvenirNextLTPro-Regular": require("../../../assets/fonts/AvenirNextLTPro-Regular.otf")
  });

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  

  const registerBtnHandler = () => {
    Axios.post(`${API_URL}/users`, {
      username,
      fullName,
      email,
      password,
      bio: "No bio yet",
      profilePicture: "empty",
    })
      .then((res) => {
        console.log(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <ImageBackground source={signUp_Bg} style={{ ...styles.bgImage }}>
      <DarkOverlay />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior="padding"
          style={{ justifyContent: "center", flex: 1 }}>
          <View style={{ ...styles.contentContainer }}>
            <TextUI style={{ ...styles.welcomeText }}>Create an Account</TextUI>
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
                <TextInput style={{
                  fontFamily: "AvenirNextLTPro-Regular",
                  fontSize: 17,
                  lineHeight: 19,
                  color: "white"
                }}
                  placeholder="Name"
                  onChangeText={(text) => setFullName(text)}
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
                <TextInput style={{
                  fontFamily: "AvenirNextLTPro-Regular",
                  fontSize: 17,
                  lineHeight: 19,
                  color: "white"
                }}
                  placeholder="Email"
                  onChangeText={(text) => setEmail(text)}
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
                  onChangeText={(text) => setPassword(text)}
                />
              </View>
            </View>
            <Button
              onPress={registerBtnHandler}
              containerStyle={{ marginTop: 40 }}
              size="lg"
            >
              SIGN UP
            </Button>
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
