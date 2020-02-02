import React from 'react';

import { Navbar } from './components/navbar/Navbar';
import { NotFound } from "./pages/notFound/NotFound"
import { Show } from "./pages/show/Show";
import { Home } from './pages/home/Home';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/show/:id">
            <Show />
          </Route>
          <Route path="/">
            <NotFound />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
