import React from "react";
import { Box } from "@mui/material";
import { SubmissionData } from "../data/TableData";
import VendorPopupAccordion from "./VendorPopupAccordion";
import SearchAndActionButtons from "./SearchAndActionButtons";

interface VendorPopupContentProps {
  openS: boolean;
  vendorData: SubmissionData | null;
  handleClickOpen: () => void;
  handleClose: () => void;
  handleRaiseDispute: () => void;
}

const VendorPopupContent: React.FC<VendorPopupContentProps> = ({
  openS,
  vendorData,
  handleClickOpen,
  handleClose,
  handleRaiseDispute,
}) => {
  return (
    <Box
      sx={{
        paddingX: {
          xs: "15px !important",
          sm: "16px !important",
          md: "24px !important",
        },
        width: "100%",
      }}
    >
      <Box
        sx={{
          marginTop: 5,
          paddingBottom: 3,
          display: "flex",
          "@media (min-width: 1024px)": { display: "none" },
        }}
      >
        <SearchAndActionButtons
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          handleRaiseDispute={handleRaiseDispute}
          openS={openS}
          isMobile={true}
        />
      </Box>
      <VendorPopupAccordion vendorData={vendorData} />
    </Box>
  );
};

export default VendorPopupContent;
