import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material";
import { getTheme } from "./lib/theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const Project = () => {
  const [activeMode] = useState("light");

  let theme = createTheme(getTheme(activeMode as "light" | "dark"));

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <ToastContainer position="bottom-right" autoClose={2500} />
      </ThemeProvider>
    </Provider>
  );
};

root.render(<Project />);
