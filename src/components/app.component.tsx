import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Typography, useTheme } from '@material-ui/core';

import { Header } from './header';
import { Playground } from './playground';
import { Home } from './home';
import PrivacyPolicy from './privacy-policy';
import TermsAndConditions from './terms-and-conditions';

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

  return (
    <Router>
      <Header />
      <Container>
        <Route exact path="/" component={Home} />
        <Route path="/playground" component={Playground} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-and-conditions" component={TermsAndConditions} />
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
    </Router>
  );
}
