import React, { Component, Fragment } from 'react';
import "antd/dist/antd.css";
import {
  Header,
  HeaderDropdown,
  Router
 } from '@groceristar/antd-showcase-components'


//  import ExampleCardsView from './views/ExampleCardsView';
// <Route path="/example/cards" component={ExampleCardsView}>


class App extends Component {
  render() {
    return (
      <Fragment>
        // <Header />
        <Router />
      </Fragment>
    );
  }
}

export default App;
