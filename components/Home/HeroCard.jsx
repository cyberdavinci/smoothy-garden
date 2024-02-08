import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const HeroCard = () => {
  return (
    <View>
      <LinearGradient
        // colors={["rgba(76, 175, 80, 1)", "transparent"]}
        colors={["#c7b7d3", "#d3b9b7", "#c3d3b7"]}
        style={styles.gradientCardBg}
      >
        <Image
          source={require("../../assets/images/fruitsbasket.png")}
          style={{ width: 100, height: 100 }}
        />
        <View>
          <Text style={styles.txt}>Freshness straight from the ground</Text>
          <Text style={styles.txt}>24/7 ready for orders</Text>
        </View>
      </LinearGradient>
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
    paddingHorizontal: 10,
    marginHorizontal: 5,
    height: 170,
  },
  txt: {
    color: "#D6D6E5",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default HeroCard;
