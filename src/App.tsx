import React, { Component } from 'react';

import { Navbar } from './components/navbar/Navbar';
import { NotFound } from "./pages/notFound/NotFound"
import { Show } from "./pages/show/Show";
import { Home } from './pages/home/Home';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import { formatRawShows } from './helpers/show';

class App extends Component {
  state = {
    shows: [],
    querySearch: ""
  };

  handleChange = (querySearch: string) => {
    fetch(`http://api.tvmaze.com/search/shows?q=${querySearch}`)
      .then(response => response.json())
      .then(shows => {
        this.setState({ shows: formatRawShows(shows), querySearch });
      });
  };


  render() {

    return (
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home
                onChange={this.handleChange}
                shows={this.state.shows} />
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
}

export default App;
