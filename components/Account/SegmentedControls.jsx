import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import { useAnimatedStyle } from "react-native-reanimated";
const SegmentedControls = ({ selectedOption, setSelectedOption }) => {
  const options = ["Profile", "Orders", "Delivery"];
  const { width: windowWidth } = useWindowDimensions();
  const segmentedControlWidth = windowWidth - 20;
  const segmentedItemWidth = segmentedControlWidth / 3;
  const activeItemBackgroundWidth = segmentedItemWidth - 10;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      left: segmentedItemWidth * options.indexOf(selectedOption),
    };
  });
  return (
    <View style={[styles.tabs, { width: segmentedControlWidth }]}>
      <View
        style={{
          position: "absolute",
          backgroundColor: "#fff",
          width: segmentedItemWidth,
          height: 50,
          // borderTopLeftRadius: 10,
          // borderBottomRightRadius: 10,
          borderRadius: 15,
          alignSelf: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.48,
          shadowRadius: 11.95,

          elevation: 18,
          left:
            selectedOption == "Profile"
              ? 5
              : selectedOption == "Orders"
              ? segmentedItemWidth
              : (segmentedItemWidth - 3) * 2,
          // marginLeft: 10,
          // right: 10,
        }}
      />
      {options.map((option, index) => (
        <Pressable
          style={[styles.tab, { width: segmentedItemWidth }]}
          key={index.toString()}
          onPress={() => setSelectedOption(option)}
        >
          <Text style={[styles.tabText]}>{option}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default SegmentedControls;

const styles = StyleSheet.create({
  tabs: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    // gap: 10,
    alignSelf: "center",
    backgroundColor: "#e5e9f0",
    // borderTopLeftRadius: 10,
    // borderBottomRightRadius: 10,
    borderRadius: 10,
    height: 60,
    marginTop: 30,
    // width: "100%",
    // paddingHorizontal: 10,
  },
  tab: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 10,
    // backgroundColor: "#fff",

    // width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    color: "#40c057",
    fontWeight: "800",

    // textAlign: "center",
  },
});
