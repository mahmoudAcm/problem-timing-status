import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function useMyState<T = any>(
  intialState: T,
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(intialState);
  useEffect(() => {
    setState(intialState);
  }, [intialState]);

  return [state, setState];
}
