import { StyleSheet, View } from "react-native";
import Registration from "./src/Screens/Registration";

export default function App() {
  return (
    <View style={styles.container}>
      <Registration />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
