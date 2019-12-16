import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  name: "RAW4S2",
  trace: true,
  traceLimit: 25
});

export const store = createStore(
  rootReducer,
  {
    auth: {
      isLoggedIn: false,
      name: "",
      role: "customer"
    },
    isInit: false
  },
  // composeEnhancers()
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
