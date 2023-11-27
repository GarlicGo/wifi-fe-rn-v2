import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Profile from "../Profile";
import History from "../History";
import Sign from "../Sign";

const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Sign" component={Sign} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}
