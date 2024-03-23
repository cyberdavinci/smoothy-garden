// import { AntDesign } from "@expo/vector-icons";
// import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { UserContext } from "../../Context/UserContext";

const Profile = ({ navigation }) => {
  const { user, logoutUser } = useContext(UserContext);
  const [selectedOption, setSelectedOption] = useState("Profile");
  const options = ["Profile", "Orders", "Delivery"];
  const { width: windowWidth, height } = useWindowDimensions();
  const segmentedControlWidth = windowWidth - 20;
  const segmentedItemWidth = segmentedControlWidth / 3;
  const activeItemBackgroundWidth = segmentedItemWidth - 10;

  // console.log(user);
  return (
    <View
      style={{
        paddingHorizontal: 10,
        // flex: 1,
      }}
    >
      <View
        style={{
          alignItems: "center",
          backgroundColor: "#fff",
          height: height * 0.25,
          position: "relative",
        }}
      >
        <View
          style={{
            position: "absolute",
            right: "26%",
            bottom: 0,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign name="camerao" size={40} color="#333" />
        </View>

        <Image
          source={require("../../assets/profileimg.png")}
          style={styles.profileImg}
        />
      </View>
      {/*  */}
      <ScrollView
        contentContainerStyle={{
          height: height * 0.55,
          justifyContent: "space-between",
        }}
        showsVerticalScrollIndicator={false}
        // scrollEnabled
      >
        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              marginBottom: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", color: "green" }}>Edit</Text>
            <AntDesign name="edit" size={28} color="green" />
          </View>
          <View style={styles.profileItem}>
            <Text style={styles.itemText}>Name</Text>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333" }}>
              {user?.fullName}
            </Text>
          </View>

          <View style={styles.profileItem}>
            <Text style={styles.itemText}>Phone</Text>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333" }}>
              {user?.phone}
            </Text>
          </View>

          <View style={styles.profileItem}>
            <Text style={styles.itemText}>Email</Text>
            <Text style={{ fontSize: 14, fontWeight: "bold", color: "#333" }}>
              {user?.email}
            </Text>
          </View>
        </View>
        <Pressable style={styles.btn} onPress={() => logoutUser()}>
          <Text style={styles.btnText}>Log Out!</Text>
        </Pressable>
      </ScrollView>

      {/* </ScrollView> */}
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
    height: "100%",
    borderRadius: 30,
    resizeMode: "contain",
  },
  profileItem: {
    backgroundColor: "#ddd",
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 12,
  },
  itemText: {},
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
    fontSize: 14,
    fontWeight: "bold",
  },
});
export default Profile;
