import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { useMutation } from "react-query";
import { login } from "../../data";
import { storeToken, toast } from "../../utils";

export default function Login() {
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
        // router.replace('/(tabs)/');
      },
      onError(err) {
        // toast(`login failed ${err}`);
        Alert.alert("Error", `err:${JSON.stringify(err)}`);
      },
    }
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text>WIFI Sign System</Text>
      {/* <Input
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
        <Button type="outline">To Register</Button>
        <Button type="outline">https fet</Button>
      </View> */}
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
