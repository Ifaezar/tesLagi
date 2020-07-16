import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import TextUI from "../../../components/Text/TextUI";
import Colors from "../../../constants/Colors";
import { Icon } from "native-base";
import Header from "../../../components/General/Header";
import Image from "react-native-scalable-image";
import PlaceholderImg from "../../../../assets/fonts/images/login_bg.png"


const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 18,
    alignItems: "center",
  },
  commentContainer: {
    paddingHorizontal: 30,
    marginTop: 12,
  },
});

export default (props) => {
//const { postData } = props.route.params;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      }}
    >
      <SafeAreaView />
      <Header {...props} title="username" />
      <ScrollView style={{ flex: 1 }}>
        <Image
          style={{ maxHeight: 540 }}
          width={width}
          source={PlaceholderImg}
        />
        <View style={{ ...styles.commentContainer }}>
          <TextUI size="sm" style={{ height: null }}>
            Since the introduction of Virtual Game, it has been achieving great
            heights so far as its popularity and technological advancement are
            concerned. The history of video game is as interesting as a fairy.
          </TextUI>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={15}
        style={{
          paddingHorizontal: 15,
          backgroundColor: "#20242F",
          paddingVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#485164",
              borderRadius: 18,
              justifyContent: "center",
              flex: 1,
            }}
          >
            <TextInput
              placeholderTextColor="white"
              placeholder="Write a comment.."
              style={{
                fontSize: 15,
                paddingHorizontal: 15,
                paddingVertical: 7,
                lineHeight: 20,
              }}
            />
          </View>
          <TouchableOpacity style={{ marginHorizontal: 11 }}>
            <Icon
              type="MaterialCommunityIcons"
              name="send"
              style={{ color: Colors.primaryColor }}
            />
          </TouchableOpacity>
        </View>
        <SafeAreaView />
      </KeyboardAvoidingView>
    </View>
  );
};