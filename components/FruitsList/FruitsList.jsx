import React, { useContext, useState } from "react";
import { Text, View, ScrollView, Dimensions } from "react-native";
import { FOODS } from "../../data/products";
import FruitsCard from "./FruitsCard";
import { CartContext } from "../../Context/CartContext";
// import { View, Text, StatusBar } from "react-native";
import { FlashList } from "@shopify/flash-list";
// import { View, Text, StatusBar } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
const { height, width } = Dimensions.get("screen");
const FruitsList = () => {
  const { addToCart, cartList } = useContext(CartContext);
  const [foods, setFoods] = useState([...FOODS]);
  // const handleAddToCart = (item) => {
  //   addToCart(item);
  // };
  console.log(foods[0]);
  return (
    <View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
          Produce
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          height: "100%",
          marginBottom: 20,
          // height: "auto",
          // gap: 5,
        }}
      >
        <MasonryFlashList
          data={foods}
          numColumns={2}
          renderItem={({ item }) => (
            <FruitsCard
              food={item}
              // key={item.name}
              addToCart={addToCart}
            />
          )}
          estimatedItemSize={200}
          // style={{ gap: 5 }}
          // contentContainerStyle={{ marginBottom: 30 }}
        />
      </View>
    </View>
  );
};

export default FruitsList;
