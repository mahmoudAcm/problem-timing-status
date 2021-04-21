import { loadData } from '../../common';

export const initialStepper = {
  activeStep: loadData('activeStep') || 0,
};

export function StepperReducer(
  state = initialStepper,
  { type, activeStep, errorMessage }: any,
) {
  switch (type) {
    case 'HANDLE_NEXT':
      return {
        ...state,
        activeStep,
      };
    case 'HANDLE_BACK':
      return {
        ...state,
        activeStep,
      };
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage,
        open: true,
      };
    case 'CLOSE_ERROR_MESSAGE':
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
}
