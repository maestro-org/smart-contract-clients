import { Popups } from "../../types/popups";
import { UPDATE_POPUP } from "../actions/popupsActions";
import { StoreType } from "../types/store.types";

export interface popupsStateType {
  [Popups.tokenSelection]: boolean;
  prefilled: any;
}

export const popupsInitialState: popupsStateType = {
  [Popups.tokenSelection]: false,
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
export const getPrefilled = (state: StoreType) => state.popups.prefilled;

export default popupsReducer;