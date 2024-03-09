import React, { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
// import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { UserContext } from "../../Context/UserContext";

const UserAvatar = () => {
  const { user } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <LinearGradient
        // colors={["rgba(76, 175, 80, 1)", "transparent"]}
        colors={["#11998E", "#38EF7D"]}
        style={styles.gradientCardBg}
      >
        <View>
          {/* <FontAwesome5 name="user-circle" size={34} color="#fff" /> */}
          <Image
            source={require("../../assets/profileimg.png")}
            style={{ width: 50, height: 50 }}
          />
          <Text style={styles.title}>
            Howdy, {user?.fullName?.split(" ")[0]}
          </Text>
        </View>
        {/* bell */}
        <View>
          <AntDesign name="bells" size={35} color="#fff" />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "#fff",
    // width: "95%",
    // paddingTop: 10,
    // paddingVertical: 10,
  },
  gradientCardBg: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    height: "100%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});
export default UserAvatar;
