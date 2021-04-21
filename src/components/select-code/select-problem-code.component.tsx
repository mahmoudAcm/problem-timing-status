import React, { useContext } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { loadData, saveData } from '../../common';
import { Context } from '../../context';

export function SelectProblemCode() {
  const {
    state: {
      SelectCodeReducer: { problemCodeList, code },
    },
    dispatch,
  } = useContext(Context);

  function handleChange(_: any, code: any) {
    dispatch({
      type: 'SELECT_CODE',
      code,
    });

    dispatch({
      type: 'INIT_TIMER',
      ...loadData(code),
    });
    saveData('code', code);
  }

  return (
    <div>
      <Autocomplete
        popupIcon={<ExpandMoreIcon />}
        value={code}
        id="combo-box-demo"
        options={problemCodeList as Array<string>}
        getOptionLabel={(option) => option}
        style={{ width: 250, height: 64.34, marginLeft: 8, marginTop: 8 }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Problem code"
            placeholder="type to search"
            variant="outlined"
          />
        )}
        onChange={handleChange}
      />
    </div>
  );
}
