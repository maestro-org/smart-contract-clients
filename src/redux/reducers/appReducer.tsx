import { REHYDRATE } from "../actions/appActions";
import { StoreType } from "../types/store.types";

export interface appStateType {
  hydrated: boolean;
}

export const appInitialState: appStateType = {
  hydrated: false,
};

const appReducer = (state = appInitialState, action: any) => {
  switch (action.type) {
    case REHYDRATE: {
      console.log(action);
      return {
        hydrated: true,
      };
    }
    default:
      return { ...state };
  }
};

export const getHydrated = (state: StoreType) => state.app.hydrated;

export default appReducer;
