import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./HelpPage.style";
import CommonButton from "@/components/commonButton/commonButton";

const HelpPage: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <View style={styles.container}>
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
