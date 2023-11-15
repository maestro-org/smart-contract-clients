import { DateIcon } from "../../components/Icons";
import { LinearVestingFields, LinearVestingFormValues, LinearVestingSingleField } from "./types";

export const initialValuesLinearVesting: LinearVestingFormValues = {
  [LinearVestingFields.token]: null,
  [LinearVestingFields.tokenAmount]: "",
  [LinearVestingFields.startDate]: null,
  [LinearVestingFields.endDate]: null,
  [LinearVestingFields.numOfInstallments]: null,
  [LinearVestingFields.beneficiary]: "",
};

export const getLinearVestingFields: LinearVestingSingleField[] = [
  {
    type: "text",
    name: LinearVestingFields.tokenAmount,
    placeholder: "0.00000000",
    fullwidth: true,
    tokenInput: true,
  },
  {
    type: "date",
    name: LinearVestingFields.startDate,
    placeholder: "Start date",
    fullwidth: false,
    endIcon: <DateIcon />,
  },
  {
    type: "date",
    name: LinearVestingFields.endDate,
    placeholder: "End date",
    fullwidth: false,
    endIcon: <DateIcon />,
  },
  {
    type: "number",
    name: LinearVestingFields.numOfInstallments,
    placeholder: "Number of Installments",
    fullwidth: true,
  },
  {
    type: "text",
    name: LinearVestingFields.beneficiary,
    placeholder: "Beneficiary address",
    fullwidth: true,
  },
];
