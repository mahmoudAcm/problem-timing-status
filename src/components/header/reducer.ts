import { loadData } from '../../common';

export const initialHeader = {
  activeTab: loadData('activeTab') || 0,
};

export function HeaderReducer(state = initialHeader, { type, activeTab }: any) {
  switch (type) {
    case 'SET_ACTIVE_TAB':
      return {
        ...state,
        activeTab,
      };
    default:
      return state;
  }
}
