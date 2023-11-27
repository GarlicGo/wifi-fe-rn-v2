import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type TabType = "home" | "history" | "profile";

export const RouterBottomTab: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("home");
  const { reset } = useNavigation();

  console.log('selectedTab', selectedTab);
  

  const replaceTo = (name: TabType) => {
    console.log('replaceTo name', name);
    
    setSelectedTab(name);
    reset({
      index: 0,
      routes: [{ name } as never],
    });
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...(selectedTab === "home" ? styles.active : {}),
        }}
        onPress={() => replaceTo("home")}
      >
        Home
      </Text>
      <Text
        style={{
          ...(selectedTab === "history" ? styles.active : {}),
        }}
        onPress={() => replaceTo("history")}
      >
        History
      </Text>
      <Text
        style={{
          ...(selectedTab === "profile" ? styles.active : {}),
        }}
        onPress={() => replaceTo("profile")}
      >
        Profile
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  active: {
    color: "blue",
  },
});
