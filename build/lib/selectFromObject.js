'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (object, key, defaultValue) {
  var _index = undefined;
  if (typeof object === 'undefined') {
    return defaultValue;
  }
  _index = key.indexOf('.');
  if (_index > -1) {
    return this._fetchTranslation(object[key.substring(0, _index)], key.substr(_index + 1));
  }
  if (object[key]) {
    return object[key];
  }
  return defaultValue;
};