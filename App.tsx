import "react-native-reanimated";
import "react-native-gesture-handler";

import { useEffect } from "react";
import {
  
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";
import { StatusBar, View, Text } from "react-native";
import { Provider } from "react-redux";

import "./services/i18next";
import { store } from "./redux/store";
import AppNavigator from "./navigation/AppNavigator";

SplashScreen.preventAutoHideAsync();

const App = (): React.JSX.Element => {
  const scheme = useColorScheme();
  const [loaded, error] = useFonts({
    "Space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
    Nasa21: require("./assets/fonts/Nasa21.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    } else if (error) {
      console.error("Error loading fonts:", error);
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#004052",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 32 }}>
          Cargando...
        </Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer
        theme={{
          dark: scheme === "dark",
          colors: {
            ...DefaultTheme.colors,
            background: "#004052", 
          },
        }}
      >
        <StatusBar barStyle="default" />
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
