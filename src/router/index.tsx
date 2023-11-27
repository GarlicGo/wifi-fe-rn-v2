
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import History from "../pages/History";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../components/NotFound";

const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={Home} options={{
        headerShown: false
      }} />
      {/* <Stack.Screen name="history" component={History} />
      <Stack.Screen name="profile" component={Profile} /> */}
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="*" component={NotFound} />
    </Stack.Navigator>
  );
};
