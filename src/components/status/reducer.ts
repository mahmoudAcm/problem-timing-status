import { loadData } from '../../common';

export const initialStatus = { status: loadData('status') || 0 };

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
