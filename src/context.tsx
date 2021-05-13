import React, { createContext, useReducer } from 'react';
import { combineReducers } from '@reduxjs/toolkit';

import {
  HeaderReducer,
  StepperReducer,
  StatusReducer,
  SelectCodeReducer,
  TimerReducer,
  initialHeader,
  initialStepper,
  initialSelectCode,
  initialStatus,
  initialTimer,
} from './components';

const initialState = {
  HeaderReducer: initialHeader,
  StepperReducer: initialStepper,
  SelectCodeReducer: initialSelectCode,
  StatusReducer: initialStatus,
  TimerReducer: initialTimer,
};

export const Context = createContext<any>(initialState);

const reducer: any = combineReducers({
  HeaderReducer,
  StepperReducer,
  SelectCodeReducer,
  StatusReducer,
  TimerReducer,
});

export function ContextProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
