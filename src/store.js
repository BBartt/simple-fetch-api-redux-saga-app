import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { reducer } from "./redux";
import { watcherSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(
  reducer,
  compose(applyMiddleware(sagaMiddleware), reduxDevTools)
);

sagaMiddleware.run(watcherSaga);

export default store;
