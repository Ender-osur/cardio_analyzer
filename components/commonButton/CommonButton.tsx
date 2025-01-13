import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@/types/stack";
import { styles } from "./CommonButton.style";

interface CommonButtonProps {
  title: string;
  route: any;
  buttonStyle?: object;
  textStyle?: object;
}

const CommonButton: React.FC<CommonButtonProps> = ({
  title,
  route,
  buttonStyle,
  textStyle,
}) => {
  const navigation = useNavigation<NavigationProp>();

  const handleNavigate = () => {
    navigation.navigate(route);
  };

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={handleNavigate}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
