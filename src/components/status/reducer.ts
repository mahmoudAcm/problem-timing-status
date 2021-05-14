import { loadData, saveData } from '../../common';

export const initialStatus = { status: loadData('status') || saveData('status', '') };

export function StatusReducer(state = initialStatus, { type, status }: any) {
  switch (type) {
    case 'STATUS_CHANAGE':
      return {
        ...state,
        status,
      };
    default:
      return state;
  }
}
