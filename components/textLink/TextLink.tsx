import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "react-native";

import { NavigationProp, AuthStackParamList } from "../../types/stack";

type TextLinkProps = {
  title: string,
  route: keyof AuthStackParamList,
  buttonStyle?: object,
  textStyle?: object
}

const TextLink: React.FC<TextLinkProps> = ({
  title,
  route,
  buttonStyle,
  textStyle,
})  => {
  const navigation = useNavigation<NavigationProp>();
  const scheme = useColorScheme();

  const handleNavigate = () => {
    navigation.navigate(route); 
  };

  return (
    <Pressable onPress={handleNavigate} style={[styles.button, buttonStyle]} >
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

  }
});

export default TextLink;
