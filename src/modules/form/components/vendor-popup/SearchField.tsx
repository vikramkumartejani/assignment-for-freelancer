import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";

interface SearchFieldProps {
  isMobile?: boolean;
}

const SearchField: React.FC<SearchFieldProps> = ({ isMobile = false }) => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search"
      size="small"
      sx={{
        width: isMobile ? "100%" : "309px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
          borderColor: "#6C849D2E",
          marginY:'auto',           
          paddingLeft: "10px",
          paddingRight: "10px",
          height:'32px',
          "&:hover fieldset": {
            borderColor: "#6C849D2E", 
          },
          "&.Mui-focused fieldset": {
            borderColor: "#6C849D2E", 
          },
        },
        "& fieldset": {
          borderColor: "#6C849D2E",
        },
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Search style={{ color: "#40566D", fontSize: '20px' }} />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchField;
