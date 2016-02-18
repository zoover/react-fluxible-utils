import React from 'react';
import safeRender from 'react-safe-render';

safeRender(React, {
  errorHandler: (err) => {
    console.error(`Error: ${err.displayName}.${err.method}() failed: ${err.error}`);
  },
});

export default React;
