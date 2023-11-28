import { call, put, retry, takeLatest } from "redux-saga/effects";
import { bech32 } from "bech32";
import { Buffer } from "buffer";

import { walletConnectFailure, walletConnect, walletConnectSuccess, WALLET_CONNECT } from "../actions/walletActions";
import {
  Cardano,
  CardanoWallet,
  CardanoWalletProxy,
  UnconnectedWallet,
  WalletProxy,
  WalletType,
} from "../../types/walletTypes";
import { getInstalledWallets, getCardano } from "../../lib/walletUtils";
import { ErrorCode } from "../../lib/errors";
import { toast, ToastPosition } from "react-toastify";

const isEmpty = (value: any) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

export let globalWallet = new UnconnectedWallet();

export const getGlobalWallet = (): WalletProxy => globalWallet;

declare global {
  interface Window {
    cardano: any;
  }
}

const decodeHexAddress = (hexAddress: string) => {
  hexAddress = hexAddress.toLowerCase();
  const addressType = hexAddress.charAt(0);

  if (!["e", "f"].includes(addressType)) {
    throw new TypeError("Unsupported wallet type");
  }

  const networkId = Number(hexAddress.charAt(1)) as any;
  const addressBytes = Buffer.from(hexAddress, "hex");
  const words = bech32.toWords(addressBytes);
  let prefix;

  return { stake: bech32.encode("stake", words, 1000), networkId };
};

const walletSagas = [takeLatest(WALLET_CONNECT, connectWallet)];

const toastParams = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
};

export function* connectWallet(action: ReturnType<typeof walletConnect>): any {
  try {
    const { walletType } = action.payload;
    const cardano = yield retry(5, 1000, getCardano);

    if (!walletType) throw new Error(ErrorCode.WALLET_TYPE_REQUIRED);

    const installedWallets = getInstalledWallets();

    if (isEmpty(installedWallets)) throw new Error(ErrorCode.NO_AVAILABLE_WALLETS);

    const { unprocessedWallet }: CardanoWallet = yield retry(5, 1000, getWallet, cardano, walletType);

    // console.log("unprocessedWallet", unprocessedWallet);

    if (!unprocessedWallet) throw new Error(ErrorCode.FAILED_TO_RETRIEVE);

    const walletAddress: string = yield call(getWalletAddress, unprocessedWallet);

    globalWallet = {
      isConnected: (): boolean => true,

      getWalletType: (): WalletType => walletType,

      getWalletAddress: (): string => walletAddress,

      getWalletAddresses: (): string[] => [walletAddress],
    };

    yield put(
      walletConnectSuccess({
        walletType,
        walletAddress,
        walletBalance: "0",
        unprocessedWallet,
      }),
    );
  } catch (e) {
    console.log("123");

    if (e === "WRONG_NETWORK") {
      toast.error("Please connect to the correct network", toastParams as any);
    }
    // console.error("DEBUG", "connect wallet >>> ", {}, " <<< ", e);
    yield put(walletConnectFailure({ error: "Error happened" }));
  }

  async function getWallet(cardano: Cardano, walletType: WalletType): Promise<CardanoWallet> {
    const cardanoWallet: CardanoWalletProxy | undefined = cardano[walletType];

    if (null != cardanoWallet) {
      const walletInstance = await cardanoWallet.enable();
      let wallet = walletInstance.getChangeAddress ? walletInstance : cardano[walletType];
      return {
        walletType,
        unprocessedWallet: wallet,
      };
    }

    throw new Error(ErrorCode.WALLET_NOT_FOUND);
  }

  async function getWalletAddress(wallet: any) {
    if (wallet?.getChangeAddress) {
      const reward = await wallet?.getRewardAddresses();
      if (reward.length > 0) {
        try {
          const { stake, networkId } = decodeHexAddress(reward[0]);
          if (networkId !== 1) {
            throw "WRONG_NETWORK";
          }
          return stake;
        } catch (error) {
          throw error;
        }
      }
    } else if (wallet?.getRewardAddress) {
      const rewardAddress = await wallet?.getRewardAddress();
      const networkId = await wallet?.getNetworkId();
      // console.log("This is typhon edge case -> ", networkId.data);
      if (networkId.data !== 1) {
        throw "WRONG_NETWORK";
      }
      return rewardAddress.data;
    }
  }
}

export default walletSagas;
