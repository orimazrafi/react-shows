import React from 'react';

import store from "./redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Navbar } from './components/navbar/Navbar';
import { NotFound } from "./pages/notFound/NotFound"
import { Show } from "./pages/show/Show";
import { Home } from './pages/home/Home';
import { useShows } from './hooks/useShows';
import { useText } from './hooks/useText';

import './App.css';
import "bootstrap/dist/css/bootstrap.css"

const App: React.FC = () => {
  const [text, handleChange] = useText();
  const { shows } = useShows(text);


  return (
    <Provider
      store={store}>
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
    </Provider>
  );
}

export default App;
