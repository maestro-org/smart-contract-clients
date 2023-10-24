import React from "react";

export interface LinearVestingFormValues {
  token: any;
  tokenAmount: number | null;
  startDate: Date | null;
  endDate: Date | null;
  numOfInstallments: number | null;
  beneficiary: string;
}

export enum LinearVestingFields {
  token = "token",
  tokenAmount = "tokenAmount",
  startDate = "startDate",
  endDate = "endDate",
  numOfInstallments = "numOfInstallments",
  beneficiary = "beneficiary",
}

export interface LinearVestingSingleField {
  type: "text" | "number" | "date";
  name: LinearVestingFields;
  placeholder?: string;
  fullwidth: boolean;
  tokenInput?: boolean;
  endIcon?: React.ReactNode;
}
