# react-fluxible-utils
A collection of extremely useful utils and components for React+Fluxible applications.

To start using this library, first install the package:

```bash
npm install react-fluxible-utils --save
```

Then your all set up to use the following utils and components: 

## `reactSafeRender`

A wrapper around React, to handle errors thrown by the render method and life-cycle events. To use this wrapper, just replace the line where you import React with:

```javascript
// ES6 syntax
import {ReactSafeRender as React} from 'react-fluxible-utils';

// ES5 syntax
const React = require('react-fluxible-utils').ReactSafeRender;
```

## `selectFromObject`

A util to select a property from an object, and if it doesn't exist, return a default value, instead of throwing an error or returning an undefined value. An example of how it can be used:

```javascript
import {selectFromObject} from 'react-fluxible-utils';

const o = { 
  foo: 'bar', 
  xxx: { 
    yyy: 'zzz'
  } 
};

selectFromObject(o, 'foo', 'wut?'); // => returns 'bar'
selectFromObject(o, 'xxx.yyy', 'wut?'); // => returns 'zzz'
selectFromObject(o, 'aaa.bbb', 'wut?'); // => returns 'wut?'
```

## `connectToStores`

A wrapper around the Fluxible `connectToStores`. The purpose of this wrapper is to not lose the original component as normally is the case, but still have it accessible as a `.original` property. This is needed when testing a component with the `shallowComponent` utility as described later. To use this wrapper, just replace the line where you import `connectToStores` with:

```javascript
// ES6 syntax
import {connectToStores} from 'react-fluxible-utils';

// ES5 syntax
const connectToStores = require('react-fluxible-utils').connectToStores;
```

## `shallowComponent`

A class useful for testing React components. This can be used as follows:

```javascript
import {ShallowComponent} from 'react-fluxible-utils';
import ComponentToTest from 'ComponentToTest.jsx';
import Store from 'Store';

// in your tests, you can now do things like this:
const component = new ShallowComponent(ComponentToTest).withProps({foo: 'bar'});

// then you can use component for easily writing tests:
import { expect } from 'chai'; // assuming your using chai
expect(component.get(SomeSubComponent)).to.be.ok;
expect(component.get(SomeSubComponent)).to.have.deep.property(...).that.deep.equals(...); 
expect(component.getAll(SomeOtherSubComponent)).to.have.length(5);

// you can even test store connections
import sinon from 'sinon'; // assuming your using sinon
const sampleData = {xxx: 'yyy'};
sinon.stub(Store.prototype, 'getDetails').returns(sampleData);
const componentWithStore = component.withStore(Store).getSelf();
expect(componentWithStore).to.have.deep.property('props.details').that.deep.equals(sampleData);
Store.prototype.getDetails.restore();
```

## `mockDispatcher`

A class useful for testing Fluxible stores. This can be used as follows:

```javascript
import {MockDispatcher} from 'react-fluxible-utils';
import StoreToTest from 'StoreToTest';

// in your tests, you can now do things like this:
const dispatcherMock = new MockDispatcher(StoreToTest);
const store = dispatcherMock.getStore();

// then you can mock event dispatching for easily writing tests:
import { expect } from 'chai'; // assuming your using chai
const sampleData = {foo: 'bar'};
dispatcherMock.dispatch('DETAILS_LOAD', sampleData);
expect(store.getDetails()).to.eql(sampleData);
```
