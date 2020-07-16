import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { AppLoading } from "expo";

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
  },
});

export default ({ children, style, accent, bold }) => {
  // let [fontsLoaded] = useFonts({
  //   "AvenirNextLTPro-Bold": require("../../../assets/fonts/AvenirNextLTPro-Bold.otf")
  // });
  
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }
  return (
    <Text
      style={{
        ...styles.h1,
        color: accent ? "#F54B64" : "#FFFFFF",
        //fontFamily: bold ? "AvenirNextLTPro-Bold" : "AvenirNextLTPro-Regular",
        ...style,
      }}
    >
      {children}
    </Text>
  );
};



