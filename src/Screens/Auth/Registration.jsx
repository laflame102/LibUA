import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Fontisto, FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  // const handleLogin = () => {
  //   console.log("Email: ", email);
  //   console.log("Password: ", password);
  //   console.log("First Name: ", firstName);
  //   console.log("Last Name: ", lastName);
  // };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={require("../images/signupbckg.jpg")}
        style={styles.backgroundImage}
      >
        <Text style={styles.title}>Реєстрація</Text>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Fontisto name="email" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Пошта"
              value={email}
              onChangeText={setEmail}
              placeholderTextColor="#49454F"
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome5 name="user" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Логін"
              value={login}
              onChangeText={setLogin}
              placeholderTextColor="#49454F"
            />
          </View>
          <View style={styles.inputContainer}>
            <SimpleLineIcons name="lock" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholderTextColor="#49454F"
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.showPasswordButton}
            >
              <Text>{showPassword ? "Сховати" : "Показати"}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>
            <SimpleLineIcons name="lock" size={24} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Підтвердьте пароль"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              placeholderTextColor="#49454F"
            />
          </View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.singIn}>
              Вже є аккаунт? <Text style={styles.signInModif}>Увійти</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontFamily: "Montserrat-Regular",
    fontSize: 32,
    marginBottom: 36,
    textAlign: "center",
  },
  form: {
    marginHorizontal: 20,
    gap: 12,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 18,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#5D0DA7",
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 12,
  },
  buttonContainer: {
    backgroundColor: "#5D0DA7",
    marginTop: 36,
    borderRadius: 15,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
    textAlign: "center",
    padding: 12,
  },
  singIn: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    textAlign: "center",
    color: "#1E1E1E",
  },
  signInModif: {
    color: "#5D0DA7",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#5D0DA7",
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  showPasswordButton: {
    marginLeft: "auto",
  },
});

export default Registration;
