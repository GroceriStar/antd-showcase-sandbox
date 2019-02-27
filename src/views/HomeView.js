import React, { Component, Fragment } from 'react';
import _ from "lodash";

import "antd/dist/antd.css";


import {
  HeaderShowcase,
  ListWrapper 
} from '@groceristar/antd-showcase-components';

import { Cards }   from '@groceristar/cards-wrapper';

import { getFirstFiveRecipes } from "../selector";


class HomeView extends Component {

    state = {
      // data: getGroceryCollection(), //Did we need it here? i think we didn use all data from this method

    };

  render() {

    const list = getFirstFiveRecipes();
    console.log(list);
    // const data = this.state.data;

    return (
      <Fragment>
        <div className="main">

            <HeaderShowcase />

            <ListWrapper list={list} />
           <Cards />
        </div>
      </Fragment>

    );
  }
}

export default HomeView;
