export const initialCodeDialog = {
  isOpen: false,
};

export function CodeDialogReducer(
  state = initialCodeDialog,
  { type, isOpen, reason }: any,
) {
  switch (type) {
    case 'SET_IS_OPEN':
      return {
        ...state,
        isOpen,
        reason,
      };
    default:
      return state;
  }
}
