import React from "react";
import { Box } from "@mui/material";
import CustomButton from "@/src/components/CustomButton";
import SearchField from "./SearchField";
import RaiseDisputePopup from "./RaiseDisputePopup/RaiseDisputePopup";

interface SearchAndActionButtonsProps {
  handleClickOpen: () => void;
  handleClose: () => void;
  handleRaiseDispute: () => void;
  openS: boolean;
  isMobile?: boolean;
}

const SearchAndActionButtons: React.FC<SearchAndActionButtonsProps> = ({
  handleClickOpen,
  handleClose,
  handleRaiseDispute,
  openS,
  isMobile = false,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "14px",
        alignItems: "center",
        justifyContent: "center",
        padding:'0 12px'
      }}
    >
      {/* Search Field */}
      <SearchField isMobile={isMobile} />

      {/* Action Buttons using CustomButton */}
      <CustomButton
        text="Edit"
        iconSrc="/assets/edit.svg"
        iconAlt="edit"
        sx={{
          backgroundColor: "#F7F4FF",
          color: "#4838B0",
          height: "32px",
        }}
        shadow={true}
      />

      <CustomButton
        text="Dispute"
        onClick={handleClickOpen}
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
