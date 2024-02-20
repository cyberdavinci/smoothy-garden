import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  Image,
} from "react-native";
import NameandPhone from "../components/Register/NameandPhone";
import EmailandPassword from "../components/Register/EmailandPassword";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get("screen");
const Register = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState("namePhone");
  const [newUser, setNewUser] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
  });
  const toggleStep = () => {
    currentStep == "namePhone"
      ? setCurrentStep("emailPassword")
      : setCurrentStep("namePhone");
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={styles.innerLayout}
        colors={["#11998E", "#38EF7D"]}
      >
        <Image
          source={require("../assets/nobg-icon.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Register</Text>
        {currentStep == "namePhone" ? (
          <NameandPhone
            setNewUser={setNewUser}
            toggleStep={toggleStep}
            newUser={newUser}
          />
        ) : (
          <EmailandPassword
            setNewUser={setNewUser}
            toggleStep={toggleStep}
            // submit={submit}
            newUser={newUser}
            navigation={navigation}
          />
        )}
        {/* <NameandPhone newUser={newUser} setNewUser={setNewUser} /> */}
        {/* <EmailandPassword newUser={newUser} setNewUser={setNewUser} /> */}
      </LinearGradient>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  innerLayout: {
    width: width,
    height: height,
  },
  logo: {
    width: "50%",
    height: "20%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
});
