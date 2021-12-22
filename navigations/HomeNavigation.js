import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "../screens/Homepage";
import Ionicons from "react-native-vector-icons/Ionicons";
import House from "../screens/House";

const Tab = createBottomTabNavigator();
const HomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "House") {
            iconName = focused ? "ios-home" : "ios-home";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="House" component={House} />
    </Tab.Navigator>
  );
};
export default HomeNavigation;
