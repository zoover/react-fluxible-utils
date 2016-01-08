import connectToStores from 'fluxible-addons-react/connectToStores';

export default function (component, stores, mapping) {
  const connectedComponent = connectToStores(component, stores, mapping);
  connectedComponent.original = component;
  return connectedComponent;
}
