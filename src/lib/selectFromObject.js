export default function (object, key, defaultValue) {
  let _index;
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
}
