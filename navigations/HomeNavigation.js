import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HouseOverView from "../screens/House/HouseOverView";
import Ionicons from "react-native-vector-icons/Ionicons";
import HouseDetails from "../screens/House/HouseDetails";
import Color from "../constants/Color";
import FavoriteList from "../screens/House/FavoriteList";
import StackNavigation from "./StackNavigation";

const Tab = createBottomTabNavigator();
const HomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (route.name === "favorites") {
            iconName = focused ? "bookmarks" : "bookmarks-outline";
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
    </Tab.Navigator>
  );
};
export default HomeNavigation;
