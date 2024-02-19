import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
const { height } = Dimensions.get("screen");
const Order = () => {
  return (
    <View
      style={{
        // backgroundColor: "green",
        // flex: 1,
        height: height * 0.8,
        // marginTop: 50,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>
        Orders
      </Text>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
