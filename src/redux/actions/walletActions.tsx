import { WalletType } from "../../types/walletTypes";

export const WALLET_CONNECT = "WALLET_CONNECT";
export const WALLET_DISCONNECT = "WALLET_DISCONNECT";
export const WALLET_UPDATE_RECEIVE_ADDRESS = "WALLET_UPDATE_RECEIVE_ADDRESS";

export interface WalletConnectPayload {
  walletType: WalletType;
}

export const walletConnect = ({ walletType }: WalletConnectPayload) => ({
  type: WALLET_CONNECT,
  payload: {
    walletType,
  },
});

export const walletDisconnect = ({ walletType }: WalletConnectPayload) => ({
  type: WALLET_DISCONNECT,
  payload: {
    walletType,
  },
});

export interface WalletConnectSuccessPayload {
  walletType: WalletType;
  walletAddress: string;
  walletBalance: string;
  unprocessedWallet: any;
}

export const walletConnectSuccess = ({
  walletType,
  walletAddress,
  walletBalance,
  unprocessedWallet,
}: WalletConnectSuccessPayload) => ({
  type: `${WALLET_CONNECT}_SUCCESS`,
  payload: {
    walletType,
    walletAddress,
    walletBalance,
    unprocessedWallet,
  },
});

export interface WalletConnectFailurePayload {
  error: string;
}

export const walletConnectFailure = ({ error }: WalletConnectFailurePayload) => ({
  type: `${WALLET_CONNECT}_FAIL`,
  payload: {
    error,
  },
});

export interface UpdateWalletReceiveAddressPayload {
  receiveAddress: string;
}

export const updateWalletReceiveAddress = ({ receiveAddress }: UpdateWalletReceiveAddressPayload) => ({
  type: WALLET_UPDATE_RECEIVE_ADDRESS,
  payload: {
    receiveAddress,
  },
});
