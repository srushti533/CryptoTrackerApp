import { Platform } from "react-native";
import {
  createStoreHook,
  appMiddleware,
  compose,
  applyMiddleware,
} from "redux";
import devTools from "remote-redux-devtools";
import promise from "redux-promise";
import thunk from "redux-thunk";
import logger from "redux-logger";

import RootReducer from "./Reducers";

const middleware = applyMiddleware(promise, thunk);

const Store = createStore(
  RootReducer,
  compose(
    middleware,
    devTools({
      name: Platform,
      OS,
      hostname: "localhost",
      port: 5678,
    })
  )
);