import { loadData } from '../../common';

export function restoreSearch(dispatch: any) {
  return () => {
    dispatch({
      type: 'SET_PROBLEM_CODE',
      problemCodeList: loadData('problemCodeList'),
    });
  };
}

export function isSubSequance(searchKey: string) {
  return (code: string) => {
    let idx = 0;
    for (let i = 0; i < code.length; i++) {
      if (idx < searchKey.length && searchKey[idx] === code[i]) idx++;
    }
    return idx === searchKey.length;
  };
}

export function toCamelCase(str: string) {
  return str
    .split(' ')
    .map((word) =>
      word ? word.charAt(0).toUpperCase() + word.slice(1) : word,
    );
}
