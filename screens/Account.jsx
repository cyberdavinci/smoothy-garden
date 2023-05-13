import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const Account = () => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 30,
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <View>
        <View style={{ alignItems: "center" }}>
          <AntDesign size={45} name="user" color={"#000"} />
          <Text>Smoothy</Text>
        </View>

        <View>
          <View>
            <Text>Your Orders</Text>
          </View>
          <View>
            <Text>Delivery Status</Text>
          </View>
        </View>
      </View>

      <View style={{ width: "100%", marginTop: 10 }}>
        <LinearGradient
          colors={["#EA2027", "#EA2027", "#EE5A24"]}
          style={styles.gradienWrapper}
        >
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Log Out!</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  gradienWrapper: {
    width: "100%",
    height: 60,

    borderRadius: 14,
  },
  btn: {
    // backgroundColor: "#000",
    justifyContent: "center",
    height: 60,
    // borderRadius: 0,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default Account;
