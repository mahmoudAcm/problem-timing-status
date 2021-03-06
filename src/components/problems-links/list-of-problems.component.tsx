import React, { useState, useContext, useEffect } from 'react';
import { useTheme, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import IconButton from '@material-ui/core/IconButton';
import Pagination from '@material-ui/lab/Pagination';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import copy from 'clipboard-copy';

import { useStyles } from './styles';
import { Context } from '../../context';
import { saveData, loadData } from '../../common';
import { PER_PAGE } from './const';
import { AlertDialog } from '../summary';

export function ListOfProblems() {
  const theme = useTheme();
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState('');

  const {
    state: {
      SelectCodeReducer: { problemCodeList, code },
      TimerReducer: { isStarted },
    },
    dispatch,
  } = useContext(Context);

  useEffect(() => {
    setPage(1);
  }, [problemCodeList]);

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  function handleCopy(link: string) {
    return () => {
      copy(link);
    };
  }

  function handleDelete(link: string) {
    return () => {
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
      saveData(
        'problemCodeList',
        loadData('problemCodeList').filter((value: string) => value !== link),
      );

      dispatch({
        type: 'SET_PROBLEM_CODE',
        problemCodeList: newProblemCodeList,
      });
    };
  }

  function handleSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const code = event.target.value;
    dispatch({
      type: 'SELECT_CODE',
      code,
    });

    // at moment 0 we will load and rest code
    dispatch({
      type: 'LOADING',
      loading: true,
    });

    setTimeout(() => {
      dispatch({
        type: 'LOADING',
        loading: false,
      });
    }, 750);
    // at moment 750 ms we will show code space

    dispatch({
      type: 'INIT_TIMER',
      ...loadData(code),
    });

    if (isStarted) document.getElementById('timer-btn')!.click();

    saveData('code', code);
  }

  function handleDialog(link: string) {
    return () => {
      setOpen(true);
      setLink(link);
    };
  }

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        <AlertDialog open={open} setOpen={setOpen} link={link} />
        <List className={classes.root}>
          <RadioGroup name="code" value={code} onChange={handleSelect}>
            {!problemCodeList.length ? (
              <Typography
                variant="caption"
                color="textSecondary"
                className={classes.emptyListMsg}
              >
                no problems were found
              </Typography>
            ) : (
              problemCodeList
                .slice((page - 1) * PER_PAGE, page * PER_PAGE)
                .map((link: string) => {
                  const labelId = `checkbox-list-label-${link}`;
                  return (
                    <ListItem
                      key={link}
                      role="list"
                      dense
                      title={link.length > 80 ? link : ''}
                    >
                      <FormControlLabel
                        value={link}
                        control={<Radio color="primary" />}
                        label={
                          <ListItemText
                            id={labelId}
                            primary={(() => {
                              if (link.length > 80)
                                return link.substr(0, 80) + '...';
                              return link;
                            })()}
                          />
                        }
                      />
                      <ListItemSecondaryAction>
                        <IconButton
                          aria-label="create"
                          onClick={handleDialog(link)}
                          title="create a summary"
                          style={{
                            color: theme.palette.info.main,
                          }}
                        >
                          <ReportIcon />
                        </IconButton>
                        <IconButton
                          aria-label="copy"
                          onClick={handleCopy(link)}
                          title="copy"
                        >
                          <FileCopyIcon />
                        </IconButton>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={handleDelete(link)}
                          style={{
                            color: theme.palette.error.main,
                          }}
                          title="delete"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })
            )}
          </RadioGroup>
        </List>
      </Grid>
      <Grid item>
        {problemCodeList.length ? (
          <Pagination
            count={Math.ceil(problemCodeList.length / PER_PAGE)}
            page={page}
            onChange={handleChange}
          />
        ) : (
          <></>
        )}
      </Grid>
    </Grid>
  );
}
