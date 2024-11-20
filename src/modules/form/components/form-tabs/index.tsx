import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { submissionData } from "@/src/modules/form/components/data/TableData";
import TabContent from "./TabContent";

const FormTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "20px", overflowX: "auto" }}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        aria-label="submission tabs"
        sx={{
          color: "#58728D",
          overflowX: "auto",
          borderBottom: "1px solid #167B592E",
          "& .MuiTabs-flexContainer": {
            flexWrap: { xs: "wrap", sm: "nowrap" },
            justifyContent: { xs: "space-between", sm: "flex-start" },
          },
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: "500",
            fontSize: { xs: "12px", sm: "14px" },
            padding: { xs: "6px 8px", sm: "8px 16px" },
            minWidth: { xs: "auto", sm: "120px" },
            whiteSpace: "nowrap",
            borderBottom: "2px solid transparent",
            color: "#58728D",
            "&.Mui-selected": {
              color: "#4838B0",
              borderBottomColor: "#5D4AD4",
              fontWeight: "700",
            },
          },
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
      >
        <Tab label="Pending Submission" />
        <Tab label="Dispute Submission" />
        <Tab label="Rejected Submission" />
        <Tab label="Approved Submission" />
      </Tabs>

      <Box sx={{ mt: 2 }}>
        {activeTab === 0 && <TabContent data={submissionData} />}
        {activeTab === 1 && <TabContent data={submissionData} />}
        {activeTab === 2 && <TabContent data={submissionData} />}
        {activeTab === 3 && <TabContent data={submissionData} />}
      </Box>
    </Box>
  );
};

export default FormTabs;
