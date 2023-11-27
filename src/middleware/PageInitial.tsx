import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { getToken } from "../utils";
import { RouterBottomTab } from "../router/RouterBottomTab";
import { StyleSheet, View } from "react-native";

interface Props {
  children?: React.ReactNode;
}

export const PageInitial: React.FC<Props> = ({ children }) => {
  const { reset } = useNavigation();

  return (
    <>
      {children}
      <View style={styles.bottomTab}>
        <RouterBottomTab />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bottomTab: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
