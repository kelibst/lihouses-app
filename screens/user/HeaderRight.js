import { View, Text, Button } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import Color from "../../constants/Color";
import mainStyles from "../../styles/main";

const HeaderRight = () => (
  <View style={mainStyles.userHeader}>
    <TouchableOpacity>
      <Text>Home</Text>
      <Ionicons iconName="heart" size={35} color={Color.primary} />
    </TouchableOpacity>
  </View>
);
export default HeaderRight;
