import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { Button, ButtonGroup, Input } from "@rneui/themed";
import { useUpdateUser, useUser } from "../../model";
import { styles } from "./styles";
import { UpdateUser, UserSex, updateMyInfo } from "../../data";
import { useMutation } from "react-query";
import { toast } from "../../utils";

export default function EditProfile() {
  const { goBack } = useNavigation();
  const user = useUser();
  const updateUser = useUpdateUser();
  const [selectedIndex, setSelectedIndex] = useState(user?.sex ?? 0);
  const [form, setForm] = useState<Omit<UpdateUser, "sex">>({
    username: user?.username ?? "",
    nickname: user?.nickname ?? "",
    phone: user?.phone ?? "",
  });

  const { mutate: updateMutate } = useMutation(
    async () => {
      return updateMyInfo({
        ...form,
        sex: selectedIndex,
      });
    },
    {
      onSuccess: async () => {
        toast("update success");
        updateUser();
        goBack();
      },
      onError(err) {
        toast(`login failed ${err}`);
      },
    }
  );

  useEffect(() => {
    setForm({
      username: user?.username ?? "",
      nickname: user?.nickname ?? "",
      phone: user?.phone ?? "",
    });
    setSelectedIndex(user?.sex ?? selectedIndex);
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Edit Profile</Text>
      <Input
        placeholder="username"
        value={form.username}
        onChangeText={(e) => setForm({ ...form, username: e })}
      />
      <Input
        placeholder="nickname"
        value={form.nickname}
        onChangeText={(e) => setForm({ ...form, nickname: e })}
      />
      <Input
        placeholder="phone"
        value={form.phone}
        onChangeText={(e) => setForm({ ...form, phone: e })}
      />
      <ButtonGroup
        buttonStyle={{ padding: 10 }}
        selectedButtonStyle={{ backgroundColor: "#e2e2e2" }}
        buttons={["MALE", "FEMALE"]}
        selectedIndex={selectedIndex}
        onPress={setSelectedIndex}
      />
      <View style={styles.option}>
        <Button title="Save" onPress={() => updateMutate()} />
        <Button title="Go back" type="outline" onPress={() => goBack()} />
      </View>
    </View>
  );
}
