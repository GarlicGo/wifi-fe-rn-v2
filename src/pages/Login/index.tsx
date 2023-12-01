import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useMutation } from "react-query";
import { Input, Button } from '@rneui/base';
import { login } from "../../data";
import { storeToken, toast } from "../../utils";
import { useNavigation } from "@react-navigation/native";
import { useUpdateUser } from "../../model";

export default function Login() {
  const updateUser = useUpdateUser();
  const navigation = useNavigation();
  const [loginForm, setLoginFrom] = useState({
    username: "",
    password: "",
  });

  const { mutate: loginMutate } = useMutation(
    async () => {
      return login(loginForm);
    },
    {
      onSuccess: async (token) => {
        toast("login success");
        await storeToken(token);
        updateUser();
        navigation.reset({
          index: 0,
          routes: [{ name: "home" } as never],
        });
      },
      onError(err) {
        toast(`login failed ${err}`);
      },
    }
  );

  const handleToRegister = () => {
    navigation.navigate('register' as never);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text>WIFI Sign System</Text>
      <Input
        placeholder="username"
        value={loginForm.username}
        onChangeText={(e) => setLoginFrom({ ...loginForm, username: e })}
      />
      <Input
        placeholder="password"
        value={loginForm.password}
        onChangeText={(e) => setLoginFrom({ ...loginForm, password: e })}
      />
      <View style={styles.bottomAction}>
        <Button onPress={() => loginMutate()}>Login</Button>
        <Button type="outline" onPress={handleToRegister}>To Register</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bottomAction: {
    height: 100,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
