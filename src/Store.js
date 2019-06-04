// import { Platform } from 'react-native';
// import {
//     createStore,
//     applyMiddleware,
//     compose
//  } from 'redux';
//  import devTools from 'remote-redux-devtools';
//  import promise from 'redux-promise';
//  import thunk from 'redux-thunk';
//  import logger from 'redux-logger';

//  import RootReducer from './Reducers';

//  const middleWare = applyMiddleware(thunk, promise, logger);

//  const Store = createStore (
//      RootReducer,
//      compose (
//          middleWare,
//          devTools({
//              name: Platform.OS,
//              hostname: 'localhost',
//              port: 5678
//          })
//      )
//  )

//  export default Store;

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import RootReducer from './Reducers/index';

const store = createStore(RootReducer, {}, applyMiddleware(ReduxThunk));

export default store;