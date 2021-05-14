import React, { useContext } from 'react';
import { Container, Typography, useTheme } from '@material-ui/core';

import { Context } from '../context';
import { StepperComponent } from './stepper';
import { Header } from './header';
import { ProblemsLinksList } from './problems-links';
import { About } from './about';

function Tabs({ tab }: any) {
  switch (tab) {
    case 0:
      return <StepperComponent />;
    case 1:
      return <ProblemsLinksList />;
    case 2:
      return <About />;
    default:
      return <></>;
  }
}

export function App() {
  const theme = useTheme();
  const {
    state: {
      HeaderReducer: { activeTab },
    },
  } = useContext(Context);

  return (
    <>
      <Header />
      <Container>
        <Tabs tab={activeTab} />
      </Container>
      <footer
        style={{
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
        }}
      >
        <Typography align="center" variant="body2">
          {'Developed by '}
          <a
            href="https://m.facebook.com/mahmoud.tarek.3538039"
            rel="noreferrer"
            target="_blank"
            style={{
              color: '#2F80ED',
              textDecoration: 'none',
            }}
          >
            Mahmoud Tarek
          </a>
        </Typography>
      </footer>
    </>
  );
}
