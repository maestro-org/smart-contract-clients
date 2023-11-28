import { WalletType } from "../types/walletTypes";
import { ErrorCode } from "./errors";

export function getCardano(): any {
  if (typeof window !== "undefined") {
    const { cardano }: any = window.parent.window;
    if (null != cardano) return cardano;
    throw new Error(ErrorCode.CARDANO_NOT_FOUND);
  }
}

export function getInstalledWallets(): WalletType[] {
  try {
    const cardano = getCardano();
    return getWalletsList().filter((s) => !!cardano?.[s]);
  } catch (e) {
    if (e === ErrorCode.CARDANO_NOT_FOUND) {
      console.log("Cardano not found");
    }
    return [];
  }
}

export function getWalletsList(): WalletType[] {
  return Object.values(WalletType);
}
