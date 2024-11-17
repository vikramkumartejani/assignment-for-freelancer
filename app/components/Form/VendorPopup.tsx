import React, { FC, useState } from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Slide,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import { SubmissionData } from "./TableData";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import PendingDisput from "./PendingDispute";
import { VendorPopupAccordion } from "./VendorPopupAccordion";
import SearchAndActionButtons from "./SearchAndActionButtons";

interface VendorPopupProps {
  open: boolean;
  onClose: () => void;
  vendorData: SubmissionData | null;
}

type IconType = "sms" | "preview" | "history" | null;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const VendorPopup: FC<VendorPopupProps> = ({ open, onClose, vendorData }) => {
  const [openS, setOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<IconType>(null);
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const handleIconClick = (icon: IconType) => {
    setSelectedIcon(icon);
    setIsBoxVisible(icon === "sms");
  };

  const handleCloseDrawer = () => setIsBoxVisible(false);
  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleRaiseDispute = () => {
    console.log("Dispute Raised");
    setOpen(false);
  };

  const iconStyles = (selected: boolean) => ({
    color: selected ? "#5D4AD4" : "#58728D",
  });

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      className="mt-[80px]"
    >
      <Box sx={{ overflowX: "hidden", height: "100%" }}>
        {/* AppBar Header */}
        <AppBar
          sx={{
            position: "relative",
            bgcolor: "#f8f9fa",
            color: "#000",
            paddingRight: 0,
          }}
          elevation={0}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              paddingX: { xs: "15px", sm: "24px" },
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "800", fontSize: "20px", color: "#243547" }}
            >
              {vendorData?.vendorName}
            </Typography>
            <Box display="flex" alignItems="center" gap={"12px"}>
              {/* Search and Buttons */}
              <Box className="hidden lg:flex">
                <SearchAndActionButtons
                  handleClickOpen={handleClickOpen}
                  handleClose={handleClose}
                  handleRaiseDispute={handleRaiseDispute}
                  openS={openS}
                />
              </Box>

              <IconButton edge="end" onClick={onClose}>
                <CloseIcon sx={{ color: "#40566D" }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Dialog Content */}
        <Box sx={{ display: "flex", position: "relative", height: "100%" }}>
          <Box
            sx={{
              paddingX: {
                xs: "15px !important",
                sm: "16px !important",
                md: "24px !important",
              },
              height: "100%",
            }}
          >
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

          {/* Side Panel */}
          <Box sx={{ display: "flex" }}>
            <PendingDisput
              isVisible={isBoxVisible}
              onClose={handleCloseDrawer}
            />
            <Box
              sx={{
                paddingY: "16px",
                background: "#F1F5FA",
                width: "40px",
                minWidth: "40px",
                zIndex: "2",
              }}
            >
              {["sms", "preview", "history"].map((iconType) => (
                <Box
                  key={iconType}
                  sx={{
                    padding: "8px",
                    cursor: "pointer",
                    background:
                      selectedIcon === iconType ? "#EAE7FA" : "transparent",
                    borderLeft:
                      selectedIcon === iconType ? "1px solid #5D4AD4" : "none",
                  }}
                  onClick={() => handleIconClick(iconType as IconType)}
                >
                  {iconType === "sms" && (
                    <SmsOutlinedIcon sx={iconStyles(selectedIcon === "sms")} />
                  )}
                  {iconType === "preview" && (
                    <PreviewOutlinedIcon
                      sx={iconStyles(selectedIcon === "preview")}
                    />
                  )}
                  {iconType === "history" && (
                    <HistoryOutlinedIcon
                      sx={iconStyles(selectedIcon === "history")}
                    />
                  )}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default VendorPopup;
