import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useMutation } from "react-query";
import { Input, Button, ButtonGroup } from "@rneui/base";
import { register } from "../../data";
import { toast } from "../../utils";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [registerForm, setRegisterFrom] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    nickname: "",
    phone: "",
  });

  const { mutate: registerMutate } = useMutation(
    async () => {
      return register({
        ...registerForm,
        sex: selectedIndex,
      });
    },
    {
      onSuccess: async () => {
        toast("register success");
      },
      onError(err) {
        toast(`login failed ${err}`);
      },
    }
  );

  const handleToRegister = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Text>WIFI Sign System</Text>
      <Input
        placeholder="username"
        value={registerForm.username}
        onChangeText={(e) => setRegisterFrom({ ...registerForm, username: e })}
      />
      <Input
        placeholder="password"
        value={registerForm.password}
        onChangeText={(e) => setRegisterFrom({ ...registerForm, password: e })}
      />
      <Input
        placeholder="confirmPassword"
        value={registerForm.confirmPassword}
        onChangeText={(e) =>
          setRegisterFrom({ ...registerForm, confirmPassword: e })
        }
      />
      <Input
        placeholder="nickname"
        value={registerForm.nickname}
        onChangeText={(e) => setRegisterFrom({ ...registerForm, nickname: e })}
      />
      <Input
        placeholder="phone"
        value={registerForm.phone}
        onChangeText={(e) => setRegisterFrom({ ...registerForm, phone: e })}
      />
      <ButtonGroup
        buttonStyle={{ padding: 10 }}
        selectedButtonStyle={{ backgroundColor: "#e2e2e2" }}
        buttons={["MALE", "FEMALE"]}
        selectedIndex={selectedIndex}
         onPress={setSelectedIndex}
      />
      <View style={styles.bottomAction}>
        <Button onPress={() => registerMutate()}>Register</Button>
        <Button type="outline" onPress={handleToRegister}>
          Back to login
        </Button>
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
