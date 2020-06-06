import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} name="Home" />
        <Route path="/create-point" component={CreatePoint} name="create-point" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;