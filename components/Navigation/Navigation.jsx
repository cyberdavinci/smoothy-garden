import React, { useContext } from "react";
// import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { UserContext } from "../../Context/UserContext";
import MainLayout from "../../screens/MainLayout";
import Register from "../../screens/Register";
import Login from "../../screens/Login";
const Stack = createNativeStackNavigator();
const Navigation = ({}) => {
  const { isLogged } = useContext(UserContext);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
        {isLogged ? (
          <Stack.Screen name="main" component={MainLayout} />
        ) : (
          <>
            <Stack.Screen name="register" component={Register} />
            {/* <Stack.Screen name="login" component={Login} /> */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
