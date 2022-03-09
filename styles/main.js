import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
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
  textInp: {
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  mainHeaderTitle: {
    fontSize: 25,
    fontWeight: "900",
    color: "black",
  },
  label: {
    marginVertical: 5,
    color: "black",
    fontWeight: "900",
  },
});
export default mainStyles;
