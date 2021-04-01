import React, { createContext, useState } from 'react';
import { loadData, saveData } from '../common';

export const StateContext = createContext<any>({});

export function StateProvider({ children }: any) {
  const [status, setStatus] = useState(
    ((status: string) => {
      if (!status) {
        saveData('status', 'reading');
        return 'reading';
      }
      return status;
    })(loadData('status')),
  );

  const [code, setCode] = useState<string>(loadData('code'));
  const [problemCodeList, setProblemCodeList] = useState(
    loadData('problemCodeList') || [],
  );
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StateContext.Provider
      value={{
        status,
        setStatus,
        problemCodeList,
        setProblemCodeList,
        code,
        setCode,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
