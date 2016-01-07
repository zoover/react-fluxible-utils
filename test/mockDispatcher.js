'use strict';

const createMockActionContext = require('fluxible/utils').createMockActionContext;

module.exports = class MockDispatcher {

  constructor(store) {
    this.actionContext = createMockActionContext({
      stores: [store]
    });
    this.store = this.actionContext.getStore(store);
  }

  getStore() {
    return this.store;
  }

  dispatch(actionName, payload) {
    this.actionContext.dispatch(actionName, payload);
  }
}
