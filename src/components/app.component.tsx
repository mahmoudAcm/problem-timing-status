import React, { useContext } from 'react';
import { Container, Typography, useTheme } from '@material-ui/core';

import { Context } from '../context';
import { Header } from './header';
import { Home } from './home';
import { About } from './about';

(function isScreenWidthMoreThan1079Pixels() {
  ['load', 'resize'].forEach((eventType) =>
    window.addEventListener(eventType, () => {
      if (window.innerWidth < 1080) {
        alert('Please Open This App With A Screen Width More Than 1079 pixels');
        document.write('');
      }
    }),
  );
})();

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
      <Container>{activeTab === 0 ? <Home /> : <About />}</Container>
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
