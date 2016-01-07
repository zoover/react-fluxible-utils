'use strict';

const React = require('react');
const safeRender = require('react-safe-render');

safeRender(React, {
  errorHandler: (err) => {
    console.error('Error: ' + err.displayName + '.' + err.method + '() failed: ' + err.error);
  }
});

module.exports = React;
