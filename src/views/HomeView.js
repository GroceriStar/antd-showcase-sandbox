import React, { Component, Fragment } from 'react';
import {
  HeaderShowcase,
  ListWrapperEmpty

} from '@groceristar/antd-showcase-components';

import { Cards, ListWrapper, Em }   from '@groceristar/cards-wrapper';

import _ from "lodash";

import "antd/dist/antd.css";


import {
  getFirstFiveRecipes
} from "../selector";


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

            <ListWrapperEmpty list={list} />
           {/* <Cards /> */}
        </div>
      </Fragment>

    );
  }
}

export default HomeView;
