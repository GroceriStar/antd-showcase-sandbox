import React, { Component, Fragment } from 'react';
import {
  BrowserRouter, Switch, Route
} from 'react-router-dom';

import HomeView   from './views/HomeView'
// import HomeView   from '@groceristar/antd-showcase-components'

import { ExampleListView, ExampleRecipeListView, ExampleView } from '@groceristar/cards-wrapper'

// import ExampleRecipeListView from './views/ExampleRecipeListView';

import SearchView from '@groceristar/antd-showcase-components'

class Router extends Component {

  render(){

    return (
      <BrowserRouter>
        <Switch>

          <Route path="/"  component={HomeView} exact />
          {/*
            <Route path="/s2"  component={SearchView} exact/>
            <Route path="/cards"  exact component={RecipeListCards} />
          */}
          {<Route path="/list"  component={ExampleRecipeListView} exact /> }
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router
