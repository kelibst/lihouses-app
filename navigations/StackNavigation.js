import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Color from "../constants/Color";
import { HouseOverview } from "../screens/House/HouseOverView";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HouseOverview}
        options={{
          title: "Li Houses",
          headerTintColor: Color.primary,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
