import React, { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { CartContext } from "../../Context/CartContext";

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
        <Text>CartDashBoard</Text>
        <Text>{cartCost}</Text>
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
