import React, { useContext } from "react";
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
//
import { CartContext } from "../../Context/CartContext";
//
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");

const FruitsCard = ({ food }) => {
  // console.log(food?.numberOfKilos);
  const { currentCartID, addToCart } = useContext(CartContext);
  //
  // const cartItem = cartList[food?.id];
  const isEven = food?.id % 2 == 0;
  const isOdd = food?.id % 2 != 0;
  //
  // console.log(cartList);r

  return (
    <View
      style={[
        styles.card,
        isEven
          ? { flex: 1, height: height * 0.3 }
          : { flex: 2, height: height * 0.4 },
      ]}
    >
      <LinearGradient
        colors={food.gradient}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 10,
          justifyContent: "space-around",
        }}
      >
        <Text style={[styles.foodName, { color: "#fff" }]}>{food.name}</Text>
        <Image
          source={food.image}
          style={{ width: "100%", height: "60%", resizeMode: "contain" }}
        />
        <View style={styles.content}>
          {/* <Text style={styles.foodName}>{food.name}</Text> */}
          <Text style={styles.foodPrice}>GMD {food.pricePerKg}/kg</Text>
          <TouchableOpacity
            style={[styles.add_to_cart_btn]}
            onPress={() => addToCart(food)}
          >
            <LinearGradient
              colors={food.gradient}
              style={{ width: "100%", borderRadius: 5, paddingHorizontal: 10 }}
            >
              <Text style={styles.add_to_cart_text}>Buy</Text>
            </LinearGradient>
          </TouchableOpacity>
          {/* <Text style={styles.foodPrice}>GMD{food.unitPrice}</Text> */}
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    // alignItems: "center",
    borderTopRightRadius: 20,
    margin: 5,
    borderRadius: 10,
    // shadowColor: "#333",
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 13.16,

    // elevation: 10,
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
    paddingLeft: 10,
  },
  foodPrice: {
    fontWeight: "600",
    paddingLeft: 10,
    color: "#fff",
    // color: "#336A6E",
    // fontSize: 1,
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
  content: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  add_to_cart_btn: {
    padding: 3,
    borderRadius: 10,
    padding: 5,
  },
  add_to_cart_text: {
    fontWeight: "700",
    color: "#fff",
  },
});

export default FruitsCard;
