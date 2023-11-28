
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../components/NotFound";
import EditProfile from "../pages/EditProfile";

const Stack = createNativeStackNavigator();

export const Router = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="home" component={Home} options={{
        headerShown: false
      }} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="edit-profile" component={EditProfile} options={{
        headerTitle: "Edit Profile"
      }} />
      <Stack.Screen name="*" component={NotFound} />
    </Stack.Navigator>
  );
};
