import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Color from "../constants/Color";
import HomeNavigation from "./HomeNavigation";
import HouseDetails from "../screens/House/HouseDetails";
import HouseOverView from "../screens/House/HouseOverView";
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Houses"
        component={HouseOverView}
        options={{
          title: "Li Houses",
          headerTintColor: Color.primary,
        }}
      />
      <Stack.Screen
        name="HouseDetails"
        component={HouseDetails}
        options={({ route }) => ({
          headerTintColor: Color.primary,
          title: route?.params?.title,
          headerTitle:
            route?.params?.title.length >= 25
              ? route?.params?.title.slice(0, 24) + "..."
              : route?.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
