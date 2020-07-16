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
import * as ImagePicker from 'expo-image-picker'
const { width } = Dimensions.get("screen");
import Button from '../../../components/Button/Button'
import { useSelector } from "react-redux";
import Axios from "axios";
import { API_URL } from "../../../constants/API";

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
    const [selectedImage, setSelectedImage] = useState(null)
    const userSelector = useSelector((state => state.user))

    const openImagePicker = () => {
        ImagePicker.launchImageLibraryAsync()
            .then((result) => {
                const localUri = result.uri;
                const filename = localUri.split("/").pop();
                // Infer the type of the image
                const match = /\.(\w+)$/.exec(filename);
                const types = match ? `image/${match[1]}` : `image`;
                setSelectedImage({ uri: localUri, name: filename, type: types });

               
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const renderImage = () => {
        if (selectedImage) {
            return (
                <Image source={{ uri: selectedImage.uri }} width={120} />
            )
        }

        return <View style={{ borderColor: "gray", borderWidth: 1, height: 120, width: 120 }} />
    }

    const uploadHandler = () => {
        let formData = new FormData()
        formData.append("photo", selectedImage)
        formData.append("data", JSON.stringify({
            caption: "ilham",
            UserId: userSelector.id,
            location: "home"
        }))
        Axios.post(`${API_URL}/posts`, formData)
            .then((res) => {
                console.log(res.data)
            })
        console.log(userSelector.id)
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: Colors.backgroundColor,
            }}
        >
            <SafeAreaView />
            <Header {...props} title="username" />
            {renderImage()}
            <Button containerStyle={{ marginTop: 20 }} onPress={openImagePicker}>Pick Image</Button>
            <Button containerStyle={{ marginTop: 12 }} onPress={uploadHandler} type="secondary">
                Upload Post
            </Button>
        </View>
    );
};