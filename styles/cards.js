import { StyleSheet } from "react-native";

const cardStyles = StyleSheet.create({
  homeCard: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    marginBottom: 10,
    height: 200,
    borderRadius: 10,
  },
  shadows: {
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: "100%",
    minHeight: 150,
  },
  title: {
    fontSize: 16,
    color: "black",
    fontWeight: "900",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default cardStyles;
