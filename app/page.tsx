"use client";
import { Box, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout";
import FormHeader from "./components/Form/FormHeader";
import FormTabs from "./components/Form/FormTabs";
import theme from "./theme";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Box>
          <FormHeader />
          <FormTabs />
        </Box>
      </Layout>
    </ThemeProvider>
  );
}
