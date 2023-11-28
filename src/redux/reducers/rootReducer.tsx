import { combineReducers } from "redux";

import appReducer from "./appReducer";
import popupsReducer from "./popupsReducer";
import walletReducer from "./walletReducer";

const rootReducer = combineReducers({
  app: appReducer,
  popups: popupsReducer,
  wallet: walletReducer,
});

export default rootReducer;
