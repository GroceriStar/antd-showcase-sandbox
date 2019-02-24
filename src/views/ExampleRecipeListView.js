import React, { Component } from 'react'
import _        from "lodash";
import { List } from 'antd';

// import { DefaultList } from '@groceristar/grocery-component'
import { ListWrapperShort } from '@groceristar/antd-showcase-components'

import {
  getRandomRecipe,
  getFirstFiveRecipes,
  getFiveRandomIngredients,
  getRecipeChickenKyivById,
  getShowcaseFiveRecipes
} from '../selector'


const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];



const ExampleRecipeListView = () => {


  return (
    <div>

      <h3 style={{ marginBottom: 16 }}>Default Size</h3>
      <ListWrapperShort data={data} />

      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />



      <h3 style={{ margin: '16px 0' }}>Small Size</h3>
      <ListWrapperShort data={data} size="small" />
      <List
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />

      <h3 style={{ margin: '16px 0' }}>Large Size</h3>
      <ListWrapperShort data={data} size="large" />

      <List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />


    </div>
  );
}

export default ExampleRecipeListView
