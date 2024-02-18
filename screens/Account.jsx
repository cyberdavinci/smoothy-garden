import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";

const Account = ({ navigation }) => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 30,
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <View>
        <View
          style={{
            alignItems: "center",
            // backgroundColor: "#000",
            height: "55%",
          }}
        >
          {/* <AntDesign size={45} name="user" color={"#000"} /> */}
          <Image
            source={require("../assets/nobg-icon.png")}
            style={styles.profileImg}
          />
          <Text>Smoothy</Text>
        </View>

        <View style={styles.tabs}>
          <View style={[styles.tab]}>
            <Text style={[styles.tabText]}>Me</Text>
          </View>
          <View style={[styles.tab]}>
            <Text style={[styles.tabText]}> Your Orders</Text>
          </View>
          <View style={[styles.tab]}>
            <Text style={[styles.tabText]}>Delivery Status</Text>
          </View>
        </View>
      </View>

      <View style={{ width: "100%", marginTop: 10 }}>
        {/* <Pressable
          style={styles.btn}
          onPress={() => navigation.navigate("register")}
        >
          <Text style={styles.btnText}>Login</Text>
        </Pressable> */}
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Log Out!</Text>
        </Pressable>
        {/* </LinearGradient> */}
      </View>
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
    width: "80%",
    height: "60%",
    borderRadius: 30,
    resizeMode: "contain",
  },
  tabs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    alignSelf: "center",
    backgroundColor: "#333",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 50,
    width: "100%",
    paddingHorizontal: 10,
  },
  tab: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 10,
    // backgroundColor: "#fff",
    // width: "100%",
  },
  tabText: {
    color: "#fff",
    fontWeight: "800",
    textAlign: "center",
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
export default Account;
