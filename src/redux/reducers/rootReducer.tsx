import { combineReducers } from "redux";

import appReducer from "./appReducer";
import popupsReducer from "./popupsReducer";

const rootReducer = combineReducers({
  app: appReducer,
  popups: popupsReducer,
});

export default rootReducer;
