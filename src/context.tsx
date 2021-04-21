import React, { createContext, useReducer } from 'react';
import { combineReducers } from '@reduxjs/toolkit';

import {
  StepperReducer,
  StatusReducer,
  SelectCodeReducer,
  TimerReducer,
  CodeDialogReducer,
  initialStepper,
  initialSelectCode,
  initialStatus,
  initialTimer,
  initialCodeDialog,
} from './components';

const initialState = {
  StepperReducer: initialStepper,
  SelectCodeReducer: initialSelectCode,
  StatusReducer: initialStatus,
  TimerReducer: initialTimer,
  CodeDialogReducer: initialCodeDialog,
};

export const Context = createContext<any>(initialState);

const reducer: any = combineReducers({
  StepperReducer,
  SelectCodeReducer,
  StatusReducer,
  TimerReducer,
  CodeDialogReducer,
});

export function ContextProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
