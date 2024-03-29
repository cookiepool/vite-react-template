import React from 'react';
import { HashRouter as Router, Switch, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '@/router';
import Loading from '@/components/Loading';

import styles from './App.module.scss';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className={styles.container}>
          <div className={styles['title-wraper']}>
            <Link to="/">
              <span className={styles['link-title']}>Home</span>
            </Link>
            <span className={styles['link-line']}> | </span>
            <Link to="/about">
              <span className={styles['link-title']}>About</span>
            </Link>
            <span className={styles['link-line']}> | </span>
            <Link to="/emotion-css">
              <span className={styles['link-title']}>EmotionCss</span>
            </Link>
            <span className={styles['link-line']}> | </span>
            <Link to="/antd-test">
              <span className={styles['link-title']}>Antd-Test</span>
            </Link>
          </div>
          <Switch>
            <React.Suspense fallback={<Loading></Loading>}>
              {renderRoutes(routes)}
            </React.Suspense>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
