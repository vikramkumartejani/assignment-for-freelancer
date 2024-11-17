"use client";
import { Box, Button, ThemeProvider, CssBaseline } from "@mui/material";
import { useState } from "react";
import Layout from "./components/Layout";
import FormHeader from "./components/Form/FormHeader";
import FormTabs from "./components/Form/FormTabs";
import createCustomTheme, { lightPalette, darkPalette } from "./theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";  
import Brightness7Icon from "@mui/icons-material/Brightness7";  

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

      <Box
        sx={{
          position: "fixed",
          bottom: 10,
          right: 10,
        }}
      >
        <Button variant="contained" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </Button>
      </Box>
    </ThemeProvider>
  );
}
