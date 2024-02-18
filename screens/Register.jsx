import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import NameandPhone from "../components/Register/NameandPhone";
import EmailandPassword from "../components/Register/EmailandPassword";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
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
  const submit = () => {
    console.log(newUser);
  };
  return (
    <View style={{ flex: 1, paddingVertical: 10 }}>
      <LinearGradient
        style={styles.innerLayout}
        colors={["#11998E", "#38EF7D"]}
      >
        <Text style={styles.title}>Register</Text>
        {currentStep == "namePhone" ? (
          <NameandPhone setNewUser={setNewUser} toggleStep={toggleStep} />
        ) : (
          <EmailandPassword
            setNewUser={setNewUser}
            toggleStep={toggleStep}
            submit={submit}
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
});
