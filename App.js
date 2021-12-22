import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";

import HomeNavigation from "./navigations/HomeNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <HomeNavigation />
      <StatusBar />
    </NavigationContainer>
  );
}
