import React, { useContext } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { CartContext } from "../../Context/CartContext";
const { height } = Dimensions.get("screen");
const Order = () => {
  const { orders } = useContext(CartContext);

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
      {orders?.length > 0 ? (
        <View></View>
      ) : (
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#333" }}>
          No Orders Here!
        </Text>
      )}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
