import React, { useContext, useState } from 'react';
import { Card, CardContent, Typography, Tabs, Tab } from '@material-ui/core';

import { useStyles } from './timer.module';
import { Summary } from './summary.component';
import { Code } from '../code/code.component';
import { StatusMenu } from './status-menu.component';
import { TimerController } from './timer-controller.component';
import { StateContext } from '../';

function TabPanel({ index, value, children, ...rest }: any) {
  return (
    <div style={{ display: index === value ? 'block' : 'none' }} {...rest}>
      {children}
    </div>
  );
}

function TimerControllerWrapper({ code }: { code: string }) {
  if (code)
    return (
      <>
        <StatusMenu />
        <TimerController />
      </>
    );
  return <></>;
}

export function Timer() {
  const context = useContext(StateContext);
  const [value, setValue] = useState(0);
  const classes = useStyles(value);

  function handleChange(_: unknown, newValue: number) {
    setValue(newValue);
    if (newValue === 2) {
      context.setIsOpen(false);
      setTimeout(() => {
        context.setIsOpen(true);
      }, 200);
    }
  }

  return (
    <>
      <Summary />
      <Card className={classes.timer} elevation={5}>
        <CardContent>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Timer" />
            <Tab label="Discover More" />
            <Tab label="Get A Summary" />
          </Tabs>
          <div className={classes.center}>
            <TabPanel value={value} index={0} className={classes.tabPanel}>
              <div className={classes.center}>
                <Code />
                <TimerControllerWrapper code={context.code} />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} className={classes.tabPanel}>
              <ul>
                <li>
                  <Typography
                    variant="caption"
                    className={classes.discoverMoreText}
                  >
                    Codeforces code consists of contest id followed by problem
                    number i.e 101A
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="caption"
                    className={classes.discoverMoreText}
                  >
                    Uva code consists of problem id i.e 1024
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="caption"
                    className={classes.discoverMoreText}
                  >
                    Spoj code consist of uppercase letters with numbers i.e EOI2
                  </Typography>
                </li>
                <li>
                  <Typography
                    variant="caption"
                    className={classes.discoverMoreText}
                  >
                    Other judges you can pick what ever you like and easy to
                    memorize
                  </Typography>
                </li>
              </ul>
            </TabPanel>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
