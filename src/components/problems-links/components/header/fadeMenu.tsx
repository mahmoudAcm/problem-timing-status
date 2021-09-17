import React, { useContext } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

import { useStyles } from './styles';
import { Context } from '../../../../context';
import { saveData, loadData } from '../../../../common';

export default function FadeMenu({ anchorEl, setAnchorEl }: any) {
  const classes = useStyles();
  const {
    state: {
      SelectCodeReducer: { problemCodeList, code },
    },
    dispatch,
  } = useContext(Context);

  const open = Boolean(anchorEl);

  const handleClose = (type: string) => {
    return () => {
      setAnchorEl(null);
      if (type === 'clearAll') {
        localStorage.removeItem('finshed');
        for (const code of problemCodeList) handleDelete(code);
      } else if (type === 'clearFinshed') {
        const finshed = loadData('finshed') || [];
        for (const code of finshed) handleDelete(code);
        localStorage.removeItem('finshed');
      }
    };
  };

  function handleDelete(link: string) {
    const problemCodeList = loadData('problemCodeList');
    if (code === link || !problemCodeList.length) {
      dispatch({
        type: 'SELECT_CODE',
        code: '',
      });

      dispatch({
        type: 'STATUS_CHANAGE',
        status: 'reading',
      });

      dispatch({
        type: 'HANDLE_BACK',
        activeStep: 0,
      });

      dispatch({
        type: 'RESET_TIMER_STATE',
      });

      saveData('code', '');
      saveData('status', 'reading');
      saveData('activeStep', 0);
      saveData('startedAt', 0);
      saveData('isStarted', false);
    }

    let newProblemCodeList = problemCodeList.filter(
      (value: string) => value !== link,
    );

    localStorage.removeItem(link);
    saveData('problemCodeList', newProblemCodeList);

    dispatch({
      type: 'SET_PROBLEM_CODE',
      problemCodeList: newProblemCodeList,
    });
  }

  return (
    <div>
      <Menu
        className={classes.fadeMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose('close')}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose('clearAll')}>
          Clear all problems
        </MenuItem>
        <MenuItem onClick={handleClose('clearFinshed')}>
          Clear marked problems
        </MenuItem>
      </Menu>
    </div>
  );
}
