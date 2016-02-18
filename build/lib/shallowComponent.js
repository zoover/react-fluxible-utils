'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('fluxible/utils');

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactShallowTestutils = require('react-shallow-testutils');

var _reactShallowTestutils2 = _interopRequireDefault(_reactShallowTestutils);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShallowComponent = function () {
  function ShallowComponent(component) {
    _classCallCheck(this, ShallowComponent);

    this.component = component;
    this.renderer = (0, _reactAddonsTestUtils.createRenderer)();
    this.props = {};
    this.componentContext = {};
  }

  _createClass(ShallowComponent, [{
    key: 'withProps',
    value: function withProps(props) {
      this.props = _lodash2.default.assign(this.props, props);
      return this;
    }
  }, {
    key: 'withStore',
    value: function withStore(store) {
      var stores = [store];
      this.componentContext = { stores: stores };
      return this;
    }
  }, {
    key: 'getSelf',
    value: function getSelf() {
      var origComponent = this.component.original ? this.component.original : this.component;
      var component = this.componentContext.stores ? this.component : origComponent;
      this.renderer.render(_react2.default.createElement(component, this.props), (0, _utils.createMockComponentContext)(this.componentContext));
      return this.renderer.getRenderOutput();
    }
  }, {
    key: 'get',
    value: function get(childComponent) {
      return _reactShallowTestutils2.default.findWithType(this.getSelf(), childComponent);
    }
  }, {
    key: 'getAll',
    value: function getAll(childComponent) {
      return _reactShallowTestutils2.default.findAllWithType(this.getSelf(), childComponent);
    }
  }]);

  return ShallowComponent;
}();

exports.default = ShallowComponent;