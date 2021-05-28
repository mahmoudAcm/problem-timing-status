import { saveData, loadData } from '../../common';

export const initialSelectCode = {
  problemCodeList:
    loadData('problemCodeList') || saveData('problemCodeList', []),
  code: loadData('code') || '',
};

export function SelectCodeReducer(
  state = initialSelectCode,
  { type, code, problemCodeList, loading }: any,
) {
  switch (type) {
    case 'SELECT_CODE': {
      return {
        ...state,
        code,
      };
    }
    case 'SET_PROBLEM_CODE': {
      return {
        ...state,
        problemCodeList,
      };
    }
    case 'LOADING': {
      return {
        ...state,
        loading,
      };
    }
    default:
      return state;
  }
}
