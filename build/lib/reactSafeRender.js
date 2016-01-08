'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSafeRender = require('react-safe-render');

var _reactSafeRender2 = _interopRequireDefault(_reactSafeRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactSafeRender2.default)(_react2.default, {
  errorHandler: function errorHandler(err) {
    console.error('Error: ' + err.displayName + '.' + err.method + '() failed: ' + err.error);
  }
});

exports.default = _react2.default;