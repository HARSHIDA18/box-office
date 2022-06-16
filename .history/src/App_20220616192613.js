/* eslint-disable react/self-closing-comp */
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Switch, Route } from 'react-router-dom';

function App() {
  // eslint-disable-next-line react/self-closing-comp
  return (
    <Switch>
      <Route path="/">This Is Home Page</Route>
    </Switch>
  );
}

export default App;
