import { useMemo, useState } from "react";
import Dialog from "react-native-dialog";
import { PromptContext, PromptShowParams } from "./context";

interface Props {
  children: React.ReactNode;
}

export const PromptProvider: React.FC<Props> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const [params, setParams] = useState<PromptShowParams>({});

  const show = (params?: PromptShowParams) => {
    setParams({
      ...params,
    });
    setVisible(true);
  };

  const promptContextValue = useMemo(
    () => ({
      show,
    }),
    [show]
  );

  return (
    <PromptContext.Provider value={promptContextValue}>
      {children}
      <Dialog.Container visible={visible}>
        <Dialog.Title>{params?.title}</Dialog.Title>
        <Dialog.Input value={value} onChangeText={setValue} />
        <Dialog.Button
          label="Cancel"
          onPress={() => {
            setVisible(false);
            setValue("");
            params?.onCancel?.();
          }}
        />
        <Dialog.Button
          label="Confirm"
          onPress={() => {
            setVisible(false);
            setValue("");
            params?.onConfirm?.(value);
          }}
        />
      </Dialog.Container>
    </PromptContext.Provider>
  );
};

export * from './context';
