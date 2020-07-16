import React, { useState, useEffect } from "react"
import { StyleSheet, View, Text } from "react-native"
import Colors from "../../../constants/Colors"
import { useSelector, useDispatch } from "react-redux"
import TextUI from "../../../components/Text/TextUI"
import Axios from "axios"
import { API_URL } from "../../../constants/API"
import Button from "../../../components/Button/Button"
import AsyncStorage from "@react-native-community/async-storage"


const style = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        paddingHorizontal: 30
    }
})



export default ({ navigation }) => {
    const [postCount, setPostCount] = useState(0)

    const userSelector = useSelector(state => state.user)
    const dispatch = useDispatch()

    const LogOutHandler = () => {
        AsyncStorage.removeItem("userData")
            .then((result) => {
                dispatch({
                    type: "USER_LOGOUT"
                })
                console.log("LOGOUT!")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        Axios.get(`${API_URL}/posts`, {
            params: {
                UserId: userSelector.id
            }
        })
            .then((res) => {
                setPostCount(res.data.result.length)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <View style={{ ...style.container }}>
            <Text>Profile Screen</Text>
            <TextUI size="lg" accent bold>{userSelector.username}</TextUI>
            <TextUI size="lg" accent bold>{userSelector.email}</TextUI>
            <TextUI size="lg" accent bold>{userSelector.fullName}</TextUI>
            <TextUI size="lg" accent bold>{userSelector.bio}</TextUI>
            <TextUI size="lg" accent bold>{postCount}</TextUI>
            <Button onPress={LogOutHandler} type="secondary" size="md">
                Log Out
            </Button>
        </View>
    )
}