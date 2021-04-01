import { useEffect } from 'react';

export function loadData(key: string) {
  return JSON.parse(localStorage.getItem(key)!);
}

export function saveData<T = any>(key: string, storage: T) {
  localStorage.setItem(key, JSON.stringify(storage));
}

export function useLocalStorage(
  key: string,
  updateStorage: (storage: any) => any,
) {
  useEffect(() => {
    const newData = updateStorage(loadData(key));
    saveData(key, newData);
  }, [key, updateStorage]);
}
