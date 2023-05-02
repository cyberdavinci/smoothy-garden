import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { CartContextProvider, CartContext } from "./Context/CartContext";
import Welcome from "./screens/Welcome";
import MainLayout from "./screens/MainLayout";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartContextProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
            <Stack.Screen name="main" component={MainLayout} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </CartContextProvider>
  );
}
