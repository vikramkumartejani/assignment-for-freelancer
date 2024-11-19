import React from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CustomButton from "../CustomButton";

const buttonStyles = {
  borderColor: "#6C849D2E",
  color: "#40566D",
  borderRadius: "8px",
  paddingX: 2,
  textTransform: "none",
  fontWeight: "500",
  fontSize: "14px",
};

const ActionButtons: React.FC = () => {
  const buttons = [
    {
      icon: (
        <FilterAltOutlinedIcon sx={{ fontSize: "20px", marginRight: "4px" }} />
      ),
      text: "Filter",
    },
    {
      icon: (
        <DateRangeOutlinedIcon sx={{ fontSize: "20px", marginRight: "4px" }} />
      ),
      text: "Select Date Range",
    },
    {
      icon: (
        <IosShareOutlinedIcon sx={{ fontSize: "20px", marginRight: "4px" }} />
      ),
      text: "Export",
    },
    {
      icon: (
        <SettingsOutlinedIcon sx={{ fontSize: "20px", marginRight: "4px" }} />
      ),
      text: "Customize",
    },
  ];

  return (
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
              height: "46px",
              padding: "8px 12px",
              fontFamily: "Noto Sans",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
              color: "#3D4B5C",
              "& fieldset": {
                borderColor: "#6C849D2E",
              },
              "&:hover fieldset": {
                borderColor: "#4838B0",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#4838B0",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ mr: 1, color: "gray" }} />
              </InputAdornment>
            ),
          }}
        />

        {buttons.map((button, index) => (
          <CustomButton
            key={index}
            startIcon={button.icon}
            text={button.text}
            sx={buttonStyles}
            shadow={true}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ActionButtons;
