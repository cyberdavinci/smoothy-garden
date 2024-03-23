import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import UserAvatar from "../components/Home/UserAvatar";
import { LinearGradient } from "expo-linear-gradient";
import CategoriesList from "../components/Home/CategoriesList";
import FruitsList from "../components/FruitsList/FruitsList";
import HeroCard from "../components/Home/HeroCard";
const { width, height } = Dimensions.get("window");
const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <UserAvatar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
          backgroundColor: "#fff",
          // height: "100%",
        }}
        nestedScrollEnabled
      >
        {/* <HeroCard /> */}

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
            Categories
          </Text>
        </View>

        <View style={{ paddingHorizontal: 5 }}>
          {/* food categories */}
          <CategoriesList />
          {/* foods */}
        </View>
        <View>
          <FruitsList />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
