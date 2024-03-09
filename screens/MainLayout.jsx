import React from "react";
import BottomNav from "../components/Global/BottomNav";
import { StatusBar } from "expo-status-bar";
const MainLayout = () => {
  return (
    <>
      <StatusBar backgroundColor="transparent" style="dark" />
      <BottomNav />
    </>
  );
};

export default MainLayout;
