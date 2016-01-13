'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var selectFromObject = function selectFromObject(object, key, defaultValue) {
  var _index = undefined;
  if (!object) {
    return defaultValue;
  }
  _index = key.indexOf('.');
  if (_index > -1) {
    return selectFromObject(object[key.substring(0, _index)], key.substr(_index + 1), defaultValue);
  }
  if (object[key]) {
    return object[key];
  }
  return defaultValue;
};

exports.default = selectFromObject;