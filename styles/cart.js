import { StyleSheet } from "react-native";
import Color from "../constants/Color";

const cartStyles = StyleSheet.create({
  cartItemCont: {
    backgroundColor: "white",
    marginTop: 5,
    marginBottom: 5,
    flexDirection: "row",
    flex: 1,
    minHeight: 100,
    width: "100%",
    // justifyContent: "space-between",
  },
  imgContainer: {
    width: "30%",
    marginRight: 10,
  },
  cartPrice: {
    color: Color?.primary,
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "sans-serif",
    paddingTop: 5,
  },
  cartActions: {
    marginTop: 5,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#ffac2970",
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
  },
  cartShadows: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  delete: {
    flexDirection: "row",
    alignItems: "center",
  },
  deleteText: {
    color: Color?.primary,
  },
  cartBtn: {
    flex: 1,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    height: 60,
    backgroundColor: Color.primary,
  },
  cartBtnTxt: {
    color: "white",
    fontSize: 25,
  },
});

export default cartStyles;
