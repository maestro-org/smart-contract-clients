import { useDispatch, useSelector } from "react-redux";
import { getInstalledWallets, getWalletsList } from "../lib/walletUtils";

import { walletConnect, walletDisconnect } from "../redux/actions/walletActions";
import {
  getIsWalletConnected,
  getLoading,
  getReceiveAddress,
  getUnprocessedWallet,
  getWalletAddress,
  getWalletBalance,
  getWalletType,
} from "../redux/reducers/walletReducer";

import { WalletHook, WalletType } from "../types/walletTypes";

export const useWallet = () => {
  const dispatch = useDispatch();

  const walletType = useSelector(getWalletType) as WalletType;
  const isConnected = useSelector(getIsWalletConnected);
  const loading = useSelector(getLoading);
  const walletAddress = useSelector(getWalletAddress);
  const walletBalance = useSelector(getWalletBalance);
  const receiveAddress = useSelector(getReceiveAddress);
  const unprocessedWallet = useSelector(getUnprocessedWallet);

  const wallets = getWalletsList();

  const installedWallets = getInstalledWallets();

  const onConnectWallet = (walletType: WalletType) => {
    dispatch(walletConnect({ walletType }));
  };

  const onDisconnectWallet = (walletType: WalletType) => {
    dispatch(walletDisconnect({ walletType }));
  };

  return {
    loading,
    isConnected,
    walletType,
    walletAddress,
    walletBalance,
    wallets,
    installedWallets,
    receiveAddress,
    unprocessedWallet,
    onConnectWallet,
    onDisconnectWallet,
  } as WalletHook;
};
