import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, ImageBackground, Dimensions, FlatList, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import H1 from "../../../components/Text/H1";
import TextUI from "../../../components/Text/TextUI";
import Tagline from '../../../components/Text/Tagline';
import Colors from '../../../constants/Colors'
import Image from 'react-native-scalable-image'
import Axios from "axios";
import { API_URL } from "../../../constants/API";
import PostCard from "./PostCard";
import { Icon } from "native-base";


const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({});

const SearchBar = (props) => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 18,
          backgroundColor: "rgba(142, 142, 147, 0.12);",
          flex: 1,
        }}
      >
        <Icon
          style={{ fontSize: 24, color: "white", marginLeft: 15 }}
          type="Feather"
          name="search"
        />
        <TextInput
          style={{ paddingVertical: 10, marginLeft: 8 }}
          placeholder="Search"
          placeholderTextColor="#4E586E"
        />
      </View>
      <TouchableOpacity
         onPress={() => props.navigation.navigate("CreatePost")}
        style={{
          marginTop: 4,
          borderRadius: 500,
          backgroundColor: Colors.primaryColor,
          height: 44,
          width: 44,
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 15,
        }}
      >
        <Icon
          style={{ fontSize: 42, color: "white" }}
          type="Ionicons"
          name="ios-add"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ({ navigation }) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    Axios.get(`${API_URL}/posts`, {
      params: {
        include: "User",
      },
    })
      .then((res) => {
        console.log(res.data);
        setPostList(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderPosts = ({ item }) => {
    return <PostCard navigation={navigation} data={item} />;
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      }}
    >
      <SafeAreaView />
      <SearchBar navigation={navigation}/>
      <FlatList
        ListHeaderComponent={() => {
          return <H1 bold>Posts</H1>;
        }}
        ListHeaderComponentStyle={{ marginHorizontal: 15 }}
        contentContainerStyle={{ marginTop: 46 }}
        data={postList}
        renderItem={renderPosts}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};