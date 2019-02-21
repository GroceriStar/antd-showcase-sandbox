import React, { Component, PureComponent } from 'react';
// import { HeaderShowcase, Menu }   from '@groceristar/antd-showcase-components';

import { List, Card } from 'antd';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];

const GridList = () => {
  return (
    <Fragment>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Card title={item.title}>Card content</Card>
          </List.Item>
        )}
      />
    </Fragment>
  )
}
export default GridRespon
