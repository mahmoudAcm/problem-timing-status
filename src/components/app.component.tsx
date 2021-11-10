import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Typography, useTheme, Hidden } from '@material-ui/core';

import { Header } from './header';
import { Playground } from './playground';
import { Home } from './home';
import PrivacyPolicy from './privacy-policy';
import TermsAndConditions from './terms-and-conditions';

// const useWindowHieght = (initialHeight?: number) => {
//   const [height, setHeight] = useState(initialHeight);
//   useEffect(() => {
//     const resize = () => setHeight(window.innerHeight);
//     window.addEventListener('resize', resize);
//     return () => {
//       window.removeEventListener('resize', resize);
//     };
//   }, []);
//   return height;
// };

export function App() {
  const theme = useTheme();

  return (
    <Router>
      <Hidden mdUp>
        <Container>
          <Typography
            variant="h4"
            align="center"
            style={{ textTransform: 'uppercase', padding: theme.spacing(4, 4) }}
          >
            This app dosen't support this screen size!
          </Typography>
        </Container>
      </Hidden>
      <Hidden smDown>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/playground" component={Playground} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route
              path="/terms-and-conditions"
              component={TermsAndConditions}
            />
          </Switch>
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
      </Hidden>
    </Router>
  );
}
