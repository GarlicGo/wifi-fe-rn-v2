import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E6F3FF",
    // borderWidth: 1,
    // borderColor: "#5EA4FF",
    marginBottom: 10,
    padding: 5,
  },
  infoTitle: {
    // fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    // 文字自动换行
    flexWrap: "wrap",
    maxWidth: 300,
  },
  option: {
    height: 120,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
