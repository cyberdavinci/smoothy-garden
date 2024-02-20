import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserContext, UserContextProvider } from "./Context/UserContext";
import { CartContextProvider } from "./Context/CartContext";
// import Welcome from "./screens/Welcome";
import Register from "./screens/Register";
import Login from "./screens/Login";
import MainLayout from "./screens/MainLayout";

import Navigation from "./components/Navigation/Navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  // const
  return (
    <UserContextProvider>
      <CartContextProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </CartContextProvider>
    </UserContextProvider>
  );
}
