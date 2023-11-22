import * as Yup from "yup";

import { LinearVestingFields } from "./types";

export const linearVestingSchema = Yup.object().shape({
  [LinearVestingFields.tokenAmount]: Yup.number().required(({ label }) => `${label} is required`),
  [LinearVestingFields.startDate]: Yup.date().typeError("Incorrect value").required(`Required field`),
  [LinearVestingFields.endDate]: Yup.date().typeError("Incorrect value").required(`Required field`),
  [LinearVestingFields.numOfInstallments]: Yup.number().required(`Required field`),
});
