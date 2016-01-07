'use strict';

const React = require('react');
const createMockComponentContext = require('fluxible/utils').createMockComponentContext;
const createRenderer = require('react-addons-test-utils').createRenderer;
const ShallowTestUtils = require('react-shallow-testutils');

module.exports = class ShallowComponent {
  constructor(component) {
    this.component = component;
    this.renderer = createRenderer();
    this.props = {};
    this.componentContext = {};
  }

  withProps(props) {
    this.props = props;
    return this;
  }

  withStore(store) {
    const stores = [store];
    this.componentContext = {stores};
    return this;
  }

  getSelf(){
    const component = this.componentContext.stores ? this.component : (this.component.original ? this.component.original : this.component);
    this.renderer.render(React.createElement(component, this.props), createMockComponentContext(this.componentContext));
    return this.renderer.getRenderOutput();
  }

  get(childComponent) {
    return ShallowTestUtils.findWithType(this.getSelf(), childComponent);
  }

  getAll(childComponent) {
    return ShallowTestUtils.findAllWithType(this.getSelf(), childComponent);
  }
}
