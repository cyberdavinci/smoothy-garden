import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("screen");
const Checkout = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingBottom: insets.bottom,
        // paddingTop: insets.top,
        paddingTop: insets.top,
        paddingHorizontal: 20,

        flex: 1,
      }}
    >
      <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
        <AntDesign name="arrowleft" size={28} color="green" />
        <Text style={styles.backTxt}>Back</Text>
      </Pressable>
      <Text style={styles.title}>How would you like to pay?</Text>
      <View style={styles.paymentGateWays}>
        <Pressable style={styles.btn}>
          <Image
            style={styles.paymentImg}
            source={require("../assets/images/wave-logo.png")}
          />
        </Pressable>
        <Pressable style={styles.btn}>
          <Image
            style={styles.paymentImg}
            source={require("../assets/images/cashup-logo.webp")}
          />
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.deliveryTxt}>Pay On Delivery</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  backBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  backTxt: {
    fontWeight: "bold",
    fontSize: 16,
  },
  paymentGateWays: {
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginTop: 30,
  },
  btn: {
    width: "100%",
    height: height * 0.14,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  deliveryTxt: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#38EF7D",
  },
});
