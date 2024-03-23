import React, { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { CartContext } from "../../Context/CartContext";
import { AntDesign } from "@expo/vector-icons";
import { FOODS } from "../../data/products";
import { UserContext } from "../../Context/UserContext";
const CartDashBoard = ({ navigation }) => {
  const [cartCostAmount, setCartCost] = useState(0);

  const { cartList, cartCost } = useContext(CartContext);
  const { user } = useContext(UserContext);
  // console.log(cartList);
  // console.log(FOODS[0]);
  // useEffect(() => {
  //   setCartCost(cartCost);
  // }, [cartList]);
  return (
    <View style={{ height: "100%" }}>
      <LinearGradient
        // colors={["rgba(76, 175, 80, 1)", "transparent"]}
        colors={["#11998E", "#38EF7D"]}
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
            <Image
              source={require("../../assets/profileimg.png")}
              style={styles.profileImg}
            />
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "800" }}>
              {user?.fullName?.split(" ")[0]}!
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
              backgroundColor: "#11998E",
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 30,
            }}
            onPress={() => navigation.navigate("checkout")}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              CHECKOUT!
            </Text>
            <AntDesign name="arrowright" size={28} color="#fff" />
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
  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 30,
    resizeMode: "contain",
  },
});
export default CartDashBoard;
