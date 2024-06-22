import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
const { width, height } = Dimensions.get("screen");
const LoginForm = ({ toggleStep, setNewUser, navigation, newUser }) => {
  const { login } = useContext(UserContext);
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
    emailErrorMessage: "",
    passwordErrorMessage: "",
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError((prev) => ({
        ...prev,
        emailError: false,
        emailErrorMessage: "",
        passwordError: false,
        passwordErrorMessage: "",
      }));
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [error?.emailError]);
  const submit = (user) => {
    if (user?.password == "" && user?.email == "") {
      setError((prev) => ({
        ...prev,
        emailError: true,
        emailErrorMessage: "Invalid email address",
        passwordError: true,
        passwordErrorMessage: "Invalid user password",
      }));
      return true;
    }
    if (user?.email == "") {
      setError((prev) => ({
        ...prev,
        emailError: true,
        emailErrorMessage: "Invalid email",
      }));
      return true;
    }
    if (user?.password == "") {
      setError((prev) => ({
        ...prev,
        passwordError: true,
        passwordErrorMessage: "Invalid password",
      }));

      return true;
    }

    login(user);
  };

  return (
    <View
      style={{
        // flex: 1,
        // alignItems: "center",
        justifyContent: "center",
        // height: "36%",
        paddingHorizontal: 15,
        gap: 15,
      }}
    >
      <TextInput
        placeholder="Email"
        style={[
          styles.input,
          error?.emailError
            ? { borderColor: "#ed333b", color: "#ed333b" }
            : null,
        ]}
        placeholderTextColor={error?.emailError ? "#ed333b" : "#fff"}
        inputMode="email"
        onChangeText={(value) => setUser((prev) => ({ ...prev, email: value }))}
      />

      <Animated.Text
        entering={FadeInUp}
        exiting={FadeInDown}
        style={{
          color: "#ed333b",
          fontSize: 15,
          fontWeight: "300",
          // marginVertical: 2,
        }}
      >
        {error?.emailErrorMessage}
      </Animated.Text>
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={[
          styles.input,
          error?.passwordError
            ? { borderColor: "#ed333b", color: "#ed333b" }
            : null,
        ]}
        placeholderTextColor={error?.passwordError ? "#ed333b" : "#fff"}
        inputMode="text"
        onChangeText={(value) =>
          setUser((prev) => ({ ...prev, password: value }))
        }
      />
      <Animated.Text
        entering={FadeInUp}
        exiting={FadeInDown}
        style={{
          color: "#ed333b",
          fontSize: 15,
          fontWeight: "300",
          // marginVertical: 2,
        }}
      >
        {error?.passwordErrorMessage}
      </Animated.Text>

      <TouchableOpacity style={styles.submitBtn}>
        <Text
          style={styles.submitBtnText}
          onPress={() => {
            submit(user);
            // navigation.navigate("main");
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  input: {
    borderWidth: 3,
    borderColor: "#fff",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    fontWeight: "900",
    fontSize: 17,
    color: "#fff",
  },
  submitBtn: {
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: 15,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  submitBtnText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
  },
  backBtn: {
    position: "absolute",
    top: -height * 0.2,
    left: 20,
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
