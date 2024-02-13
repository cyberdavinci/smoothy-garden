import React from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import { foodCategory } from "../../data/products";
const CategoriesList = () => {
  return (
    <ScrollView
      style={{ marginTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={{ flexDirection: "row", columnGap: 10 }}>
        {foodCategory.map((category, index) => (
          <>
            <CategoryCard category={category} key={index.toString()} />
          </>
        ))}
      </View>
    </ScrollView>
  );
};

export default CategoriesList;
