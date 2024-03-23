import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const { height } = Dimensions.get("screen");
const Delivery = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        // backgroundColor: "green",
        // flex: 1,
        height: height,
        marginTop: 50,
        // justifyContent: "center",
        alignItems: "center",
        paddingBottom: insets.bottom + 20,
        // width: "100%",
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold", color: "#333" }}>
        Cyber, you delivery is on it's way
      </Text>
      <Text style={{ marginTop: 10, fontSize: 20, fontWeight: "bold" }}>
        ETA 20 mins
      </Text>

      <View style={{ height: height * 0.4 }}>
        <Image
          source={require("../../assets/gifs/delivery.gif")}
          // resizeMode="contain"
          style={{ resizeMode: "contain", height: "100%" }}
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#ddd",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          width: "70%",
          paddingHorizontal: 10,
          paddingVertical: 20,
          borderRadius: 20,
          marginTop: 30,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#666" }}>
          See Map
        </Text>
        <Feather name="map-pin" size={24} color="green" />
      </TouchableOpacity>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({});
