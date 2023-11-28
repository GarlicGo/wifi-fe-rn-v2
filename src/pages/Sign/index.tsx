import { Alert, View } from "react-native";
import { useMutation, useQuery } from "react-query";
import { Button } from "@rneui/themed";
import { getCanSign, sign } from "../../data";
import { getWifiInfo, toast } from "../../utils";
import { signButtonStyles, styles } from "./styles";

export default function Sign() {
  const { data: canSign, refetch: refreshCanSign } = useQuery(
    "can-sign",
    getCanSign,
    {
      onError(err) {
        toast(err?.toString() ?? "Failed");
      },
      cacheTime: 100,
    }
  );

  const { mutate: handleSign } = useMutation(
    async () => {
      const { bssid = "" } = await getWifiInfo();
      return sign(bssid);
    },
    {
      onSuccess() {
        toast("Sign success");
        refreshCanSign();
      },
      onError(err) {
        toast(err?.toString() ?? "Failed");
      },
    }
  );

  const handleSignClick = async () => {
    const wifiInfo = await getWifiInfo();
    Alert.alert(
      "Wifi Info",
      `Wifi Name: ${wifiInfo.ssid}\nMac Address: ${wifiInfo.bssid}`
    );
  };

  return (
    <View style={styles.container}>
      <Button
        title={canSign ? "Sign" : "(No sign task)"}
        disabled={!canSign}
        onPress={() => handleSign()}
        buttonStyle={signButtonStyles.signButton}
        titleStyle={signButtonStyles.signButtonText}
      />
      <View style={styles.option}>
        <Button
          title="Refresh sign status"
          type="outline"
          onPress={() => refreshCanSign()}
        />
        <Button
          title="Current Wifi Info"
          type="outline"
          onPress={handleSignClick}
        />
      </View>
    </View>
  );
}
