import * as Yup from "yup";

import { LinearVestingFields } from "./types";

export const linearVestingSchema = Yup.object().shape({
  [LinearVestingFields.tokenAmount]: Yup.number()
    .label("Token amount")
    .required(({ label }) => `${label} is required`),
  [LinearVestingFields.startDate]: Yup.date().required(`Required field`),
  [LinearVestingFields.endDate]: Yup.date().required(`Required field`),
  [LinearVestingFields.numOfInstallments]: Yup.number()
    .label("Number of Installments")
    .required(({ label }) => `${label} is required`),
});
