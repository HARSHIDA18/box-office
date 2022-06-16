/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navs from './components/Navs';
// eslint-disable-next-line import/no-unresolved
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/starred">
          <Starred />
        </Route>

        <Route>
          <div>Not found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;