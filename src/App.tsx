import React from "react";
import { Router } from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationContainer } from "@react-navigation/native";
import { AppInitial } from "./middleware/AppInitial";

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Router />
      {/* <QueryClientProvider client={queryClient}>
        <AppInitial>
          <Router />
        </AppInitial>
      </QueryClientProvider> */}
    </NavigationContainer>
  );
}

export default App;
