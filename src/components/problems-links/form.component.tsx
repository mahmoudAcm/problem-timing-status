import React, { useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RestoreIcon from '@material-ui/icons/Restore';

import { Context } from '../../context';
import { saveData, loadData } from '../../common';
import { linkRegx } from './const';
import { restoreSearch, isSubSequance, toCamelCase } from './helpers';
import { ListOfProblems } from './list-of-problems.component';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: 500,
  },
  textField: {
    width: 490,
  },
  btn: {
    width: theme.spacing(10),
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

  const { dispatch } = React.useContext(Context);

  //restore all the data back when rendering and when unmounting
  useEffect(() => {
    restoreSearch(dispatch)();
    return restoreSearch(dispatch);
  }, [dispatch]);

  function handleTyping({ target: { value } }: any) {
    setLink(value);
    setHelperText('');
  }

  function handleFilter({ target: { value: searchKey } }: any) {
    setSearchKey(searchKey);
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
      problemCodeList: data.filter(isSubSequance(searchKey)),
    });
  }

  function handleAdd() {
    if (!link) {
      setHelperText('please fill the field');
      return;
    }

    if (link.length > 300) {
      setHelperText("the link shouldn't be more than 300 character long");
      return;
    }

    const problemCodeList = loadData('problemCodeList');

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
      problemCodeList: newProblemCodeList.filter(isSubSequance(searchKey)),
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
        spacing={2}
      >
        <Grid item style={{ height: 67 }}>
          <TextField
            placeholder="Paste The Link Here ..."
            className={classes.textField}
            value={link}
            onChange={handleTyping}
            helperText={toCamelCase(helperText)}
            error={!!helperText.length}
          />
          <Button
            variant="contained"
            className={classes.btn}
            color="primary"
            onClick={handleAdd}
            title="Add A Problem"
          >
            <AddIcon />
          </Button>
        </Grid>
        <Grid item>
          <TextField
            placeholder="Type Something To Search ..."
            className={classes.textField}
            value={searchKey}
            onChange={handleFilter}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleReset}
            className={classes.btn}
            title="Reset Search"
          >
            <RestoreIcon />
          </Button>
        </Grid>
        <Grid item>
          <ListOfProblems />
        </Grid>
      </CardContent>
    </Card>
  );
}
