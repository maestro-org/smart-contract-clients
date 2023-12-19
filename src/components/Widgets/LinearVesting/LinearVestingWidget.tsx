import { styled, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { FC, useEffect, useState } from "react";

import { getLinearVestingFields, initialValuesLinearVesting } from "../../../forms/linearVesting/form";
import { linearVestingSchema } from "../../../forms/linearVesting/validation";
import {
  LinearVestingFields,
  LinearVestingFormValues,
  LinearVestingSingleField,
} from "../../../forms/linearVesting/types";

import WidgetCard from "../../Card/WidgetCard";
import { TextField } from "../../Textfield/Textfield";
import { Button } from "../../Button/Button";
import TokenTextfield from "../../Textfield/TokenTextfield";
import DatePicker from "../../DatePicker/DatePicker";
import { DateIcon } from "../../Icons";
import { updatePopup } from "../../../redux/actions/popupsActions";
import { Popups } from "../../../types/popups";
import { useDispatch } from "react-redux";
import LinearVestingFee from "./components/LinearVestingFee";
import { sanitizeValue } from "../../../lib/decimalPrecision";
import { Token } from "../../../types/token";
import { useWallet } from "../../../hooks/useWallet";
import ConnectWalletButton from "../../Button/ConnectWalletButton";

interface Props {
  onNext?: () => void;
}

const LinearVestingWidget: FC<Props> = ({ onNext }) => {
  const [initialyValidated, setInitialyValidated] = useState(false);
  const { isConnected } = useWallet();

  const dispatch = useDispatch();

  const onSubmit = (values: LinearVestingFormValues) => {
    console.log(values);
    if (onNext) onNext();
  };

  const { values, touched, errors, isValid, validateForm, handleChange, handleBlur, setFieldValue, handleSubmit } =
    useFormik({
      initialValues: initialValuesLinearVesting,
      validationSchema: linearVestingSchema,
      validateOnChange: true,
      enableReinitialize: true,
      onSubmit,
    });

  useEffect(() => {
    const validate = async () => {
      await validateForm(values);
      setInitialyValidated(true);
    };

    validate();
  }, []);

  const checkError = (name: string) => !!errors[name as keyof typeof errors] && !!touched[name as keyof typeof touched];

  const getHelperText = (name: string) =>
    errors[name as keyof typeof errors] && touched[name as keyof typeof touched]
      ? (errors[name as keyof typeof errors] as string)
      : undefined;

  const handleDateChange = (name: LinearVestingFields, value: Date) => {
    setFieldValue(name, value);
  };

  const isFormValid = initialyValidated && isValid;

  const handleTokenSelect = (token: Token) => {
    if (!token) return;
    setFieldValue(LinearVestingFields.token, token);
    dispatch(updatePopup({ popup: Popups.tokenSelection, status: false }));
    setFieldValue(LinearVestingFields.tokenAmount, "");
  };

  const openPopup = () => {
    dispatch(
      updatePopup({ popup: Popups.tokenSelection, status: true, prefilled: { handleTokenClick: handleTokenSelect } }),
    );
  };

  const handleTokenAmountChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!values.token) return;
    const newValue = sanitizeValue(event.target.value, values.token.decimalPrecision);
    if (newValue === undefined) return;
    event.target.value = newValue;
    handleChange(event);
  };

  const getField = (field: LinearVestingSingleField) => {
    if (field.name === LinearVestingFields.tokenAmount) {
      return (
        <TokenWrapper className="123">
          <TokenTextfield
            handleClick={openPopup}
            token={values.token || undefined}
            textfield={{
              name: field.name,
              type: field.type,
              customVariant: "text",
              value: values[field.name],
              onChange: handleTokenAmountChange,
              onBlur: handleBlur,
              placeholder: field.placeholder,
              error: checkError(field.name),
              helperText: getHelperText(field.name),
              errorPosition: "bottom",
              withoutErrorLabel: true,
            }}
          />

          <Separator />
        </TokenWrapper>
      );
    }

    if (field.type === "date") {
      return (
        <DatePicker
          format="dd/MM/yy"
          slots={{
            openPickerIcon: () => <DateIcon />,
          }}
          onChange={handleDateChange.bind(null, field.name)}
          error={checkError(field.name)}
          // helperText={getHelperText(field.name)}
          errorPosition="bottom"
          label={getHelperText(field.name) || field.placeholder}
        />
      );
    }

    return (
      <TextField
        name={field.name}
        type={field.type}
        customVariant="outlined"
        value={values[field.name]}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={field.placeholder}
        label={getHelperText(field.name) || field.placeholder}
        error={checkError(field.name)}
        // helperText={getHelperText(field.name)}
        errorPosition="bottom"
        endIcon={field.endIcon}
      />
    );
  };

  return (
    <OuterWrapper>
      <WidgetCard title="Linear Vesting">
        <Form onSubmit={handleSubmit}>
          <FieldsWrapper>
            {getLinearVestingFields.map((item) => (
              <FieldWrapper key={item.name} fullWidth={item.fullwidth}>
                {getField(item)}
              </FieldWrapper>
            ))}
          </FieldsWrapper>

          <ButtonWrapper>
            {isConnected ? (
              <Button type="submit" disabled={!isFormValid} onKeyDown={(e) => e.preventDefault()}>
                <Typography color="gray.50" variant="paragraphMedium">
                  Submit
                </Typography>
              </Button>
            ) : (
              <ConnectWalletButton />
            )}
          </ButtonWrapper>

          {isFormValid && (
            <LinearVestingFee
              tokenAmount={values.tokenAmount}
              numberOfInstallments={values.numOfInstallments}
              token={values.token}
              startDate={values.startDate}
              endDate={values.endDate}
            />
          )}
        </Form>
      </WidgetCard>
    </OuterWrapper>
  );
};

const Separator = styled("div")({
  width: "100%",
  height: "1px",
  background: "#e6e6e6",
});

const TokenWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

const OuterWrapper = styled("div")({
  width: "400px",
});

const FieldsWrapper = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  rowGap: "24px",
  padding: "20px",
  background: "white",
  boxShadow: "0px 10px 35px 0px rgba(0, 0, 0, 0.08)",
  borderRadius: "12px",
});

const Form = styled("form")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  rowGap: "20px",
});

const FieldWrapper = styled("div")<{ fullWidth: boolean }>(({ fullWidth }) => ({
  width: fullWidth ? "100%" : "calc(50% - 8px)",

  "& input::-webkit-inner-spin-button": {
    display: "none",
  },
}));

const ButtonWrapper = styled("div")({
  width: "100%",

  "& button": {
    width: "100%",
    height: "44px",
    borderRadius: "4px",
  },
});

export default LinearVestingWidget;
