import React from "react";
import BottomNav from "../components/Global/BottomNav";
import { StatusBar } from "expo-status-bar";
const MainLayout = () => {
  return (
    <>
      <StatusBar backgroundColor="#11998E" style="light" />
      <BottomNav />
    </>
  );
};

export default MainLayout;
