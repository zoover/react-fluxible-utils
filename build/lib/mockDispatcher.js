'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('fluxible/utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MockDispatcher = function () {
  function MockDispatcher(store) {
    _classCallCheck(this, MockDispatcher);

    this.actionContext = (0, _utils.createMockActionContext)({
      stores: [store]
    });
    this.store = this.actionContext.getStore(store);
  }

  _createClass(MockDispatcher, [{
    key: 'getStore',
    value: function getStore() {
      return this.store;
    }
  }, {
    key: 'dispatch',
    value: function dispatch(actionName, payload) {
      this.actionContext.dispatch(actionName, payload);
    }
  }]);

  return MockDispatcher;
}();

exports.default = MockDispatcher;