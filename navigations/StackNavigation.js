import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Color from "../constants/Color";
import HomeNavigation from "./HomeNavigation";
import HouseDetails from "../screens/House/HouseDetails";
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Houses"
        component={HomeNavigation}
        options={{
          title: "Li Houses",
          headerTintColor: Color.primary,
        }}
      />
      <Stack.Screen name="HouseDetails" component={HouseDetails} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
