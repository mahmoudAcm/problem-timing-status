import { useEffect } from "react";

export default function useLocalStorage<T = any>(key: string, value: T) {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
}
