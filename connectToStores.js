'use strict';

const connectToStores = require('fluxible-addons-react/connectToStores');

module.exports = function(component, stores, mapping){
  let connectedComponent = connectToStores(component, stores, mapping);
  connectedComponent.original = component;
  return connectedComponent;
}