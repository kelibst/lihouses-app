import { Text, View } from "react-native";
import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> This is the users component </Text>
      </View>
    );
  }
}

export default Profile;
