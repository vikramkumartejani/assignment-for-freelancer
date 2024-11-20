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
        width: isMobile ? "100%" : "300px",
        "& .MuiOutlinedInput-root": { borderRadius: "20px" },
        "& fieldset": { borderColor: "#6C849D2E" },
        paddingLeft: "10px",
        paddingRight: "10px",
        height: "32px",
        borderRadius: "8px",
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <Search style={{ color: "#40566D" }} />
            </InputAdornment>
          ),
        },
      }}
    />
  );
};

export default SearchField;
