import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { StyleSheet, Text, View } from "react-native";
import { removeToken } from "../../utils";

export default function Profile() {
  const { reset } = useNavigation();

  const handleLogout = () => {
    removeToken();
    reset({
      index: 0,
      routes: [{ name: "login" } as never],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
