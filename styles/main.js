import { StyleSheet } from "react-native";
import Color from "../constants/Color";

const mainStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    flex: 1,
  },
  userHeader: {
    minHeight: 80,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "white",
    color: Color?.primary,
    alignContent: "center",
  },
});
export default mainStyles;
