import { enableScreens } from "react-native-screens";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "../pages/home/HomePage";
import ProfilePage from "../pages/profile/ProfilePage";
import SettingsPage from "../pages/settings/SettingsPage";

enableScreens();

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={HomePage} />
      <Stack.Screen name="profile" component={ProfilePage} />
      <Stack.Screen name="settings" component={SettingsPage} />
    </Stack.Navigator>
  );
};

export default HomeStack;
