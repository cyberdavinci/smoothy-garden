import React, { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CartContext } from "../../Context/CartContext";
import { AntDesign } from "@expo/vector-icons";

const CartDashBoard = () => {
  //   const [cartCost, setCartCost] = useState(0);

  const { cartList, cartCost } = useContext(CartContext);

  return (
    <View style={{ height: "100%" }}>
      <LinearGradient
        // colors={["rgba(76, 175, 80, 1)", "transparent"]}
        colors={["#4c669f", "#3b5998", "#192f6a"]}
        style={styles.gradientCardBg}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "80%",
            rowGap: 20,
          }}
        >
          {/* user progile */}
          <View style={{ alignItems: "center" }}>
            <AntDesign name="user" size={45} color="#fff" />
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "800" }}>
              Smoothy!
            </Text>
          </View>
          {/* cart cost update */}
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: cartCost > 0 ? "green" : "orangered",
              }}
            >
              GMD {cartCost}
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Pressable
            style={{
              backgroundColor: "#3b5998",
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "#fff",
                paddingVertical: 10,
                paddingHorizontal: 30,
                fontSize: 16,
              }}
            >
              CHECKOUT!
            </Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  gradientCardBg: {
    height: "100%",
  },
});
export default CartDashBoard;
