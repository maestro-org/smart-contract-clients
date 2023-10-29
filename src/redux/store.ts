import axios from "axios";
import { multiClientMiddleware } from "redux-axios-middleware";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import options from "./axiosConfig";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

const clients = {
  default: {
    client: axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      responseType: "json",
    }),
  },
};

const makeStore: any = () => {
  const sagaMiddleware = createSagaMiddleware();
  const { persistStore, persistReducer } = require("redux-persist");
  const storage = require("redux-persist/lib/storage").default;

  const persistConfig = {
    key: "nextjs",
    whitelist: ["auth"],
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store: any = createStore<any, any, any, any>(
    persistedReducer,
    {},
    // composeWithDevTools(applyMiddleware(axiosMiddleware(client, options), sagaMiddleware)),
    composeWithDevTools(applyMiddleware(multiClientMiddleware(clients, options), sagaMiddleware)),
  );

  store.__persistor = persistStore(store);
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const store = makeStore();

export default store;
