import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";

const Profile = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("Profile");
  const options = ["Profile", "Orders", "Delivery"];
  const { width: windowWidth, height } = useWindowDimensions();
  const segmentedControlWidth = windowWidth - 20;
  const segmentedItemWidth = segmentedControlWidth / 3;
  const activeItemBackgroundWidth = segmentedItemWidth - 10;
  return (
    <View
      style={{
        paddingHorizontal: 10,

        height: height * 0.9,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          height: "85%",
          // backgroundColor: "#333",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/profileimg.png")}
            style={styles.profileImg}
          />
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "#333" }}>
            Smoothy
          </Text>

          <View></View>
        </View>

        {/* <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.btnText}>Login</Text>
        </Pressable> */}
        <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.btnText}>Log Out!</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  gradienWrapper: {
    width: "100%",
    height: 60,
    borderRadius: 14,
  },
  profileImg: {
    width: "60%",
    height: "60%",
    borderRadius: 30,
    resizeMode: "contain",
  },

  btn: {
    // backgroundColor: "#000",
    justifyContent: "center",
    height: 60,
    backgroundColor: "#ff3300",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    // borderRadius: 0,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
});
export default Profile;
