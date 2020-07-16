import React from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Image } from "react-native";
import H1 from "../../../components/Text/H1";
import TextUI from "../../../components/Text/TextUI";
import Tagline from '../../../components/Text/Tagline';
import Colors from '../../../constants/Colors'
import ImageScale from "react-native-scalable-image";
import { Icon } from "native-base";
import PlaceholderProfPic from "../../../../assets/fonts/images/signup_bg.png";


const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({});

export default ({ navigation, data }) => {
  return (
    <View
      style={{
        backgroundColor: Colors.backgroundColor,
        width: width - 30,
        marginHorizontal: 15,
        borderRadius: 6,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 6,
        marginVertical: 10,
      }}
    >
      <ImageScale
        source={{
          uri: data.photoURL,
        }}
        style={{
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
        width={width - 30}
      />
      <View style={{ paddingHorizontal: 13 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 11,
          }}
        >
          <Image
            source={PlaceholderProfPic}
            style={{ width: 40, height: 40, borderRadius: 500 }}
          />
          <View style={{ marginLeft: 10 }}>
            <TextUI style={{ marginBottom: 4 }} bold>
              {data.User.username}
            </TextUI>
            <Tagline>2 Hours Ago</Tagline>
          </View>
        </View>
        <TextUI size="sm" style={{ marginTop: 11, height: null }}>
          {data.caption}
        </TextUI>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 25,
            paddingBottom: 75,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon style={{ ...styles.likeBtn }} type="AntDesign" name="heart" />
            <TextUI
              size="sm"
              style={{
                marginLeft: 8,
                textAlignVertical: "bottom",
              }}
            >
              1125
            </TextUI>
            <TouchableOpacity
              onPress={() => navigation.navigate("HomePostDetail")}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 22,
              }}
            >
              <Icon
                style={{ ...styles.likeBtn }}
                type="MaterialIcons"
                name="chat"
              />
              <TextUI
                size="sm"
                style={{
                  marginLeft: 8,
                  textAlignVertical: "bottom",
                }}
              >
                348
              </TextUI>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon
              style={{ ...styles.likeBtn, marginLeft: 22 }}
              type="Foundation"
              name="share"
            />
            <TextUI
              size="sm"
              style={{
                marginLeft: 8,
                textAlignVertical: "bottom",
              }}
            >
              348
            </TextUI>
          </View>
        </View>
      </View>
    </View>
  );
};