import React, { useEffect, useState, useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';
import RestoreIcon from '@material-ui/icons/Restore';

import { useStyles } from './styles';
import { Context } from '../../../../context';
import { saveData, loadData } from '../../../../common';
import { linkRegx } from '../../common/const';
import {
  restoreSearch,
  isSubSequance,
  toCamelCase,
} from '../../common/helpers';

export function Form() {
  const classes = useStyles();
  const [link, setLink] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [helperText, setHelperText] = useState('');

  const { dispatch } = useContext(Context);

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
    <Card style={{ width: 730 }}>
      <CardContent>
        <Grid
          container
          spacing={3}
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Grid item style={{ height: 67 }}>
            <FormControl>
              <Input
                placeholder="Paste The Link Here ..."
                className={classes.textField}
                value={link}
                onChange={handleTyping}
                error={!!helperText.length}
                fullWidth
                endAdornment={
                  <InputAdornment
                    position="end"
                    onClick={handleAdd}
                    title="Add A Problem"
                    className={classes.iconButton}
                  >
                    <AddIcon />
                  </InputAdornment>
                }
              />
              <FormHelperText error={!!helperText.length}>
                {toCamelCase(helperText)}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <Input
                placeholder="Type Something To Search ..."
                className={classes.textField}
                value={searchKey}
                onChange={handleFilter}
                fullWidth
                endAdornment={
                  <InputAdornment
                    position="end"
                    onClick={handleReset}
                    title="Reset Search"
                    className={classes.iconButton}
                  >
                    <RestoreIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions classes={{ root: classes.cardActions }}></CardActions>
    </Card>
  );
}
