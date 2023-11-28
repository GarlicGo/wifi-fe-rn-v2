import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import { Text, View } from "react-native";
import { removeToken, toast } from "../../utils";
import { styles } from "./styles";
import { useQuery } from "react-query";
import { UserSexMapper, getMyInfo } from "../../data";

export default function Profile() {
  const { reset } = useNavigation();

  const { data: myInfo, refetch: refreshMyInfo } = useQuery(
    "getMyInfo",
    getMyInfo,
    {
      onError(err) {
        toast(err?.toString() ?? "Failed");
      },
      cacheTime: 100,
    }
  );

  const handleLogout = () => {
    removeToken();
    reset({
      index: 0,
      routes: [{ name: "login" } as never],
    });
  };

  useEffect(() => {
    // refreshMyInfo();
  });

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.headerText}>Profile</Text>
        <View style={styles.infoItem} />
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>User ID</Text>
          <Text style={styles.infoText}>{myInfo?.userId}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>User Name</Text>
          <Text style={styles.infoText}>{myInfo?.username}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Phone</Text>
          <Text style={styles.infoText}>{myInfo?.phone}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Nick Name</Text>
          <Text style={styles.infoText}>{myInfo?.nickname}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoTitle}>Sex</Text>
          <Text style={styles.infoText}>
            {myInfo?.sex && UserSexMapper[myInfo?.sex]}
          </Text>
        </View>
      </View>
      <View style={styles.option}>
        <Button title="Edit Profile" type="outline" onPress={handleLogout} />
        <Button
          title="Log out"
          type="outline"
          // color="error"
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}
