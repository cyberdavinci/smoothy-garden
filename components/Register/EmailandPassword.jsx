import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("screen");
const EmailandPassword = ({ toggleStep, setNewUser, navigation }) => {
  return (
    <View
      style={{
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "50%",
        paddingHorizontal: 15,
        gap: 15,
      }}
    >
      <TouchableOpacity style={styles.backBtn} onPress={() => toggleStep()}>
        <Text style={styles.nextBtnText}>Back</Text>
      </TouchableOpacity>
      <Image
        source={require("../../assets/nobg-icon.png")}
        style={styles.logo}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor={"#fff"}
        inputMode="email"
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        placeholderTextColor={"#fff"}
        inputMode="text"
      />

      <TouchableOpacity style={styles.submitBtn}>
        <Text
          style={styles.submitBtnText}
          onPress={() => navigation.navigate("main")}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailandPassword;

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "40%",
    resizeMode: "contain",
  },

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
    top: 20,
    left: 20,
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
