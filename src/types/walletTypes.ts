export type Cardano = any;

export interface CardanoWalletProxy {
  enable: () => any;
}

export interface CardanoWallet {
  walletType: WalletType;
  unprocessedWallet: any;
}

export enum WalletType {
  NAMI = "nami",
  ETERNL = "eternl",
  TYPHON = "typhon",
  FLINT = "flint",
}

export interface WalletHook {
  loading: boolean;
  isConnected: boolean;
  walletType: WalletType | undefined;
  walletAddress: string | undefined;
  wallets: WalletType[];
  installedWallets: WalletType[];
  unprocessedWallet: any;
  walletBalance: string | undefined;
  onConnectWallet: (walletType: WalletType) => void;
  onDisconnectWallet: (walletType: WalletType) => void;
}

export class WalletError extends Error {}

export interface WalletProxy {
  isConnected: () => boolean;

  getWalletType: () => WalletType;

  getWalletAddress: () => string | null;

  getWalletAddresses: () => string[];
}

export class UnconnectedWallet implements WalletProxy {
  isConnected(): boolean {
    return false;
  }

  getWalletType(): WalletType {
    throw new WalletError();
  }

  getWalletAddress(): string | null {
    return null;
  }

  getWalletAddresses(): string[] {
    return [];
  }
}
