"use client";
import React, { useState } from "react";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import createCustomTheme, { lightPalette, darkPalette } from "./theme";
import ThemeToggleButton from "../components/ThemeToggleButton";
import DashboardLayout from "../modules/dashboard-layout/templates";
import Form from "../modules/form/templates";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createCustomTheme(isDarkMode ? darkPalette : lightPalette);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardLayout>
        <Form />
      </DashboardLayout>

      <ThemeToggleButton
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />
    </ThemeProvider>
  );
}
