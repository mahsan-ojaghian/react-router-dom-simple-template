import React from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PartOne from './components/PartOne';
import PartTwo from './components/PartTwo';
import PartThree from './components/PartThree';
import MainNavigation from './components/MainNavigation';

export default function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <PartOne />
        </Route>
        <Route path="/part-two">
          <PartTwo />
        </Route>
        <Route path="/part-three">
          <PartThree />
        </Route>
      </Switch>
    </div>
  );
}
