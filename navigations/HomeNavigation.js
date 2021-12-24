import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HouseOverView from "../screens/House/HouseOverView";
import Ionicons from "react-native-vector-icons/Ionicons";
import HouseDetails from "../screens/House/HouseDetails";

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
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HouseOverView}
        options={{
          title: "Li Houses",
        }}
      />
      <Tab.Screen name="House" component={HouseDetails} />
    </Tab.Navigator>
  );
};
export default HomeNavigation;
