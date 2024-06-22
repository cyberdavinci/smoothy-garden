import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginForm from "../components/Login/LoginForm";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Animated, { SlideInRight, SlideInLeft } from "react-native-reanimated";
const { width, height } = Dimensions.get("screen");
const Login = ({ navigation }) => {
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
          onPress={() => navigation?.navigate("register")}
        >
          <Text style={{ fontWeight: "700", color: "#11998E" }}>Sign Up</Text>
        </TouchableOpacity>
        <KeyboardAvoidingView behavior="height">
          <Animated.View
            entering={SlideInRight}
            exiting={SlideInLeft}
            style={{
              // backgroundColor: "#000",
              height: "50%",
              marginTop: height * 0.1,
              justifyContent: "center",
            }}
          >
            <Text style={styles.registerTitle}>Sign In</Text>
            <LoginForm navigation={navigation} />
          </Animated.View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </View>
  );
};

export default Login;

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
