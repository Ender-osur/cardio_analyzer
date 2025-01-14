import React from "react";
import { View, Text, TextInput, Button, SafeAreaView } from "react-native";
import { useTranslation } from "react-i18next";
import { useColorScheme } from "react-native";

import { styles } from "./SignupPage.style";
import CommonButton from "../../../components/commonButton/CommonButton";
import TextLink from "@/components/textLink/TextLink";

const SignupPage: React.FC = () => {
  const { t } = useTranslation();
  const scheme = useColorScheme();


  const navButtons = () => {
    return (
      <SafeAreaView style={{ width: "50%", gap: 5 }}>
        <TextLink title={t("signup.login")} route="login" />
        <TextLink title={t("login.reset")} route="reset" />
      </SafeAreaView>
    );
  };

  const handleSignup = () => {
    // Handle signup logic here
  };

  return (
    <View style={[styles.container, scheme === "dark" ? {backgroundColor: "#dfffff"}:{backgroundColor: "#004052"}]}>
      <Text style={styles.title}>{t("signup.title")}</Text>
      <TextInput style={styles.input} placeholder={t("signup.email")} />
      <TextInput
        style={styles.input}
        placeholder={t("signup.password")}
        secureTextEntry
      />
      <CommonButton title={t("signup.title")} onPress={handleSignup} />
      {navButtons()}
    </View>
  );
};

export default SignupPage;
