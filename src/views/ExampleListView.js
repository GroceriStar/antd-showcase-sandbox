import React, { Component, Fragment } from 'react';
import {
  Header
} from '@groceristar/antd-showcase-components'

import { ListWrapper }   from '@groceristar/cards-wrapper';

import {
  getFirstFiveRecipes
} from "../selector";

import "antd/dist/antd.css";

const ExampleListView = () => {

  const list = getFirstFiveRecipes();
  console.log(list);

  return (
    <Fragment>

        <ListWrapper list={list} />


      </Fragment>
  )
}
// <Cards />
//
// {/* <ClearCardsExample /> */}

export default ExampleListView
