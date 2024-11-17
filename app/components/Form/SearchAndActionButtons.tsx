import { Box, TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import RaiseDisputePopup from "./RaiseDisputePopup";
import CustomButton from "../CustomButton";

interface SearchAndActionButtonsProps {
  handleClickOpen: () => void;
  handleClose: () => void;
  handleRaiseDispute: () => void;
  openS: boolean;
  isMobile?: boolean;
}

const SearchAndActionButtons = ({
  handleClickOpen,
  handleClose,
  handleRaiseDispute,
  openS,
  isMobile = false,
}: SearchAndActionButtonsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "14px",
        alignItems: "center",
      }}
    >
      {/* Search Field */}
      <TextField
        variant="outlined"
        placeholder="Search"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search style={{ color: "#40566D" }} />
            </InputAdornment>
          ),
          style: {
            paddingLeft: "10px",
            paddingRight: "10px",
            height: "32px",
            borderRadius: "8px",
          },
        }}
        sx={{
          width: isMobile ? "100%" : "300px",
          "& .MuiOutlinedInput-root": { borderRadius: "20px" },
          "& fieldset": { borderColor: "#6C849D2E" },
        }}
      />

      {/* Action Buttons */}
      <CustomButton
        text="Edit"
        iconSrc="/assets/edit.svg"
        iconAlt="edit"
        sx={{
          backgroundColor: "#F7F4FF",
          color: "#4838B0",
          height: "32px",
        }}
        shadow={false}
      />
      <CustomButton
        onClick={handleClickOpen}
        text="Dispute"
        sx={{
          backgroundColor: "#E9690C",
          color: "white",
          "&:hover": { backgroundColor: "#d25a08" },
          height: "32px",
        }}
        shadow={false}
      />
      <RaiseDisputePopup
        open={openS}
        handleClose={handleClose}
        handleRaiseDispute={handleRaiseDispute}
      />
      <CustomButton
        text="Reject"
        sx={{
          backgroundColor: "#D44A4A",
          color: "white",
          "&:hover": { backgroundColor: "#D44A2A" },
          height: "32px",
        }}
        shadow={false}
      />
      <CustomButton
        text="Approve"
        sx={{
          backgroundColor: "#167B59",
          color: "white",
          "&:hover": { backgroundColor: "#167B79" },
          height: "32px",
        }}
        shadow={false}
      />
    </Box>
  );
};

export default SearchAndActionButtons;
