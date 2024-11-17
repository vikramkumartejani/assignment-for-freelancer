import React, { FC, useState } from "react";
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Slide,
  IconButton,
  TextField,
  InputAdornment,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import { Search } from "@mui/icons-material";
import { SubmissionData } from "./TableData";
import RaiseDisputePopup from "./RaiseDisputePopup";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import PendingDisput from "./PendingDispute";
import { VendorPopupAccordion } from "./VendorPopupAccordion";
import CustomButton from "../CustomButton";

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
    setIsBoxVisible(icon === "sms"); // Only show SMS drawer if 'sms' is clicked
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
              <Box display="flex" gap={2}>
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
                    width: "300px",
                    "& .MuiOutlinedInput-root": { borderRadius: "20px" },
                    "& fieldset": { borderColor: "#6C849D2E" },
                  }}
                />
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
            <div className="mt-5 flex lg:hidden flex-wrap gap-[14px] pb-3">
              {/* Mobile View Buttons */}
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
                  width: "100%",
                  "& .MuiOutlinedInput-root": { borderRadius: "20px" },
                  "& fieldset": { borderColor: "#6C849D2E" },
                }}
              />
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
            </div>
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
