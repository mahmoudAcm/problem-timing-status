import React, { useContext } from 'react';
import { Typography, Card, CardContent } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { loadData, saveData } from '../../../../common';
import { Context } from '../../../../context';
import { useStyles } from './styles';

const removeAllCardClickedClasses = (refs: any, classes: any) => {
  refs.forEach((card: any) => {
    if (card && card.current)
      card.current.classList.remove(classes.cardClicked);
  });
};

export const Problem = ({ refs, code }: any) => {
  const classes = useStyles();
  const {
    state: {
      StatusReducer: { status },
      SelectCodeReducer: { code: link, problemCodeList },
      TimerReducer: { isStarted },
    },
    dispatch,
  } = useContext(Context);

  React.useEffect(() => {
    if (!link) removeAllCardClickedClasses(refs, classes);

    const target = refs.get(link);
    if (!target || !target.current) return;

    target.current.classList.add(classes.cardClicked);

    const myCard = refs.get(code);
    if (!myCard || !myCard.current) return;

    const finshed: Array<string> = loadData('finshed') || [];
    if (finshed.includes(code)) myCard.current.classList.add(classes.marked);
  }, [
    link,
    refs,
    classes.cardClicked,
    classes.marked,
    code,
    classes,
    problemCodeList,
  ]);

  function handleClick(evt: any) {
    const { classList } = evt.target;
    if (!classList.length || classList.contains('checkIcon')) return;
    // #1
    removeAllCardClickedClasses(refs, classes);
    refs.get(code).current.classList.add(classes.cardClicked);

    // #2
    dispatch({
      type: 'SELECT_CODE',
      code,
    });

    dispatch({
      type: 'INIT_TIMER',
      ...loadData(code),
      status,
    });

    if (isStarted) document.getElementById('timer-btn')!.click();

    saveData('code', code);
  }

  function handleChecked() {
    const target = refs.get(code).current;
    target.classList.toggle(classes.marked);

    let finshed: Array<string> = loadData('finshed') || [];
    if (!target.classList.contains(classes.marked)) {
      finshed = finshed.filter((cur) => cur !== code);
    } else {
      finshed = [code, ...finshed];
    }

    saveData('finshed', finshed);
  }

  return (
    <Card
      className={classes.problemCard}
      elevation={3}
      onClick={handleClick}
      ref={refs.get(code)}
    >
      <CardContent className="content">
        <CheckCircleIcon
          className="checkIcon"
          color="disabled"
          onClick={handleChecked}
        />
        <Typography
          className="link"
          style={{ fontFamily: 'Varela Round', fontWeight: 700 }}
        >
          {code}
        </Typography>
        {/* <Button
          variant="outlined"
          className="menu"
          size="small"
          onClick={handleMenu}
        >
          <MoreVertIcon />
        </Button> */}
      </CardContent>
    </Card>
  );
};
