import React, { useContext } from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const { width, height } = Dimensions.get("window");
import { CartContext } from "../../Context/CartContext";
import { FOODS } from "../../data/products";
const CartCard = ({ cartItem }) => {
  const { incrementNumberOfKilos, decrementNumberOfKilos } =
    useContext(CartContext);
  // console.log(cartItem);
  // console.log
  // const incrementNumberOfKilos = (cartItem) => {
  //   cartItem.numberOfKilos += 1;
  // };
  // console.log(cartItem);
  return (
    <View>
      <View style={styles.card}>
        <View
          style={{
            backgroundColor: "#ECEBE1",
            // width: "100%",
            // marginBottom: 10,
            padding: 10,
            borderTopRightRadius: 20,
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 10,
              alignItems: "center",
              paddingBottom: 10,
              // width: "100%",
            }}
          >
            <Image
              source={cartItem?.image}
              style={{ width: 170, height: 120 }}
            />
          </View>
          <View style={{}}>
            <Text
              style={{
                fontSize: 17,
                paddingTop: 15,
                fontWeight: "600",
                color: "green",
              }}
            >
              Number of Kilos {cartItem?.numberOfKilos}
            </Text>
          </View>
        </View>
        <View style={styles.textsWrapper}>
          <Text style={styles.foodName}>{cartItem?.name}</Text>
          {/* Food prices */}
          <View style={styles.priceWrapper}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.foodPrice}>D{cartItem?.pricePerKg}</Text>
              <Text>/</Text>
              <Text>kg</Text>
            </View>
            <View style={{ flexDirection: "row", columnGap: 10 }}>
              <Text>Unit Price</Text>
              <Text style={styles.foodPrice}>
                {cartItem?.unitPrice !== "N/A"
                  ? `D${cartItem?.unitPrice}`
                  : "-"}
              </Text>
            </View>
          </View>
        </View>
        {/* add to cart button */}
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around",
            height: "80%",
          }}
        >
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.gradienWrapper}
          >
            <Pressable
              style={styles.btn}
              onPress={() => {
                // cartItem.numberOfKilos += 1;
                incrementNumberOfKilos(cartItem);
              }}
            >
              <Text style={styles.btnText}>+</Text>
            </Pressable>
          </LinearGradient>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.gradienWrapper}
          >
            <Pressable
              style={styles.btn}
              onPress={() => {
                decrementNumberOfKilos(cartItem);
              }}
            >
              <Text style={styles.btnText}>-</Text>
            </Pressable>
          </LinearGradient>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ECEBE1",

    marginTop: 30,
    width: "100%",
    height: 250,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
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
    height: 40,
    width: 40,
    borderRadius: 10,
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
export default CartCard;
