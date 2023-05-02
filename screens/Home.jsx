import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import UserAvatar from "../components/Home/UserAvatar";
import { LinearGradient } from "expo-linear-gradient";
import CategoriesList from "../components/Home/CategoriesList";
import FruitsList from "../components/FruitsList/FruitsList";
const Home = () => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <UserAvatar />
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <LinearGradient
          // colors={["rgba(76, 175, 80, 1)", "transparent"]}
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.gradientCardBg}
        >
          <Image
            source={require("../assets/images/fruitsbasket.png")}
            style={{ width: 100, height: 100 }}
          />
          <View>
            <Text style={styles.txt}>Freshness straight from the ground</Text>
            <Text style={styles.txt}>24/7 ready for orders</Text>
          </View>
        </LinearGradient>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Categories</Text>
        </View>

        <View>
          {/* food categories */}
          <CategoriesList />
          {/* foods */}
          <FruitsList />
        </View>
      </ScrollView>
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
  },
  txt: {
    color: "#D6D6E5",
    fontSize: 15,
    fontWeight: "600",
  },
});

export default Home;
