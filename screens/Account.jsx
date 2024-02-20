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
  Dimensions,
} from "react-native";
import SegmentedControls from "../components/Account/SegmentedControls";
import Profile from "../components/Account/Profile";
import Order from "../components/Account/Order";
import Delivery from "../components/Account/Delivery";
const { height } = Dimensions.get("screen");

const SelectedSegment = ({ selectedOption, navigation }) => {
  switch (selectedOption) {
    case "Profile":
      return <Profile navigation={navigation} />;
    case "Orders":
      return <Order />;
    case "Delivery":
      return <Delivery />;
    default:
      break;
  }
};

const Account = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState("Profile");

  return (
    <View
      style={{
        paddingHorizontal: 10,
        flex: 1,
      }}
    >
      <SegmentedControls
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <View
        style={
          {
            // paddingVertical: 20,
          }
        }
      >
        <SelectedSegment
          selectedOption={selectedOption}
          navigation={navigation}
        />
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
});
export default Account;
