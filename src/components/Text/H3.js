import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  h1: {
    fontSize: 22,
  },
});

export default ({ children, style, accent, bold }) => {
  return (
    <Text
      style={{
        ...styles.h1,
        color: accent ? "#F54B64" : "#FFFFFF",
        fontFamily: bold ? "AvenirNextLTPro-Bold" : "AvenirNextLTPro-Regular",
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
