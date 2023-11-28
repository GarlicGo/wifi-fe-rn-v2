import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Profile from "../Profile";
import History from "../History";
import Sign from "../Sign";

const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ color }) => {
            let iconName: string = "ios-information-circle";

            if (route?.name === "Sign") {
              iconName = 'add-circle-outline';
            } else if (route?.name === "History") {
              iconName = 'list-outline';
            } else if (route?.name === "Profile") {
              iconName = 'person-outline';
            }

            return <Ionicons name={iconName} size={20} color={color} />;
          },
        };
      }}
    >
      <Tab.Screen name="Sign" component={Sign} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
