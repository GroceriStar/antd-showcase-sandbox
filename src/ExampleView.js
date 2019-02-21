import React, { Component, Fragment } from 'react';
import _      from "lodash";



// import Header from '../components/Header/Header';

import { Header }   from '@groceristar/antd-showcase-components';
// import Main   from '@groceristar/antd-showcase-components';



import {
  TheCard1, TheCard2,
  TheCard3, TheCard4
} from './components/RecipeList/Cards'

import LoadMoreList      from './components/RecipeList/More'
import RecipeListExample from './components/RecipeList/RecipeList'

// import {
//   TheCard1, TheCard2,
//   TheCard3, TheCard4
// } from './components/RecipeList/Cards'
//
// import LoadMoreList      from './components/RecipeList/More'
// import RecipeListExample from './components/RecipeList/RecipeList'


import "antd/dist/antd.css";
// import "./../styles.css";
import { getFirstFiveRecipes } from "../selectors/selector";


class ExampleCardsView extends Component {

    state = {
      // data: getGroceryCollection(), //Did we need it here? i think we didn use all data from this method

    };

  render() {


    // const data = this.state.data;

    return (
      <Fragment>
        <div className="main">

            <Header />
            <ListWrapper list={getFirstFiveRecipes()} />




            <br />
            <TheCard1 />
            <hr />
            <br />
            <TheCard2 />
            <hr />
            <br />
            <TheCard3 />
            <hr />
            <br />
            <TheCard4 />
            <hr />
            <br />
            <LoadMoreList />
            <hr />
            <br />
            <RecipeListExample />
            <hr />
            <br />


        </div>
      </Fragment>

    );
  }
}

export default ExampleCardsView;
