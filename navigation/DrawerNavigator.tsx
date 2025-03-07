import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import HomeStack from "./HomeStack";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import ProfilePage from "@/pages/profile/ProfilePage";
import SettingsPage from "@/pages/settings/SettingsPage";
import HelpPage from "@/pages/help/HelpPage";
import { COLORS } from "@/constants/theme";
import type { RootDrawerParamList } from "@/types/navigation";

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => <CustomDrawerContent navigation={props.navigation as DrawerNavigationProp<any>} {...props} />}
      screenOptions={({ navigation }) => ({
        drawerActiveBackgroundColor: COLORS.secondary,
        drawerLabelStyle: styles.drawerLabel,
        drawerStyle: styles.drawer,
        drawerPosition: "right",
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        headerTintColor: COLORS.white,
        headerTitleAlign: "center",
        keyboardDismissMode: "none",
        headerRight: () => (
          <MenuButton onPress={() => navigation.openDrawer()} />
        ),
      })}
    >
      <Drawer.Screen
        name="homepage"
        component={HomeStack}
        options={{ 
          headerShown: true,
          title: "Inicio",
        }}
      />
      <Drawer.Screen
        name="profile"
        component={ProfilePage}
        options={{ 
          headerShown: true,
          title: "Perfil",
        }}
      />
      <Drawer.Screen
        name="settings"
        component={SettingsPage}
        options={{ 
          headerShown: true,
          title: "Configuración",
        }}
      />
      <Drawer.Screen
        name="Help"
        component={HelpPage}
        options={{ 
          headerShown: true,
          title: "Ayuda",
        }}
      />
    </Drawer.Navigator>
  );
};

const MenuButton: React.FC<{ onPress: () => void }> = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    accessibilityLabel="Abrir menú"
    accessibilityRole="button"
    style={styles.menuButton}
  >
    <Ionicons name="menu" size={24} color={COLORS.white} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: COLORS.background,
    paddingTop: 10,
  },
  drawerLabel: {
    color: "#fff",
    fontSize: 16,
  },
  header: {
    height: 60,
    backgroundColor: COLORS.primary,
    elevation: 4,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 3.84,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },
  menuButton: {
    marginRight: 15,
    padding: 8,
  },
});

export default DrawerNavigator;
