import { DirectSwapFields, DirectSwapFormValues, LinearVestingSingleField } from "./types";

export const initialValuesDirectSwap: DirectSwapFormValues = {
  [DirectSwapFields.tokenAmount]: "",
};

export const getDirectSwapFields: LinearVestingSingleField[] = [
  {
    type: "text",
    name: DirectSwapFields.tokenAmount,
    placeholder: "0.00000000",
    fullwidth: true,
    tokenInput: true,
  },
];
