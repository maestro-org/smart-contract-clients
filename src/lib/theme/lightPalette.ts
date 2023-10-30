const grey = {
  50: "#F5F5F5",
  100: "#E6E6E6",
  200: "#CCCCCC",
  300: "#B3B3B3",
  400: "#999999",
  500: "#808080",
  600: "#666666",
  700: "#4D4D4D",
  800: "#333333",
  900: "#1A1A1A",
  A100: "#000000",
  A200: "#0F0311",
};

const primary = {
  main: "#C53DD8",
  light: "#DE91E9",
  dark: "#821D90",
  contrastText: "#fff",
};

const accent = {
  100: "#FCF7DE",
  200: "#F8EBAF",
  300: "#F4DF80",
  400: "#F0D351",
  500: "#ECC722",
  600: "#CAA811",
  700: "#9B810D",
  800: "#6C5A09",
  900: "#3D3305",
  1000: "#0E0C01",
};

const neutral = {
  100: "#FAF9FB",
  200: "#EFEBEF",
  300: "#E3DCE4",
  400: "#CFC2D0",
  500: "#B5A3B8",
  600: "#9E86A2",
  700: "#866A8A",
  800: "#6A546D",
  900: "#4E3E51",
  1000: "#322834",
  1100: "#241C25",
  1200: "#161217",
};

const error = {
  main: "#DC6675",
};

const checkbox = {
  colored: { main: primary["main"], outlined: grey["200"] },
  default: { main: "#A0A0A0", outlined: "#DADADA" },
};

const button = {
  primary: {
    main: primary["main"],
    mainText: grey["50"],
    hover: "#D166E0",
    hoverText: grey["50"],
    disabled: "#EBBBF1",
    disabledText: primary["light"],
  },
  secondary: {
    main: grey["A200"],
    mainText: grey["50"],
    hover: grey["800"],
    hoverText: grey["50"],
    disabled: grey["600"],
    disabledText: grey["400"],
  },
};

const chip = {
  primary: {
    backgroundColor: grey["A200"],
    color: grey["50"],
  },
  default: {
    backgroundColor: "rgba(0, 0, 0, 0.12)",
    color: grey["400"],
  },
  success: {
    backgroundColor: "#E9F0E1",
    color: "#4CAF50",
  },
  error: {
    backgroundColor: "rgba(255, 36, 66, 0.06)",
    color: error.main,
  },
  colored: {
    color: "#ffffff",
  },
};

const textfield = {
  background: grey["50"],
  errorText: error.main,
  textColor: grey["A200"],
  border: {
    main: grey["100"],
    hover: grey["400"],
    focus: primary["main"],
    filled: grey["300"],
    error: error.main,
    disable: grey["200"],
  },
  placeholder: {
    main: grey["400"],
    hover: grey["500"],
    focus: grey["500"],
    filled: grey["500"],
    error: error.main,
    disable: grey["300"],
  },
};

const fileUpload = {
  buttonText: grey["500"],
  buttonBorder: "#C7C7C7",
  caption: grey["300"],
};

const slider = {
  shadow: "#EBBBF1",
  main: primary.main,
  background: "#C7C7C7",
};

const dropdown = {
  background: grey["50"],
  errorText: error.main,
  textColor: grey["A200"],
  border: {
    main: grey["200"],
    hover: grey["400"],
    error: error.main,
  },
  placeholder: {
    main: grey["400"],
    hover: grey["500"],
    error: error.main,
  },
};

export const lightPalette = {
  primary,
  grey,
  accent,
  neutral,
  error,
  checkbox,
  button,
  chip,
  textfield,
  fileUpload,
  slider,
  dropdown,
};
