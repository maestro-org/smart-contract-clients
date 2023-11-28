import { Popups } from "../../types/popups";
import { UPDATE_POPUP } from "../actions/popupsActions";
import { StoreType } from "../types/store.types";

export interface popupsStateType {
  [Popups.tokenSelection]: boolean;
  [Popups.assetSelection]: boolean;
  [Popups.connectWallet]: boolean;
  prefilled: any;
}

export const popupsInitialState: popupsStateType = {
  [Popups.tokenSelection]: false,
  [Popups.assetSelection]: false,
  [Popups.connectWallet]: false,
  prefilled: {},
};

const popupsReducer = (state = popupsInitialState, action: any) => {
  switch (action.type) {
    case UPDATE_POPUP: {
      const { popup, status, prefilled } = action.payload;
      return { ...state, [popup]: status, prefilled };
    }
    default:
      return { ...state };
  }
};

export const getTokenSelectionDialog = (state: StoreType) => state.popups[Popups.tokenSelection];
export const getAssesSelectionDialog = (state: StoreType) => state.popups[Popups.assetSelection];
export const getConnectWalletDialog = (state: StoreType) => state.popups[Popups.connectWallet];
export const getPrefilled = (state: StoreType) => state.popups.prefilled;

export default popupsReducer;
