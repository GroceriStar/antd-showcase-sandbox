import React, { Component, Fragment } from 'react';
import "antd/dist/antd.css";

import {
  HeaderShowcase,
  HeaderDropdown,
  // Router
 } from '@groceristar/antd-showcase-components'

import Router from './Router'
//  import ExampleCardsView from './views/ExampleCardsView';
// <Route path="/example/cards" component={ExampleCardsView}>

// {/* }
class App extends Component {
  render() {
    return (
      <Fragment>
        {/*<HeaderShowcase />*/}
          <Router />
      </Fragment>
    );
  }
}

export default App;
