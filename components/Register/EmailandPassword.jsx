import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
const { width, height } = Dimensions.get("screen");
const EmailandPassword = ({ toggleStep, setNewUser, navigation, newUser }) => {
  const { submit } = useContext(UserContext);
  return (
    <View
      style={{
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
        height: "36%",
        paddingHorizontal: 15,
        gap: 15,
      }}
    >
      <TouchableOpacity style={styles.backBtn} onPress={() => toggleStep()}>
        <Text style={styles.nextBtnText}>Back</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor={"#fff"}
        inputMode="email"
        onChangeText={(value) =>
          setNewUser((prev) => ({ ...prev, email: value }))
        }
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
        placeholderTextColor={"#fff"}
        inputMode="text"
        onChangeText={(value) =>
          setNewUser((prev) => ({ ...prev, password: value }))
        }
      />

      <TouchableOpacity style={styles.submitBtn}>
        <Text
          style={styles.submitBtnText}
          onPress={() => {
            newUser?.email !== "" && newUser?.password !== ""
              ? submit(newUser)
              : null;
            // navigation.navigate("main");
          }}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailandPassword;

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
