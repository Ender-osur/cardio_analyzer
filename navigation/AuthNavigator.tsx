import { enableScreens } from "react-native-screens";
import { createStackNavigator } from "@react-navigation/stack";
import AuthPage from "../pages/auth/auth/AuthPage";
import HelpPage from "../pages/help/HelpPage";
import ResetPasswordPage from "../pages/auth/resetPassword/ResetPasswordPage";

enableScreens();

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="login" component={AuthPage} />
      <Stack.Screen name="help" component={HelpPage} />
      <Stack.Screen name="reset" component={ResetPasswordPage} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
