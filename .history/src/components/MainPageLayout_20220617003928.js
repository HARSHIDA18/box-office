/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navs from './components/Navs';
// eslint-disable-next-line import/no-unresolved
import Home from './pages/Home';
import Starred from './pages/Starred';

function App() {
  return (
    <div>
      <Navs />
    </div>
  );
}

export default App;
