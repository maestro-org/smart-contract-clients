import { useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import { getTheme } from "../src/lib/theme/theme";
import { mutateFontSizeResponsiveness } from "../src/lib/theme/responsiveTypography";

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "light", left: "☀️", title: "Light mode" },
        { value: "dark", left: "🌙", title: "Dark mode" },
      ],
    },
  },
};

export const withMuiTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;

  const theme = useMemo(() => {
    let theme = createTheme(getTheme(themeKey)) || createTheme(getTheme("light"));
    theme = mutateFontSizeResponsiveness(theme);
    return theme;
  }, [themeKey]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
