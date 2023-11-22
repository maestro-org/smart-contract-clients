import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import { styled, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import { SwapData } from "../DirectSwapWidget";
import { SmallDropdownIcon } from "../../../Icons";
import { Button } from "../../../Button/Button";
import { TextField } from "../../../Textfield/Textfield";
import { getDirectSwapFields, initialValuesDirectSwap } from "../../../../forms/directSwap/form";
import { directSwapSchema } from "../../../../forms/directSwap/validation";
import { updatePopup } from "../../../../redux/actions/popupsActions";
import { Popups } from "../../../../types/popups";
import { Nft } from "../../../../types/nft";
import { Token } from "../../../../types/token";
import { sanitizeValue } from "../../../../lib/decimalPrecision";

interface Props {
  setData: Dispatch<SetStateAction<SwapData[]>>;
}

const DirectSwapTokenField: FC<Props & SwapData> = ({ id, asset, value, setData }) => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    console.log("123");
  };

  const handleTokenSelect = (asset: Nft | Token) => {
    if (!asset) return;
    setData((prev) => prev.map((elem) => (elem.id === id ? { ...elem, asset } : elem)));
    dispatch(updatePopup({ popup: Popups.assetSelection, status: false }));
  };

  const handleAddToken = () => {
    dispatch(
      updatePopup({ popup: Popups.assetSelection, status: true, prefilled: { handleTokenClick: handleTokenSelect } }),
    );
  };

  const onChange = (event: any) => {
    handleChange(event);
    if (!asset) return;

    const newValue = sanitizeValue(event.target.value, asset.decimalPrecision);
    if (newValue === undefined) return;
    event.target.value = newValue;
    setData((prev) => prev.map((elem) => (elem.id === id ? { ...elem, value: event.target.value } : elem)));
    handleChange(event);
  };

  const { values, touched, errors, isValid, validateForm, handleChange, handleBlur, setFieldValue, handleSubmit } =
    useFormik({
      initialValues: initialValuesDirectSwap,
      validationSchema: directSwapSchema,
      validateOnChange: true,
      enableReinitialize: true,
      onSubmit,
    });

  useEffect(() => {
    setData((prev) => prev.map((elem) => (elem.id === id ? { ...elem, isValid: isValid && !!value.length } : elem)));
  }, [isValid, value]);

  return (
    <Wrapper>
      <StyledButton onClick={handleAddToken}>
        {asset ? (
          <TokenWrapper>
            <TokenLogo src={asset.logo} alt={asset.name} />
            <Typography color="grey.A200" variant="paragraphMedium">
              {asset.name}
            </Typography>
            <SmallDropdownIcon />
          </TokenWrapper>
        ) : (
          <>
            <Typography variant="paragraphSmall" color="grey.A200">
              Add token
            </Typography>
            <SmallDropdownIcon />
          </>
        )}
      </StyledButton>
      {getDirectSwapFields.map((textfield) => (
        <StyledTextfield
          key={textfield.name}
          customVariant="text"
          value={value}
          onChange={onChange}
          error={!!errors[textfield.name]}
          {...textfield}
        />
      ))}
    </Wrapper>
  );
};

const StyledTextfield = styled(TextField)({
  maxWidth: "130px",
});

const TokenWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  columnGap: "6px",
  cursor: "pointer",
});

const TokenLogo = styled("img")({
  height: "20px",
});

const StyledButton = styled(Button)(({ theme }) => ({
  padding: "4px 12px",
  gap: "6px",
  background: theme.palette.grey["50"],
  borderRadius: "57px",
  minWidth: "107px",
  width: "max-content",
  whiteSpace: "nowrap",

  maxWidth: "100%",

  "&:hover": {
    background: theme.palette.grey["100"],
  },
}));

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  input: {
    textAlign: "end",
  },
});

export default DirectSwapTokenField;
