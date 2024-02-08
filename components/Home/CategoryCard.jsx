import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, View, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
const CategoryCard = ({ category }) => {
  return (
    <View>
      <LinearGradient style={[styles.card]} colors={category.gradient}>
        <Text style={styles.category_name}>{category.name}</Text>
        <Image
          source={category.image}
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
        />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ECEBE1",
    padding: 10,
    marginLeft: 5,
    width: width * 0.75,

    height: height * 0.3,
    justifyContent: "center",
    // alignItems: "center",

    borderRadius: 20,
  },
  category_name: {
    marginLeft: 10,
    marginTop: 10,
    fontWeight: "900",
    fontSize: 16,
    color: "#fff",
  },

  textContainer: {
    backgroundColor: "#fff",
    width: 150,
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "900",
  },
  amount: {
    fontWeight: "500",
    color: "#336A6E",
  },
});
export default CategoryCard;
