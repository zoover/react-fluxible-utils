import React from 'react';
import { createMockComponentContext } from 'fluxible/utils';
import { createRenderer } from 'react-addons-test-utils';
import ShallowTestUtils from 'react-shallow-testutils';
import _ from 'lodash';

export default class ShallowComponent {
  constructor(component) {
    this.component = component;
    this.renderer = createRenderer();
    this.props = {};
    this.componentContext = {};
  }

  withProps(props) {
    this.props = _.assign(this.props, props);
    return this;
  }

  withStore(store) {
    const stores = [store];
    this.componentContext = { stores };
    return this;
  }

  getSelf() {
    const origComponent = this.component.original ? this.component.original : this.component;
    const component = this.componentContext.stores ? this.component : origComponent;
    this.renderer.render(
      React.createElement(component, this.props),
      createMockComponentContext(this.componentContext)
    );
    return this.renderer.getRenderOutput();
  }

  get(childComponent) {
    return ShallowTestUtils.findWithType(this.getSelf(), childComponent);
  }

  getAll(childComponent) {
    return ShallowTestUtils.findAllWithType(this.getSelf(), childComponent);
  }
}
