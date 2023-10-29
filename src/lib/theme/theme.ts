/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties } from "react";
import { PaletteMode } from "@mui/material";
import { typography } from "./typography";
import { borderRadius } from "./borders";
import { breakpoints } from "./breakpoints";
import { lightPalette } from "./lightPalette";
import { darkPalette } from "./darkPalette";

export const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode: mode as PaletteMode,
    ...(mode === "light" ? lightPalette : darkPalette),
  },
  breakpoints,
  borderRadius,
  typography,
});

declare module "@mui/material/Typography" {
  export interface TypographyPropsVariantOverrides {
    displayLarge: true;
    display: true;
    h1: true;
    h2: true;
    h3: true;
    h4: true;
    h5: true;
    h6: true;
    subtitle: true;
    paragraphArticle: true;
    paragraphLarge: true;
    paragraphMedium: true;
    paragraphSmall: true;
    article: true;
  }
}

declare module "@mui/material/styles" {
  export interface ThemeOptions {
    borderRadius: {
      xxs: string;
      xs: string;
      sm: string;
      ms: string;
      md: string;
      lg: string;
    };
  }
  export interface Theme {
    borderRadius: {
      xxs: string;
      xs: string;
      sm: string;
      ms: string;
      md: string;
      lg: string;
    };
  }
  export interface TypographyVariants {
    displayLarge: CSSProperties;
    display: CSSProperties;
    subtitle: CSSProperties;
    paragraphArticle: CSSProperties;
    paragraphLarge: CSSProperties;
    paragraphMedium: CSSProperties;
    paragraphSmall: CSSProperties;
    article: CSSProperties;
  }

  export interface TypographyVariantsOptions {
    displayLarge: CSSProperties;
    display: CSSProperties;
    subtitle: CSSProperties;
    paragraphArticle: CSSProperties;
    paragraphLarge: CSSProperties;
    paragraphMedium: CSSProperties;
    paragraphSmall: CSSProperties;
    article: CSSProperties;
  }

  interface CustomPalette {
    grey?: any;
    accent: any;
    neutral?: any;
    error?: any;
    success?: any;
    warning?: any;
    info?: any;

    chip: any;
    button: any;
    checkbox: any;
    textfield: any;
    fileUpload: any;
    slider: any;
    dropdown: any;
  }

  export interface Palette extends CustomPalette {}
  export interface PaletteOptions extends CustomPalette {}
}
