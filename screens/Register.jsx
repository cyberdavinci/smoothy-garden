import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import NameandPhone from "../components/Register/NameandPhone";
import EmailandPassword from "../components/Register/EmailandPassword";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { SlideInLeft, SlideInRight } from "react-native-reanimated";
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
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ flex: 1, paddingBottom: insets.bottom, paddingTop: insets.top }}
    >
      <LinearGradient
        style={[
          styles.innerLayout,
          { paddingBottom: insets.bottom, paddingTop: insets.top },
        ]}
        colors={["#11998E", "#38EF7D"]}
      >
        <TouchableOpacity
          style={{
            position: "relative",
            backgroundColor: "#fff",
            width: "30%",
            paddingVertical: 10,
            paddingLeft: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 7,
          }}
          onPress={() => {
            navigation?.navigate("login");
          }}
        >
          <Text style={{ fontWeight: "700", color: "#11998E" }}>Sign in</Text>
        </TouchableOpacity>
        <KeyboardAvoidingView behavior="height">
          <Animated.View
            // entering={SlideInRight}
            // exiting={SlideInLeft}
            style={{
              // backgroundColor: "#000",
              height: "50%",
              marginTop: height * 0.1,
              justifyContent: "center",
            }}
          >
            <Text style={styles.registerTitle}>Sign Up</Text>
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
          </Animated.View>
        </KeyboardAvoidingView>
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

    // position: "relative",
    // gap: height * 0.1,
  },
  logo: {
    width: "50%",
    height: "30%",
    resizeMode: "cover",
    alignSelf: "center",
    // position: "absolute",
  },
  // title: {
  //   fontSize: 18,
  //   textAlign: "center",
  //   color: "#fff",
  //   fontWeight: "bold",
  //   position: "absolute",
  //   backgroundColor: "#38EF7D",
  //   paddingHorizontal: 30,
  //   top: 10,
  //   paddingVertical: 8,
  //   borderTopRightRadius: 20,
  //   borderBottomRightRadius: 20,
  // },
  registerTitle: {
    marginVertical: 10,
    marginBottom: 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
    borderBottomWidth: 3,
    borderBottomColor: "#38EF7D",
    alignSelf: "center",
    paddingVertical: 5,
    width: "40%",
  },
});
