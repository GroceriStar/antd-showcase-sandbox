import React, { Component, PureComponent } from 'react';
import { Empty } from 'antd';

const Em = () => {
  return (
    <Empty />
  )
}
export default Em
// ---

import React, { Component, PureComponent } from 'react';
import { Empty, Button } from 'antd';

const EmExtended = () => {
  return (
    <Fragment>
      <Empty
        image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
        description={
          <span>
            Customize <a href="#API">Description</a>
          </span>
        }
      >
        <Button type="primary">Create Now</Button>
      </Empty>
    </Fragment>
  )
}
// https://ant.design/components/empty/#components-empty-demo-config-provider
export default EmExtended
