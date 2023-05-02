import React from "react";
import { Text, View } from "react-native";

const CartCard = ({ cartItem }) => {
  return (
    <View>
      <Text>{cartItem.name}</Text>
    </View>
  );
};

export default CartCard;
