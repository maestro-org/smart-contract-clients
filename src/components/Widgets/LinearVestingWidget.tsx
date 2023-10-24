import { styled } from "@mui/material";
import React from "react";

import WidgetCard from "../Card/WidgetCard";
import { useFormik } from "formik";
import { getLinearVestingFields, initialValuesLinearVesting } from "../../forms/linearVesting/form";
import { linearVestingSchema } from "../../forms/linearVesting/validation";
import {
  LinearVestingFields,
  LinearVestingFormValues,
  LinearVestingSingleField,
} from "../../forms/linearVesting/types";
import { TextField } from "../Textfield/Textfield";
import { Button } from "../Button/Button";
import TokenTextfield from "../Textfield/TokenTextfield";

const LinearVestingWidget = () => {
  const onSubmit = (values: LinearVestingFormValues) => {
    console.log(values);
  };

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValuesLinearVesting,
    validationSchema: linearVestingSchema,
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit,
  });

  const checkError = (name: string) => !!errors[name as keyof typeof errors] && !!touched[name as keyof typeof touched];

  const getHelperText = (name: string) =>
    errors[name as keyof typeof errors] && touched[name as keyof typeof touched]
      ? (errors[name as keyof typeof errors] as string)
      : undefined;

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
            <Button disabled type="submit">
              Submit
            </Button>
          </ButtonWrapper>
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
  },
});

export default LinearVestingWidget;
