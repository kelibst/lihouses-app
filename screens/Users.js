import React, { Component } from "react";
import { Text, View } from "react-native";

export class Users extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> This is the users component </Text>
      </View>
    );
  }
}

export default Users;
