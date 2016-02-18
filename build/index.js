'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connectToStores = require('./lib/connectToStores');

Object.defineProperty(exports, 'connectToStores', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_connectToStores).default;
  }
});

var _reactSafeRender = require('./lib/reactSafeRender');

Object.defineProperty(exports, 'ReactSafeRender', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reactSafeRender).default;
  }
});

var _mockDispatcher = require('./lib/mockDispatcher');

Object.defineProperty(exports, 'MockDispatcher', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mockDispatcher).default;
  }
});

var _shallowComponent = require('./lib/shallowComponent');

Object.defineProperty(exports, 'ShallowComponent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_shallowComponent).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }