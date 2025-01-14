import { Text, SafeAreaView } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";
import { useColorScheme } from "react-native";

import LogoWithBorder from "../../../components/logos/LogoWithBorder";
import { styles } from "./LoginPage.style";
import CommonButton from "../../../components/commonButton/CommonButton";
import TextLink from "@/components/textLink/TextLink";

const LoginPage = () => {
  const scheme = useColorScheme();
  const { t } = useTranslation();

  const navButtons = () => {
    return (
      <SafeAreaView style={{ width: "50%", gap: 5 }}>
        <TextLink title={t("login.signup")} route="signup" />
        <TextLink title={t("login.reset")} route="reset" />
      </SafeAreaView>
    );
  };
  console.log("scheme: ", scheme);

  return (
    <SafeAreaView
      style={[
        styles.container,
        scheme === "dark"
          ? { backgroundColor: "#dfffff" }
          : { backgroundColor: "#004052" },
      ]}
    >
      <SafeAreaView style={styles.header}>
        <LogoWithBorder />
        <Text style={styles.textLogo}>
          {t("login.title")} {scheme}{" "}
        </Text>
      </SafeAreaView>
      <SafeAreaView style={styles.main}>
        <CommonButton title={t("login.title")} />
      </SafeAreaView>
      {navButtons()}
    </SafeAreaView>
  );
};

export default LoginPage;
