import React, { useState } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./PasswordInput.style";

interface PasswordInputProps extends TextInputProps {
  placeholder?: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        {...props}
      />
      <TouchableOpacity
        onPress={() => setShowPassword((prev) => !prev)}
        style={styles.eyeIcon}
      >
        <Ionicons
          name={showPassword ? "eye-off" : "eye"}
          size={24}
          color="gray"
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
