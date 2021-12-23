import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import React from "react";

import HomeNavigation from "./navigations/HomeNavigation";

const rootReducer = combineReducers({
  Houses: houseReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeNavigation />
        <StatusBar />
      </NavigationContainer>
    </Provider>
  );
}
