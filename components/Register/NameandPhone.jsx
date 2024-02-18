import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
const { width, height } = Dimensions.get("screen");
const NameandPhone = ({ toggleStep, setNewUser }) => {
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
      <Image
        source={require("../../assets/nobg-icon.png")}
        style={styles.logo}
      />

      <TextInput
        placeholder="Full name"
        style={styles.input}
        placeholderTextColor={"#fff"}
        inputMode="text"
        cursorColor={"#4c566a"}
      />
      <TextInput
        placeholder="Phone number"
        style={styles.input}
        placeholderTextColor={"#fff"}
        inputMode="tel"
      />

      <TouchableOpacity style={styles.nextBtn} onPress={() => toggleStep()}>
        <Text style={styles.nextBtnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NameandPhone;

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
  nextBtn: {
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: 15,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  nextBtnText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#333",
    textAlign: "center",
  },
});
