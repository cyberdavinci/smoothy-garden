import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
const { height } = Dimensions.get("screen");
const Delivery = () => {
  return (
    <View
      style={{
        // backgroundColor: "green",
        // flex: 1,
        height: height * 0.8,
        // marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
        // width: "100%",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>
        Delivery
      </Text>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({});
