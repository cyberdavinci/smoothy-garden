import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const CategoryCard = ({ category }) => {
  return (
    <View style={styles.card}>
      <Image source={category.image} style={{ width: 120, height: 120 }} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{category.name}</Text>
        <Text style={styles.amount}>{category.amountAvailable} products</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ECEBE1",
    padding: 10,
    marginLeft: 5,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
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
