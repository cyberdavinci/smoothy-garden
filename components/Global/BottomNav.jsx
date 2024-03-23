import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, Animated } from "react-native";
//
import { CartContext } from "../../Context/CartContext";
//
import Home from "../../screens/Home";
import Account from "../../screens/Account";
import Cart from "../../screens/Cart";
import Chat from "../../screens/Chat";

//
import { Ionicons, AntDesign } from "@expo/vector-icons";

const BottomNav = () => {
  // const [showTabLabel, setShowTabLabel] = React.useState(false);
  const { cartCounter, cartList } = useContext(CartContext);
  const Tab = createBottomTabNavigator();
  const safeArea = useSafeAreaInsets();
  const screenOptions = ({ route }) => ({
    headerShown: false,
    tabBarStyle: {
      width: "auto",
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      // marginTop: safeArea.top,
    },
    tabBarLabelStyle: {
      color: "#fff",
      justifyContent: "space-between",
    },
    tabBarItemStyle: {
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    tabBarIcon: ({ focused }) => {
      switch (route.name) {
        case "Home":
          return (
            <AntDesign
              name="home"
              size={24}
              color={`${focused ? "#DD3333" : "gray"}`}
              //   style={{ marginRight: 10 }}
            />
          );
        case "Chat":
          return (
            <Ionicons
              name="md-chatbubbles-outline"
              size={24}
              color={`${focused ? "#DD3333" : "gray"}`}
            />
          );
        case "Cart":
          return (
            <Ionicons
              name="md-cart-outline"
              size={24}
              color={`${focused ? "#DD3333" : "gray"}`}
            />
          );
        case "Account":
          return (
            <AntDesign
              name="user"
              size={24}
              color={`${focused ? "#DD3333" : "gray"}`}
            />
          );
        default:
          break;
      }
    },
    tabBarLabel: ({ focused }) => {
      switch (route.name) {
        case "Home":
          return focused ? (
            <Animated.Text style={{}}>{route.name}</Animated.Text>
          ) : null;

        case "Chat":
          return focused ? <Animated.Text>{route.name}</Animated.Text> : null;

        case "Cart":
          return focused ? <Animated.Text>{route.name}</Animated.Text> : null;

        case "Account":
          return focused ? <Animated.Text>{route.name}</Animated.Text> : null;

        default:
          return null;
      }
    },

    // tabBarShowLabel: showTabLabel,
    tabBarLabelPosition: "beside-icon",
  });

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      sceneContainerStyle={{
        paddingTop: safeArea.top,
        // paddingBottom: safeArea.bottom,
        // paddingBottom: 50,
        // marginBottom: 40,
        backgroundColor: "#fff",
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{ tabBarBadge: cartList?.length }}
      />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default BottomNav;
