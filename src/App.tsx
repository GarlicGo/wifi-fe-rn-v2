import React from "react";
import { Text } from "react-native";
import { AppInitial } from "./middleware/AppInitial";
import { NavigationContainer } from "@react-navigation/native";

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppInitial>
        <Text>App2</Text>
      </AppInitial>
    </NavigationContainer>
  );
}

export default App;
