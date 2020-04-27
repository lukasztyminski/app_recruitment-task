import React from 'react';
import styles from 'App.module.scss';
import Header from 'components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { routes } from 'routes';
import Components from 'views/Components';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Header />
        <Route path={routes.components} component={Components} exact />
      </div>
    </Router>
  );
}

export default App;
