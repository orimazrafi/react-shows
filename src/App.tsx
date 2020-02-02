import React from 'react';

import { Navbar } from './components/navbar/Navbar';
import { NotFound } from "./pages/notFound/NotFound"
import { Show } from "./pages/show/Show";
import { Home } from './pages/home/Home';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useShows } from './hooks/useShows';
import { useText } from './hooks/useText';

import './App.css';
import "bootstrap/dist/css/bootstrap.css"

const App: React.FC = () => {
  const [text, handleChange] = useText();
  const { shows } = useShows(text);


  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home shows={shows} handleChange={handleChange} text={text} />
        </Route>
        <Route path="/show/:id">
          <Show />
        </Route>
        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
