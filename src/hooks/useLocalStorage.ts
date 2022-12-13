import { useEffect } from "react";

export const storage_version = "v2-";

export default function useLocalStorage<T = any>(key: string, value: T) {
  useEffect(() => {
    localStorage.setItem(storage_version + key, JSON.stringify(value));
  }, [value]);
}
