import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { Text, View } from "react-native";
import { removeToken } from "../../utils";
import { styles } from "./styles";
import { UserSexMapper } from "../../data";
import { useUser } from "../../model";

export default function Profile() {
  const { reset } = useNavigation();
  const user = useUser();

  const handleLogout = () => {
    removeToken();
    reset({
      index: 0,
      routes: [{ name: "login" } as never],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.headerText}>Profile</Text>
        <View style={styles.infoItem} />
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>User ID</Text>
          <Text style={styles.infoText}>{user?.userId}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>User Name</Text>
          <Text style={styles.infoText}>{user?.username}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Phone</Text>
          <Text style={styles.infoText}>{user?.phone}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Nick Name</Text>
          <Text style={styles.infoText}>{user?.nickname}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Sex</Text>
          <Text style={styles.infoText}>
            {user?.sex && UserSexMapper[user?.sex]}
          </Text>
        </View>
      </View>
      <View style={styles.option}>
        <Button title="Edit Profile" type="outline" onPress={handleLogout} />
        <Button
          title="Log out"
          type="outline"
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}
