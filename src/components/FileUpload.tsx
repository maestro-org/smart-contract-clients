import { styled, Typography } from "@mui/material";
import React, { InputHTMLAttributes, useRef } from "react";

interface CustomProps {
  onFileUpload: (e: React.FormEvent<HTMLInputElement>) => void;
  value?: File;
}

export type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "value"> & CustomProps;

export const FileUpload = ({ value, onFileUpload, ...props }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const onDragEnter = () => {
    wrapperRef.current?.classList.add("dragover");
  };

  const onDragLeave = () => {
    wrapperRef.current?.classList.remove("dragover");
  };

  return (
    <Wrapper ref={wrapperRef} onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDragLeave}>
      {!value ? (
        <InnerWrapper>
          <SelectFileWrapper>
            <Typography color="fileUpload.buttonText" variant="paragraphMedium">
              Select file
            </Typography>
          </SelectFileWrapper>
          <Typography color="fileUpload.caption" variant="paragraphMedium">
            or drop file here
          </Typography>
        </InnerWrapper>
      ) : (
        <div style={{ textAlign: "center" }}>
          <Typography color="fileUpload.buttonText">
            File <b>{value.name}</b> uploaded
          </Typography>
        </div>
      )}
      <StyledInput type="file" onChange={onFileUpload} {...props} />
    </Wrapper>
  );
};

const Wrapper = styled("div")(({ theme }) => ({
  borderRadius: theme.borderRadius.sm,
  border: `2px dashed ${theme.palette.fileUpload.buttonBorder}`,
  minHeight: "156px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  transition: "opacity .3s",

  "&:hover, &.dragover": {
    opacity: 0.6,
  },
}));

const InnerWrapper = styled("div")({
  dsplay: "flex",
  flexDirection: "column",
  textAlign: "center",
});

const SelectFileWrapper = styled("div")(({ theme }) => ({
  borderRadius: theme.borderRadius.xxs,
  border: `1px solid ${theme.palette.fileUpload.buttonBorder}`,
  padding: "10px 32px",
  marginBottom: "20px",
}));

const StyledInput = styled("input")(() => ({
  opacity: 0,
  position: "absolute",
  top: "-2px",
  left: "-2px",
  width: "calc(100% + 4px)",
  height: "calc(100% + 4px)",
  cursor: "pointer",
}));
