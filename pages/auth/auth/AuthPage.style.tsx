import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingTop: 45
  },
  header: {
    alignItems: "center",
    marginBottom: 10,
  },
  textLogo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 5,
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    width: '100%',
  },
  navContainer: {
    marginTop: 35,
    alignItems: "center",
    gap: 10,
  },
  navRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
    marginBottom: 10,
  },
  navText: {
    fontSize: 14,
    color: "#ffffff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  inputField: {
    flex: 1,
    height: 50,
    fontSize: 16,
    backgroundColor: "white",
  },

  eyeIcon: {
    padding: 10,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    alignSelf: "flex-start",
    marginLeft: 10,
    top: -10,
  },
  
});
