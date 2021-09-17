import React, { createRef, useContext } from 'react';

import { Problem } from './problem';
import { Context } from '../../../../context';

const refs = new Map();

export const Problems = () => {
  const {
    state: {
      SelectCodeReducer: { problemCodeList },
    },
  } = useContext(Context);

  function createPair(code: string) {
    let ref = refs.get(code);
    if (!ref) {
      ref = createRef<any>();
      refs.set(code, ref);
    }
  }

  return (
    <div>
      {problemCodeList.map((link: string) => {
        createPair(link);
        return <Problem {...{ refs, code: link }} key={link} />;
      })}
    </div>
  );
};
