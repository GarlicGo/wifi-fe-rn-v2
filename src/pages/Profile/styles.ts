import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  info: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  infoItem: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    paddingLeft: 20,
    paddingRight: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  infoText: {
    fontSize: 18,
    color: "#000",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
  },
  option: {
    height: 100,
    width: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
