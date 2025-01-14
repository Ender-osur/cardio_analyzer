import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "react-native";

import { NavigationProp, AuthStackParamList } from "../../types/stack";
import { styles } from "./CommonButton.style";

interface CommonButtonProps {
  title: string;
  route?: keyof AuthStackParamList;
  buttonStyle?: object;
  textStyle?: object;
  onPress?: () => void;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  title,
  route,
  buttonStyle,
  textStyle,
  onPress,
}) => {
  const navigation = useNavigation<NavigationProp>();
  const scheme = useColorScheme();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (route) {
      navigation.navigate(route);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={handlePress}
    >
      <Text
        style={[
          styles.buttonText,
          textStyle,
          scheme === "dark" ? { color: "#fff" } : { color: "#000" },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
