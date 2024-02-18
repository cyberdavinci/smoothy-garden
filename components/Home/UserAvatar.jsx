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
        <FontAwesome5 name="user-circle" size={34} color="#fff" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "#fff",
    // width: "95%",
    paddingTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
export default UserAvatar;
