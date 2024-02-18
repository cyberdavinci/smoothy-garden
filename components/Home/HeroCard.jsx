import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import UserAvatar from "./UserAvatar";
const HeroCard = () => {
  return (
    <View style={{ height: "15%" }}>
      <LinearGradient
        // colors={["rgba(76, 175, 80, 1)", "transparent"]}
        colors={["#11998E", "#38EF7D"]}
        style={styles.gradientCardBg}
      >
        <View style={{ width: "100%" }}>
          <UserAvatar />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/fruitsbasket.png")}
            style={{ width: 100, height: 100 }}
          />
          <View>
            <Text style={styles.txt}>Freshness straight from the ground</Text>
            <Text style={styles.txt}>24/7 ready for orders.</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  gradientCardBg: {
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // borderRadius: 20,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    // marginHorizontal: 5,
    height: "100%",
    width: "100%",
    alignSelf: "center",
  },
  txt: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default HeroCard;
