import { loadData } from '../../common';

export const initialSelectCode = {
  problemCodeList: loadData('problemCodeList') || [],
  code: loadData('code') || '',
};

export function SelectCodeReducer(
  state = initialSelectCode,
  { type, code, problemCodeList }: any,
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
    default:
      return state;
  }
}
