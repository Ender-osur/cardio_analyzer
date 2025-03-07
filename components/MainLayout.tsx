import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useNavigation, useNavigationState, DrawerActions } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const navigation = useNavigation();
  const isDrawerActive = useNavigationState((state) => 
    state?.type === "drawer"
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        {/* Mostrar botón de menú si el Drawer está activo */}
        <Text style={styles.title}>Mi Aplicación</Text>
        {isDrawerActive && (
          <Ionicons
            name="menu"
            size={28}
            color="black"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        )}
      </View>
      <View style={styles.content}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  header: {
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default MainLayout;
