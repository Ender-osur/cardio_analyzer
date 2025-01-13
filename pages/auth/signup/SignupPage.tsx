import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useTranslation } from "react-i18next";
import { styles } from "./SignupPage.style";
import CommonButton from "@/components/commonButton/commonButton";

const SignupPage: React.FC = () => {
  const { t } = useTranslation();

  const handleSignup = () => {
    // Handle signup logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("signup.title")}</Text>
      <TextInput style={styles.input} placeholder={t("signup.email")} />
      <TextInput
        style={styles.input}
        placeholder={t("signup.password")}
        secureTextEntry
      />
      <Button title={t("signup.submit")} onPress={handleSignup} />
      <CommonButton title={t("signup.back")} route={"login"} />
      <CommonButton title={t("signup.reset")} route={"reset"} />
    </View>
  );
};

export default SignupPage;
