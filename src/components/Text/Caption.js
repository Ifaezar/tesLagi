import React from "react";
import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  caption: {},
});

export default ({ children, style, accent, sm, bold }) => {
  return (
    <Text
      style={{
        ...styles.caption,
        color: accent ? "#F54B64" : "#FFFFFF",
        fontSize: sm ? 11 : 13,
        fontFamily: bold ? "AvenirNextLTPro-Bold" : "AvenirNextLTPro-Regular",
        ...style,
      }}
    >
      {children}
    </Text>
  );
};
