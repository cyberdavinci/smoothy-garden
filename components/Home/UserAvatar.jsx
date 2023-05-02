import React from "react";
import { View, Text, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const UserAvatar = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingHorizontal: 10,
        paddingTop: 5,
      }}
    >
      <View>
        <Text>Hello Mate!</Text>
      </View>
      <View>
        <FontAwesome5 name="user-circle" size={34} color="black" />
      </View>
    </View>
  );
};

export default UserAvatar;
