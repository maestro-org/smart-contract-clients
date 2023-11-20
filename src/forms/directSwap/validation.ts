import * as Yup from "yup";

import { DirectSwapFields } from "./types";

export const directSwapSchema = Yup.object().shape({
  [DirectSwapFields.tokenAmount]: Yup.number().required(({ label }) => `${label} is required`),
});
