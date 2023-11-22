import React from "react";

export interface DirectSwapFormValues {
  tokenAmount: string;
}

export enum DirectSwapFields {
  tokenAmount = "tokenAmount",
}

export interface LinearVestingSingleField {
  type: "text" | "number" | "date";
  name: DirectSwapFields;
  placeholder?: string;
  fullwidth: boolean;
  tokenInput?: boolean;
  endIcon?: React.ReactNode;
}
