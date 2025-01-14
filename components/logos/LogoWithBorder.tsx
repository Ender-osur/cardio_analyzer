import { Image, View, StyleSheet } from "react-native";

const LogoWithBorder = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/icon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 5,
    borderColor: "#54d9bf",
    borderRadius: 100,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: 190,
    aspectRatio: 1
  },
  logo: {
    width: 160,
    height: 150,
    borderRadius: 50,
    alignSelf: "center",
    top: 10
  },
});

export default LogoWithBorder;