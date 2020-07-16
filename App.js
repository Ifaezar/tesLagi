import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Authstack from './src/navigator/AuthStack'
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/redux/reducers";
import ReduxThunk from "redux-thunk";
import RootNavigator from "./src/navigator/RootNavigator";



const Stack = createStackNavigator()

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default function App() {

  

  let [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Black.otf"),
    "AvenirNextLTPro-Bold": require("./assets/fonts/AvenirNextLTPro-Bold.otf")
  });

 

  if (!fontsLoaded) {
    return <AppLoading />;
  }



  return (
    <Provider store={store}>
      <RootNavigator/>
    </Provider>
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
