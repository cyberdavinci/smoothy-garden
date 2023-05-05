import React, { useContext } from "react";
import { Text, View, ScrollView } from "react-native";
import { FOODS } from "../../data/products";
import FruitsCard from "./FruitsCard";
import { CartContext } from "../../Context/CartContext";

const FruitsList = () => {
  const { addToCart, cartList, incrementCartCost, incrementNumberOfKilos } =
    useContext(CartContext);
  const handleAddToCart = (item) => {
    addToCart(item);
  };
  return (
    <View>
      <View style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Produce</Text>
      </View>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          rowGap: 30,
          marginBottom: 60,
          // height: "auto",
        }}
      >
        {FOODS.map((food, index) => (
          <>
            <FruitsCard
              food={food}
              key={food.name}
              addToCart={addToCart}
              handleAddToCart={handleAddToCart}
              incrementCartCost={incrementCartCost}
              incrementNumberOfKilos={incrementNumberOfKilos}
            />
          </>
        ))}
      </View>
    </View>
  );
};

export default FruitsList;
