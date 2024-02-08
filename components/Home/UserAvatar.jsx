import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const UserAvatar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Howdy, smoothy?</Text>
      </View>
      <View>
        <FontAwesome5 name="user-circle" size={34} color="black" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingTop: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default UserAvatar;
