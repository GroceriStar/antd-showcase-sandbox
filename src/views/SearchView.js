import React, { Component } from 'react';

import {
  Form, Row,
  Col, Input, Button, Icon,
  Layout,

} from 'antd';

// import { Layout } from 'antd';

// import {
//   getRandomRecipe,
//   getFirstFiveRecipes,
//   getFiveRandomIngredients,
//   getRecipeChickenKyivById,
//
// } from "../selectors/selector"


import {
  WrappedAdvancedSearchForm,
  AdvancedSearchForm
} from '@groceristar/antd-showcase-components'


const {
  Header, Footer, Content,
} = Layout;

const SearchView = () => (

  <Layout>
  {/*
    <Header>
      header
    </Header>
    */}
      <Layout>

        <Content>

        <WrappedAdvancedSearchForm />
        </Content>

        <Content>

        <div className="search-result-list">
          Search Result List
        </div>

        </Content>
      </Layout>


    <Footer>
      footer
    </Footer>
  </Layout>


)

export default SearchView
