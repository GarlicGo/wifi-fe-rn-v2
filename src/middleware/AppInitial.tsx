import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { getToken } from "../utils";
import { PromptProvider } from "../components/Prompt";
import { useInitUser } from "../model";

interface Props {
  children?: React.ReactNode;
}

export const AppInitial: React.FC<Props> = ({ children }) => {
  const { reset } = useNavigation();
  useInitUser();

  const detectInitLoginStatus = async () => {
    const token = await getToken();
    console.log("AppInitial Token:", token);

    if (!token) {
      reset({
        index: 0,
        routes: [{ name: "login" } as never],
      });
      // router.replace('/(aux)/login');
    }
  };

  useEffect(() => {
    detectInitLoginStatus();
  }, []);

  return <PromptProvider>{children}</PromptProvider>;
};
