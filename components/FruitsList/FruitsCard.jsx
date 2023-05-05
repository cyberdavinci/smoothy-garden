import React, { useContext } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
//
import { CartContext } from "../../Context/CartContext";
//
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");
const FruitsCard = ({
  food,
  handleAddToCart,
  incrementCartCost,
  incrementNumberOfKilos,
}) => {
  //
  const { cartList, currentCartID } = useContext(CartContext);
  //
  const cartItem = cartList[food?.id];

  //
  return (
    <View style={styles.card}>
      <View
        style={{
          backgroundColor: "#ECEBE1",
          width: "100%",
          marginBottom: 10,
          padding: 10,
          borderTopRightRadius: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 10,
            alignItems: "center",
            // width: "100%",
          }}
        >
          <Image source={food.image} style={{ width: 150, height: 120 }} />
        </View>
      </View>
      <View style={styles.textsWrapper}>
        <Text style={styles.foodName}>{food.name}</Text>
        {/* Food prices */}
        <View style={styles.priceWrapper}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.foodPrice}>D{food.pricePerKg}</Text>
            <Text>/</Text>
            <Text>kg</Text>
          </View>
          <View style={{ flexDirection: "row", columnGap: 10 }}>
            <Text>Unit Price</Text>
            <Text style={styles.foodPrice}>
              {food.unitPrice !== "N/A" ? `D${food.unitPrice}` : "-"}
            </Text>
          </View>
        </View>
      </View>
      {/* add to cart button */}
      <View style={{ width: "100%" }}>
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.gradienWrapper}
        >
          <Pressable
            style={styles.btn}
            onPress={() => {
              handleAddToCart(food);
              incrementCartCost(food);
              // incrementNumberOfKilos(food);
            }}
          >
            <Text style={styles.btnText}>Add to Cart</Text>
          </Pressable>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ECEBE1",

    // marginLeft: 10,
    width: width * 0.45,
    height: 250,
    justifyContent: "space-evenly",
    alignItems: "center",
    // borderRadius: 10,
  },
  biggerCard: {
    // width: "100%",
    backgroundColor: "#ECEBE1",
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
  },
  textsWrapper: {
    // backgroundColor: "#000",
    // justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  priceWrapper: {
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%",
  },
  foodName: {
    fontSize: 16,
    fontWeight: "900",
    paddingBottom: 10,
  },
  foodPrice: {
    fontWeight: "500",
    color: "#336A6E",
    fontSize: 16,
  },
  gradienWrapper: {
    width: "100%",
    height: 40,

    borderBottomLeftRadius: 20,
  },
  btn: {
    // backgroundColor: "#000",
    justifyContent: "center",
    borderBottomLeftRadius: 20,
    height: 40,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default FruitsCard;
