import React, { Component, Fragment } from 'react';
import { ListWrapper } from '@groceristar/antd-showcase-components'

import { getFirstFiveRecipes } from "./selectors/selector";
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
