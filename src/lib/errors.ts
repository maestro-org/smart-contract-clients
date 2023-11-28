import { Errors, errors } from "../types/errors";
import { toast } from "react-toastify";

export const handleServerError = (error: string) => {
  // here we may call sentry or any other tool to catch and structure errors
  toast.error(errors[error as keyof Errors] || errors.UNKNOWN_ERROR);
};

export enum ErrorCode {
  WALLET_NOT_FOUND = "WALLET_NOT_FOUND",
  CARDANO_NOT_FOUND = "CARDANO_NOT_FOUND",
  FAILED_TO_RETRIEVE = "FAILED_TO_RETRIEVE",
  NO_AVAILABLE_WALLETS = "NO_AVAILABLE_WALLETS",
  WALLET_TYPE_REQUIRED = "WALLET_TYPE_REQUIRED",
}
