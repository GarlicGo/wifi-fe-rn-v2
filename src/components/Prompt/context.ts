import { createContext, useContext } from 'react';
import { noop } from '../../utils';

export interface PromptShowParams {
  title?: string;
  onConfirm?: (value: string) => void;
  onCancel?: () => void;
}

interface PromptContextType {
  show: (params?: PromptShowParams) => void;
}

export const PromptContext = createContext<PromptContextType>({
  show: noop,
});

export const usePrompt = () => {
  return useContext(PromptContext);
};
