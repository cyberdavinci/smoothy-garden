import React, { useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
//
import { CartContext } from "../../Context/CartContext";
//
import CartCard from "./CartCard";
const CartList = ({ cartList }) => {
  // const { cartList } = useContext(CartContext);
  return (
    <View>
      {cartList?.length > 0 ? (
        cartList.map((cartItem, index) => (
          <CartCard cartItem={cartItem} key={cartItem?.name} />
        ))
      ) : (
        <View style={{ marginVertical: 10 }}>
          <Text
            style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}
          >
            Your Cart's Empty!
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  gradientCardBg: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 20,
    marginTop: 10,
  },
  txt: {
    color: "#D6D6E5",
    fontSize: 15,
    fontWeight: "600",
  },
});
export default CartList;
