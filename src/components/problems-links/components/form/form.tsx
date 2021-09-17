import React, { useState, useContext, useEffect, createRef } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  TextField,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import { Context } from '../../../../context';
import { saveData, loadData } from '../../../../common';
import { linkRegx } from '../../common/const';
import { useStyles } from './styles';

const inputRef = createRef<any>();

export const Form = () => {
  const classes = useStyles();
  const [link, setLink] = useState('');
  const [helperText, setHelperText] = useState('');
  const [canAdd, setCanAdd] = useState(false);

  const { dispatch } = useContext(Context);

  useEffect(() => {
    if (canAdd) {
      const scrollingElement = document.scrollingElement || document.body;
      scrollingElement.scrollTop = scrollingElement.scrollHeight;
      inputRef.current.focus();
    }
  }, [canAdd]);

  function handleTyping({ target: { value } }: any) {
    setLink(value);
    setHelperText('');
  }

  function handleAdd() {
    if (!link) {
      setHelperText('Please fill the field');
      return;
    }

    if (link.length > 300) {
      setHelperText("The link shouldn't be more than 300 character long");
      return;
    }

    const problemCodeList = loadData('problemCodeList');

    let newProblemCodeList;
    if (problemCodeList.includes(link)) {
      setHelperText('This link is already added');
      return;
    }

    if (!link.match(linkRegx)) {
      setHelperText('This is not a valid link');
      return;
    }

    const scrollingElement = document.scrollingElement || document.body;
    scrollingElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

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
    setCanAdd(false);
  }

  function handleCancel() {
    setLink('');
    setHelperText('');
    setCanAdd(false);
  }

  return (
    <div>
      {canAdd ? (
        <Card>
          <CardContent>
            <TextField
              inputRef={inputRef}
              fullWidth
              value={link}
              onChange={handleTyping}
              placeholder="Paste The Link Here ..."
              helperText={helperText}
            />
          </CardContent>
          <CardActions
            style={{ background: 'rgb(239, 239, 239)', direction: 'rtl' }}
          >
            <Button
              variant="contained"
              disabled={!link}
              className={classes.saveButton}
              color="primary"
              onClick={handleAdd}
            >
              Save
            </Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </CardActions>
        </Card>
      ) : (
        <Button
          className={classes.addProblem}
          color="primary"
          onClick={() => {
            setCanAdd(true);
          }}
        >
          <AddCircleIcon fontSize="small" /> &ensp;Add Problem
        </Button>
      )}
    </div>
  );
};
