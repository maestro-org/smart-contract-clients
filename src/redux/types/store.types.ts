import { appStateType } from "../reducers/appReducer";
import { popupsStateType } from "../reducers/popupsReducer";

export interface StoreType {
  app: appStateType;
  popups: popupsStateType;
}
