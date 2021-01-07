import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, HashRouter,
} from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import './sass/index.scss';
import PartnerRequests from './views/PartnerRequests';


const App = () => (
  <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/PartnerRequests" exact component={PartnerRequests} />
      </Switch>
    </HashRouter>
  </Router>
);

export default App;
