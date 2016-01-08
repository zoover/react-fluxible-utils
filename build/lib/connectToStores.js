'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (component, stores, mapping) {
  var connectedComponent = (0, _connectToStores2.default)(component, stores, mapping);
  connectedComponent.original = component;
  return connectedComponent;
};

var _connectToStores = require('fluxible-addons-react/connectToStores');

var _connectToStores2 = _interopRequireDefault(_connectToStores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }