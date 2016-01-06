'use strict';

import connectToStores from 'fluxible-addons-react/connectToStores';

export default function(component, stores, mapping){
  let connectedComponent = connectToStores(component, stores, mapping);
  connectedComponent.original = component;
  return connectedComponent;
}