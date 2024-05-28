// useLocalStorage.js
import { useEffect } from 'react';

export function useLocalStorage(key, value) {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const storedValue = JSON.parse(localStorage.getItem(key));
  return storedValue ? storedValue : value;
}
