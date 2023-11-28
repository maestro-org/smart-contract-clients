import { appStateType } from "../reducers/appReducer";
import { popupsStateType } from "../reducers/popupsReducer";
import { walletStateType } from "../reducers/walletReducer";

export interface StoreType {
  app: appStateType;
  popups: popupsStateType;
  wallet: walletStateType;
}
