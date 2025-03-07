import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useColorScheme } from "react-native";
import type { DrawerNavigationProps } from '@/types/navigation';

import { styles } from "./HelpPage.style";
import CommonButton from "../../components/commonButton/CommonButton";

interface HelpPageProps {
  navigation: DrawerNavigationProps;
}

const HelpPage: React.FC<HelpPageProps> = ({ navigation }) => {
  const scheme = useColorScheme();

  const handleSubmit = () => {};

  return (
    <View style={[styles.container, scheme === "dark" ? {backgroundColor: "#dfffff"}:{backgroundColor: "#004052"}] }>
      <Text style={styles.title}>Help Section</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe your issue"
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />
      <CommonButton title="Back to Login" route={"login"} />
    </View>
  );
};

export default HelpPage;
