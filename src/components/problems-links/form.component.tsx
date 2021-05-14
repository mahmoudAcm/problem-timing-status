import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import SearchIcon from '@material-ui/icons/Search';

import { Context } from '../../context';
import { saveData, loadData } from '../../common';
import { linkRegx } from './const';
import { ListOfProblems } from './list-of-problems.component';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: 900,
    height: 490,
  },
  textField: {
    width: 490,
  },
  btn: {
    width: theme.spacing(18),
    marginLeft: 25,
    marginTop: -5,
    textTransform: 'capitalize',
  },
}));

export function Form() {
  const classes = useStyles();
  const [link, setLink] = React.useState('');
  const [searchKey, setSearchKey] = React.useState('');
  const [helperText, setHelperText] = React.useState('');

  const {
    state: {
      SelectCodeReducer: { problemCodeList },
    },
    dispatch,
  } = React.useContext(Context);

  function handleTyping({ target: { value } }: any) {
    setLink(value);
    setHelperText('');
  }

  function handleFilter({ target: { value } }: any) {
    setSearchKey(value);
  }

  function handleAdd() {
    if (!link) {
      setHelperText('please fill the field');
      return;
    }

    let newProblemCodeList;
    if (problemCodeList.includes(link)) {
      setHelperText('this link is already added');
      return;
    }

    if (!link.match(linkRegx)) {
      setHelperText('this is not a valid link');
      return;
    }

    newProblemCodeList = [link, ...problemCodeList];

    dispatch({
      type: 'SET_PROBLEM_CODE',
      problemCodeList: newProblemCodeList,
    });

    const storage = {
      timers: {
        reading: 0,
        thinking: 0,
        coding: 0,
        debugging: 0,
      },
    };

    saveData(link, storage);
    saveData('problemCodeList', newProblemCodeList);
    setLink('');
    setHelperText('');
  }

  function handleSearch() {
    const data: string[] = loadData('problemCodeList');
    if (!searchKey) {
      dispatch({
        type: 'SET_PROBLEM_CODE',
        problemCodeList: data,
      });
      return;
    }

    dispatch({
      type: 'SET_PROBLEM_CODE',
      problemCodeList: data.filter(function isSubSequance(code) {
        let idx = 0;
        for (let i = 0; i < code.length; i++) {
          if (idx < searchKey.length && searchKey[idx] === code[i]) idx++;
        }
        return idx === searchKey.length;
      }),
    });
  }

  function handleReset() {
    dispatch({
      type: 'SET_PROBLEM_CODE',
      problemCodeList: loadData('problemCodeList'),
    });
    setSearchKey('');
  }

  return (
    <Card className={classes.root}>
      <CardHeader />
      <CardContent
        component={Grid}
        container
        direction="column"
        alignItems="center"
        spacing={4}
      >
        <Grid item style={{ height: 67 }}>
          <TextField
            placeholder="Paste The Link Here ..."
            className={classes.textField}
            value={link}
            onChange={handleTyping}
            helperText={helperText
              .split(' ')
              .map((string) =>
                string
                  ? string.charAt(0).toUpperCase() + string.slice(1)
                  : string,
              )
              .join(' ')}
            error={!!helperText.length}
          />
          <Button
            variant="contained"
            className={classes.btn}
            color="primary"
            onClick={handleAdd}
          >
            Add Problem
          </Button>
        </Grid>
        <Grid item style={{ height: 67 }}>
          <Grid container justify="center">
            <TextField
              placeholder="Type Something To Search ..."
              className={classes.textField}
              value={searchKey}
              onChange={handleFilter}
            />
            <Grid item className={classes.btn}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleReset}
                style={{ marginRight: 16 }}
              >
                <RefreshIcon />
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
              >
                <SearchIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ListOfProblems />
        </Grid>
      </CardContent>
    </Card>
  );
}