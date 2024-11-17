"use client";
import React, { useState } from "react";
import { Box, Tabs, Tab, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SubmissionTable from "./SubmissionTable";
import { SubmissionData } from "./TableData";
import { submissionData } from "./TableData";
import CustomButton from "../CustomButton";

interface TabContentProps {
  data: SubmissionData[];
}

const TabContent: React.FC<TabContentProps> = ({ data }) => (
  <Box>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="start"
      mb={3}
      mt={3}
      sx={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <TextField
          placeholder="Search"
          variant="outlined"
          size="small"
          sx={{
            width: { xs: "100%", sm: "100%", md: "309px" },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              height: "36px",
              padding: "8px 12px",
              fontFamily: "Noto Sans",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
              color: "#3D4B5C",
              "& fieldset": {
                borderColor: "#6C849D2E", // Default border color
              },
              "&:hover fieldset": {
                borderColor: "#4838B0", // Hover border color
              },
              "&.Mui-focused fieldset": {
                borderColor: "#4838B0", // Focused border color
              },
            },
          }}
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: 1, color: "gray" }} />,
          }}
        />

        <CustomButton
          variant="outlined"
          startIcon={
            <FilterAltOutlinedIcon
              sx={{ fontSize: "20px", marginRight: "4px" }}
            />
          }
          text="Filter"
          sx={{
            borderColor: "#6C849D2E",
            color: "#40566D",
            borderRadius: "8px",
            paddingX: 2,
            textTransform: "none",
            fontWeight: "500",
            fontSize: "14px",
          }}
          shadow={true}
        />
        <CustomButton
          variant="outlined"
          startIcon={
            <DateRangeOutlinedIcon
              sx={{ fontSize: "20px", marginRight: "4px" }}
            />
          }
          text="Select Date Range"
          sx={{
            borderColor: "#6C849D2E",
            color: "#40566D",
            borderRadius: "8px",
            paddingX: 2,
            textTransform: "none",
            fontWeight: "500",
            fontSize: "14px",
          }}
          shadow={true}
        />

        <CustomButton
          variant="outlined"
          startIcon={
            <IosShareOutlinedIcon
              sx={{ fontSize: "20px", marginRight: "4px" }}
            />
          }
          text="Export"
          sx={{
            borderColor: "#6C849D2E",
            color: "#40566D",
            borderRadius: "8px",
            paddingX: 2,
            textTransform: "none",
            fontWeight: "500",
            fontSize: "14px",
          }}
          shadow={true}
        />

        <CustomButton
          variant="outlined"
          startIcon={
            <SettingsOutlinedIcon
              sx={{ fontSize: "20px", marginRight: "4px" }}
            />
          }
          text="Customize"
          sx={{
            borderColor: "#6C849D2E",
            color: "#40566D",
            borderRadius: "8px",
            paddingX: 2,
            textTransform: "none",
            fontWeight: "500",
            fontSize: "14px",
          }}
          shadow={true}
        />
      </Box>
    </Box>
    <SubmissionTable data={data} />
  </Box>
);

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
            color: "#58728D", // Default (normal tab) text color
            "&.Mui-selected": {
              color: "#4838B0", // Active tab text color
              borderBottomColor: "#5D4AD4", // Active tab underline color
              fontWeight: "700",
            },
          },
          "& .MuiTabs-indicator": {
            display: "none", // Hide the indicator for a cleaner design
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
