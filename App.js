import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import Registration from "./src/Screens/Auth/Registration";
import LogIn from "./src/Screens/Auth/Login";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return;
  }

  return (
    <View style={styles.container}>
      <LogIn />
      {/* <Registration /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
