import { WALLET_CONNECT, WALLET_DISCONNECT, WALLET_UPDATE_RECEIVE_ADDRESS } from "../actions/walletActions";
import { WalletType } from "../../types/walletTypes";
import { StoreType } from "../types/store.types";

export interface walletStateType {
  walletType?: WalletType;
  walletAddress: string;
  walletBalance: string;
  error: string;
  isLoading?: boolean;
  isConnected: boolean;
  receiveAddress?: string;
  unprocessedWallet: any;
}

const walletInitialState: walletStateType = {
  walletAddress: "",
  walletBalance: "",
  error: "",
  isConnected: false,
  receiveAddress: "",
  unprocessedWallet: null,
};

const walletReducer = (state = walletInitialState, action: any) => {
  switch (action.type) {
    case WALLET_CONNECT: {
      return {
        ...state,
        walletType: action.payload.walletType,
        isLoading: true,
      };
    }

    case WALLET_DISCONNECT: {
      return {
        ...walletInitialState,
      };
    }

    case `${WALLET_CONNECT}_SUCCESS`: {
      const { walletType, walletAddress, walletBalance, unprocessedWallet } = action.payload;
      return {
        ...state,
        walletType,
        walletBalance,
        walletAddress,
        unprocessedWallet,
        isLoading: false,
        isConnected: true,
      };
    }

    case WALLET_UPDATE_RECEIVE_ADDRESS: {
      const { receiveAddress } = action.payload;
      return { ...state, receiveAddress };
    }

    case `${WALLET_CONNECT}_FAIL`: {
      const { error } = action.payload;
      return { ...state, error, isLoading: false, isConnected: false };
    }

    default:
      return { ...state };
  }
};

export const getWalletType = (state: StoreType) => state.wallet?.walletType;
export const getWalletAddress = (state: StoreType) => state.wallet?.walletAddress;
export const getWalletBalance = (state: StoreType) => state.wallet?.walletBalance;
export const getIsWalletConnected = (state: StoreType) => state.wallet?.isConnected;
export const getLoading = (state: StoreType) => state.wallet?.isLoading;
export const getReceiveAddress = (state: StoreType) => state.wallet?.receiveAddress;
export const getUnprocessedWallet = (state: StoreType) => state.wallet?.unprocessedWallet;

export default walletReducer;
