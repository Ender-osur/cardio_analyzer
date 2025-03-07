import React from "react";
import { Text, StyleSheet, Pressable, ViewStyle, StyleProp, TextStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "react-native";


import { NavigationProp, AuthStackParamList } from "../../types/stack";
import { handleLogin } from "@/services/authService";

type TextLinkProps = {
  children?: React.ReactNode
  title: string,
  route?: keyof AuthStackParamList,
  buttonStyle?: StyleProp<ViewStyle>,
  textStyle?: StyleProp<TextStyle>,
  onPress?: () => void,
}

const TextLink: React.FC<TextLinkProps> = ({
  children,
  title,
  route,
  buttonStyle,
  textStyle,
  onPress,
})  => {
  const navigation = useNavigation<NavigationProp>();
  const scheme = useColorScheme();
  const handleNavigate = () => {
    if (route)
    navigation.navigate(route); 
  };



  return (
    <Pressable onPress={onPress ? onPress: handleNavigate} style={[styles.button, buttonStyle]} >
      {children}
      <Text style={[styles.textLink, textStyle, scheme === 'dark' ? {color: '#000'} : {color: '#fff'}]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textLink: {
    color: "blue",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  }
});

export default TextLink;
