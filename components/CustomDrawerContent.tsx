import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import { RootState } from "../redux/store";

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.headerContainer}>
        <Text style={styles.userName}>
          {user.name || "Usuario"}
        </Text>
        <Text style={styles.userEmail}>
          {user.email || "email@example.com"}
        </Text>
      </View>

      <DrawerItemList {...props} />

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => dispatch(logout())}
      >
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#000",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ddd",
    marginBottom: 5,
  },
  userEmail: {
    color: "#ccc",
    fontSize: 14,
  },
  logoutButton: {
    padding: 15,
    margin: 20,
    backgroundColor: "#d9534f",
    borderRadius: 5,
    alignItems: "center",
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CustomDrawerContent;
