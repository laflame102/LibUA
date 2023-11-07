import { ImageBackground, View, StyleSheet, Text } from "react-native";

const image = {
  uri: "https://docs.expo.dev/static/images/tutorial/splash.png",
};

const Registration = () => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={require("../images/signupbckg.jpg")}
        style={styles.image}
        resizeMode="cover"
      ></ImageBackground> */}
      <ImageBackground
        source={require("../images/signupbckg.jpg")}
        style={styles.image}
      >
        <Text>Elements</Text>
        <Text>in Front of</Text>
        <Text>Background</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
});

export default Registration;
