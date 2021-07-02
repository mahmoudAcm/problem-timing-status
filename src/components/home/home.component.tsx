import React from 'react';
import { Link } from 'react-router-dom';
import { Theme, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  about: {
    width: 790,
    marginLeft: '50%',
    transform: 'translateX(-50%)',
    marginTop: theme.spacing(1.5) + '%',
  },
}));

export function Home() {
  const classes = useStyles();

  return (
    <Card className={classes.about}>
      <CardContent>
        <br />
        <Typography align="center">
          1.This app was inspired by Dr. Mostafa's saad{' '}
          <a href="https://goo.gl/unDETI" rel="noreferrer" target="_blank">
            sheet
          </a>
          .
        </Typography>
        <br />
        <Typography align="center">
          2.In this sheet the constant performance in a problem have divided
          into four major timing columns reading, thinking, coding, and
          debugging for more info about the sheet see this{' '}
          <a
            href="https://www.youtube.com/watch?v=c3lmvYBxgwE"
            rel="noreferrer"
            target="_blank"
          >
            video
          </a>
          .
        </Typography>
        <br />
        <Typography align="center">
          3.Problem timing status is a timer used for recording your timing
          preformance in a problem.
        </Typography>
        <br />
        <Typography align="center">
          3.1.your problems list are saved into your local machine and also all
          other data you see on this site. no external storage are used.
        </Typography>
        <br />
        <Typography align="center">
          3.2.you can add, remove, filter and get summary of a problem from your
          problems list.
        </Typography>
        <br />
        <Typography align="center">
          4. The problem id is its link i.e
          https://codeforces.com/contest/1480/problem/B.
        </Typography>
        <br />
        <Typography align="center">
          5.You can check the app code{' '}
          <a
            href="https://github.com/mahmoudAcm/problem-timing-status"
            rel="noreferrer"
            target="_blank"
          >
            here
          </a>
          .
        </Typography>
        <br />
        <Typography align="center">
          5.1.Create an{' '}
          <a
            href="https://github.com/mahmoudAcm/problem-timing-status/issues/new"
            rel="noreferrer"
            target="_blank"
          >
            issue
          </a>
          .
        </Typography>
        <br />
        <Typography align="center" variant="body2">
          <Link to="/problem-timing-status/privacy-policy">Privacy Policy</Link>
          .
        </Typography>
        <Typography align="center" variant="body2">
          <Link to="/problem-timing-status/terms-and-conditions">
            Terms and Conditions
          </Link>
          .
        </Typography>
      </CardContent>
    </Card>
  );
}
