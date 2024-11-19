import React, { useState } from "react";
import { AppBar, Toolbar, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SubmissionData } from "../Data/TableData";
import TypographyAtom from "../Atoms/TypographyAtom";
import SearchAndActionButtons from "../Molecule/SearchAndActionButtons";

interface VendorPopupHeaderProps {
  vendorData: SubmissionData | null;
  onClose: () => void;
}

const VendorPopupHeader: React.FC<VendorPopupHeaderProps> = ({
  vendorData,
  onClose,
}) => {
  const [openS, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleRaiseDispute = () => {
    console.log("Dispute Raised");
    setOpen(false);
  };

  return (
    <AppBar
      sx={{
        position: "relative",
        bgcolor: "white",
        color: "#000",
        paddingRight: "0px !important",
        paddingLeft: 0,
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          paddingX: { xs: "15px", sm: "24px" },
          borderBottom: "1px solid #6C849D2E",
          width: "100%",
        }}
      >
        <TypographyAtom
          text={vendorData?.vendorName ?? "No Vendor Name"}
          sx={{ fontWeight: "800", fontSize: "20px", color: "#243547" }}
        />

        <Box display="flex" alignItems="center" gap={"12px"}>
          <SearchAndActionButtons
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            handleRaiseDispute={handleRaiseDispute}
            openS={openS}
          />

          <IconButton edge="end" onClick={onClose}>
            <CloseIcon sx={{ color: "#40566D" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default VendorPopupHeader;
