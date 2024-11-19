import React from "react";
import { Box } from "@mui/material";
import { SubmissionData } from "../Data/TableData";
import SearchAndActionButtons from "../Molecule/SearchAndActionButtons";
import VendorPopupAccordion from "./VendorPopupAccordion";

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
    <Box sx={{ paddingX: { xs: "15px !important", sm: "16px !important", md: "24px !important" } , width:'100%'}}>
      <Box className="mt-5 pb-3 flex lg:hidden">
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
