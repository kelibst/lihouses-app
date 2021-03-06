import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Color from "../constants/Color";
import FavoriteList from "../screens/House/FavoriteList";
import StackNavigation from "./StackNavigation";
import CartScreen from "../screens/cart/CartScreen";
import Profile from "../screens/user/Profile";
import Users from "../screens/user/Users";

const Tab = createBottomTabNavigator();
const HomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "ios-home" : "ios-home";
              break;
            case "favorites":
              iconName = focused ? "heart" : "heart-outline";
              break;
            case "cart":
              iconName = focused ? "cart" : "cart-outline";
              break;
            case "user":
              iconName = focused ? "person-circle" : "person-circle-outline";
              break;
            default:
              iconName = focused ? "ios-home" : "ios-home";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigation}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="favorites"
        component={FavoriteList}
        options={{
          title: "Favorites",
          headerTintColor: Color.primary,
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          title: "Cart",
          headerTintColor: Color.primary,
        }}
      />

      <Tab.Screen
        name="user"
        component={Users}
        options={{
          title: "Account",
          headerTintColor: Color.primary,
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeNavigation;
