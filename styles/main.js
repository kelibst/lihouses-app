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
    backgroundColor: "white",
    marginBottom: 5,
    height: 80,
    paddingTop: 30,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  userHeaderTxt: {
    fontSize: 20,
    color: Color?.primary,
  },
  userHeaderIco: {},
  userHeaderIcoCont: {
    flexDirection: "row",
  },
});
export default mainStyles;
