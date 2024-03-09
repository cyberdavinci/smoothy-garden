import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
//
import CartList from "../components/Cart/CartList";
import CartDashBoard from "../components/Cart/CartDashBoard";
import { LinearGradient } from "expo-linear-gradient";
import { CartContext } from "../Context/CartContext";
//
const { width, height } = Dimensions.get("window");
//
const Cart = ({ navigation }) => {
  const { clearCart, cartList } = useContext(CartContext);
  return (
    <View>
      <View style={{ height: height * 0.35 }}>
        <CartDashBoard navigation={navigation} />
      </View>
      <ScrollView style={{ marginBottom: 300 }}>
        <View
          style={{
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <CartList cartList={cartList} />
          {cartList?.length > 0 && (
            <View style={{ width: "100%", marginTop: 10 }}>
              <LinearGradient
                colors={["#EA2027", "#EA2027", "#EE5A24"]}
                style={styles.gradienWrapper}
              >
                <Pressable style={styles.btn} onPress={() => clearCart()}>
                  <Text style={styles.btnText}>Clear Cart</Text>
                </Pressable>
              </LinearGradient>
            </View>
          )}
        </View>
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
  btn: {
    // backgroundColor: "#000",
    justifyContent: "center",
    height: 60,
    // borderRadius: 0,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
  },
});
export default Cart;
