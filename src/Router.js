import React, { Component, Fragment } from 'react';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';

import HomeView   from './views/HomeView'
// import HomeView   from '@groceristar/antd-showcase-components'
import SearchView from '@groceristar/antd-showcase-components'


class Router extends Component {

  render(){

    return (
      <BrowserRouter>
        <Switch>

          <Route path="/"  component={HomeView} exact/>
          {/*<Route path="/s2"  component={SearchView} exact/>
          <Route path="/cards"  exact component={RecipeListCards} />*/}

        </Switch>
      </BrowserRouter>
    )
  }
}

export Router
