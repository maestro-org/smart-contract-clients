import { Typography, styled } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";

import { getLinearVestingFields, initialValuesLinearVesting } from "../../forms/linearVesting/form";
import { linearVestingSchema } from "../../forms/linearVesting/validation";
import {
  LinearVestingFields,
  LinearVestingFormValues,
  LinearVestingSingleField,
} from "../../forms/linearVesting/types";

import WidgetCard from "../Card/WidgetCard";
import { TextField } from "../Textfield/Textfield";
import { Button } from "../Button/Button";
import TokenTextfield from "../Textfield/TokenTextfield";
import DatePicker from "../DatePicker/DatePicker";
import { DateIcon, InfoBlackIcon, SmallArrowDown } from "../Icons";

const LinearVestingWidget = () => {
  const [initialyValidated, setInitialyValidated] = useState(false);

  const onSubmit = (values: LinearVestingFormValues) => {
    console.log(values);
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

  const getField = (field: LinearVestingSingleField) => {
    if (field.name === LinearVestingFields.tokenAmount) {
      return (
        <TokenTextfield
          balance={0}
          handleClick={console.log}
          textfield={{
            name: field.name,
            type: field.type,
            variant: "outlined",
            value: values[field.name],
            onChange: handleChange,
            onBlur: handleBlur,
            placeholder: field.placeholder,
            error: checkError(field.name),
            helperText: getHelperText(field.name),
            errorPosition: "bottom",
          }}
        />
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
          helperText={getHelperText(field.name)}
          errorPosition="bottom"
        />
      );
    }

    return (
      <TextField
        name={field.name}
        type={field.type}
        variant="outlined"
        value={values[field.name]}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={field.placeholder}
        error={checkError(field.name)}
        helperText={getHelperText(field.name)}
        errorPosition="bottom"
        endIcon={field.endIcon}
      />
    );
  };

  return (
    <OuterWrapper>
      <WidgetCard title="Linear Vesting">
        <Form onSubmit={handleSubmit}>
          {getLinearVestingFields.map((item) => (
            <FieldWrapper key={item.name} fullWidth={item.fullwidth}>
              {getField(item)}
            </FieldWrapper>
          ))}
          <ButtonWrapper>
            <Button type="submit" onKeyDown={(e) => e.preventDefault()}>
              Submit
            </Button>
          </ButtonWrapper>
          {isFormValid && (
            <DetailsWrapper>
              <DetailsItem>
                <DetailsTitle>
                  <Typography color="grey.A200" variant="paragraphSmall">
                    Reward/period
                  </Typography>
                  <InfoBlackIcon />
                </DetailsTitle>
                <Typography color="grey.A200" variant="paragraphSmall">
                  100 GENS
                </Typography>
              </DetailsItem>
              <DetailsItem>
                <DetailsTitle>
                  <Typography color="grey.A200" variant="paragraphSmall">
                    Vesting period
                  </Typography>
                  <InfoBlackIcon />
                </DetailsTitle>
                <Typography color="grey.A200" variant="paragraphSmall">
                  10 days
                </Typography>
              </DetailsItem>
              <DetailsItem>
                <DetailsTitle>
                  <Typography color="grey.A200" variant="paragraphSmall">
                    Deposit
                  </Typography>
                  <InfoBlackIcon />
                </DetailsTitle>
                <Typography color="grey.A200" variant="paragraphSmall">
                  1.7 ADA
                </Typography>
              </DetailsItem>
              <DetailsItem>
                <DetailsTitle>
                  <Typography color="grey.A200" variant="paragraphSmall">
                    Total Fee
                  </Typography>
                  <SmallArrowDown />
                </DetailsTitle>
                <Typography color="grey.A200" variant="paragraphSmall">
                  2.45 ADA
                </Typography>
              </DetailsItem>
            </DetailsWrapper>
          )}
        </Form>
      </WidgetCard>
    </OuterWrapper>
  );
};

const OuterWrapper = styled("div")({
  width: "336px",
});

const Form = styled("form")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  rowGap: "16px",
});

const FieldWrapper = styled("div")<{ fullWidth: boolean }>(({ fullWidth }) => ({
  width: fullWidth ? "100%" : "calc(50% - 8px)",

  "& > div": {
    rowGap: "4px",
  },

  "& input::-webkit-inner-spin-button": {
    display: "none",
  },
}));

const ButtonWrapper = styled("div")({
  width: "100%",

  "& button": {
    width: "100%",
    height: "44px",
  },
});

const DetailsWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  rowGap: "4px",
  width: "100%",
});

const DetailsItem = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const DetailsTitle = styled("div")({
  display: "flex",
  alignItems: "center",
  columnGap: "4px",
});

export default LinearVestingWidget;
