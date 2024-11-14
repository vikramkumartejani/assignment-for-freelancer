import { Box, Typography } from "@mui/material";
import Layout from "./components/Layout";
import FormHeader from "./components/Form/FormHeader";
import FormTabs from "./components/Form/FormTabs";

export default function Home() {
  return (
    <Layout>
      <Box>
        <FormHeader />
        <FormTabs />
      </Box>
    </Layout>
  );
}
