"use client";
import React, { useState } from "react";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
import Layout from "./components/Layout";
import createCustomTheme, { lightPalette, darkPalette } from "./theme";
import FormHeader from "./components/Organisms/FormHeader";
import ThemeToggleButton from "./components/Molecule/ThemeToggleButton/ThemeToggleButton";
import FormTabs from "./components/Organisms/FormTabs";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createCustomTheme(isDarkMode ? darkPalette : lightPalette);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Box>
          <FormHeader />
          <FormTabs />
        </Box>
      </Layout>

      <ThemeToggleButton
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />
    </ThemeProvider>
  );
}
