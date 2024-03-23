import React, { useContext, useEffect } from "react";
// import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserContext } from "../../Context/UserContext";
import { StatusBar } from "expo-status-bar";
import MainLayout from "../../screens/MainLayout";
import Register from "../../screens/Register";
import Login from "../../screens/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Checkout from "../../screens/Checkout";

const Stack = createNativeStackNavigator();
const Navigation = ({}) => {
  const { isLogged, getUser } = useContext(UserContext);

  useEffect(() => {
    getUser();
  }, [isLogged]);
  // console.log(isLogged);
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#11998E" />
      <Stack.Navigator
        screenOptions={{ headerShown: false, navigationBarColor: "#fff" }}
      >
        {isLogged ? (
          <>
            <Stack.Screen name="main" component={MainLayout} />
            <Stack.Screen name="checkout" component={Checkout} />
          </>
        ) : (
          <Stack.Screen
            name="register"
            component={Register}
            options={{ navigationBarColor: "#38EF7D" }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
