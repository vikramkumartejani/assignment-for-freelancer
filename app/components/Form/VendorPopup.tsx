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
import Image from "next/image";
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
  const [openS, setOpen] = useState<boolean>(false);
  const [selectedIcon, setSelectedIcon] = useState<IconType>(null);
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const handleIconClick = (icon: IconType) => {
    setSelectedIcon(icon);
    if (icon === "sms") {
      setIsBoxVisible(true); // Show the drawer when 'sms' is clicked
    } else {
      setIsBoxVisible(false); // Hide the drawer if another icon is clicked
    }
  };

  const handleCloseDrawer = () => {
    setIsBoxVisible(false); // Close the drawer
  };

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  // Handle closing the dialog
  const handleClose = (): void => {
    setOpen(false);
  };

  // Handle raising the dispute
  const handleRaiseDispute = (): void => {
    console.log("Dispute Raised");
    setOpen(false); // Close the dialog after raising the dispute
  };
  return (
    <Dialog
      fullScreen
      open={open}
      className="mt-[80px]"
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <Box
        sx={{
          overflowX: "hidden",
          height: "100%",
        }}
      >
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

            {/* Filters Btns */}
            <Box display="flex" alignItems="center" gap={"12px"}>
              <div className="hidden lg:flex gap-[12px] ">
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
                      borderColor: "#000",
                      color: "#768EA7",
                    },
                  }}
                  sx={{
                    width: "300px",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "20px",
                    },
                    "& fieldset": {
                      borderColor: "#6C849D2E",
                    },
                  }}
                />
                <CustomButton
                  text="Edit"
                  iconSrc="/assets/edit.svg"
                  iconAlt="edit"
                  sx={{
                    height: "32px",
                    backgroundColor: "#F7F4FF",
                    border: "1px solid #5D4AD43D",
                    borderRadius: "4px",
                    color: "#4838B0",
                    "&:hover": {
                      backgroundColor: "#F7F5FF",
                    },
                  }}
                  shadow={false}
                />
                <div>
                  <CustomButton
                    onClick={handleClickOpen}
                    text="Dispute"
                    sx={{
                      height: "32px",
                      backgroundColor: "#E9690C",
                      color: "white",
                      boxShadow: "none !important",
                      "&:hover": {
                        backgroundColor: "#d25a08",
                      },
                    }}
                    shadow={false}
                  />

                  <RaiseDisputePopup
                    open={openS}
                    handleClose={handleClose}
                    handleRaiseDispute={handleRaiseDispute}
                  />
                </div>
                <CustomButton
                  text="Reject"
                  sx={{
                    height: "32px",
                    backgroundColor: "#D44A4A",
                    color: "white",
                    boxShadow: "none !important",
                    "&:hover": {
                      backgroundColor: "#D44A2A",
                    },
                  }}
                  shadow={false}
                />

                <CustomButton
                  text="Approve"
                  sx={{
                    height: "32px",
                    backgroundColor: "#167B59",
                    color: "white",
                    boxShadow: "none !important",
                    "&:hover": {
                      backgroundColor: "#167B79",
                    },
                  }}
                  shadow={false}
                />
              </div>

              <IconButton edge="end" onClick={onClose}>
                <CloseIcon sx={{ color: "#40566D" }} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Dialog Content */}
        <Box
          sx={{
            display: "flex",
            position: "relative",
            height: "100%",
          }}
        >
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
            {/* Buttons */}
            <div className="mt-5 flex lg:hidden flex-wrap gap-[14px] pb-3">
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
                    borderColor: "#000",
                    color: "#768EA7",
                  },
                }}
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "20px",
                  },
                  "& fieldset": {
                    borderColor: "#6C849D2E",
                  },
                }}
              />
              <CustomButton
                text="Edit"
                iconSrc="/assets/edit.svg"
                iconAlt="edit"
                sx={{
                  height: "32px",
                  border: "1px solid #5D4AD43D",
                  borderRadius: "4px",
                  backgroundColor: "#F7F4FF",
                  color: "#4838B0",
                  "&:hover": {
                    backgroundColor: "#F7F5FF",
                  },
                }}
                shadow={false}
              />
              <div>
                <CustomButton
                  onClick={handleClickOpen}
                  text="Dispute"
                  sx={{
                    height: "32px",
                    backgroundColor: "#E9690C",
                    color: "white",
                    boxShadow: "none !important",
                    "&:hover": {
                      backgroundColor: "#d25a08",
                    },
                  }}
                  shadow={false}
                />

                <RaiseDisputePopup
                  open={openS}
                  handleClose={handleClose}
                  handleRaiseDispute={handleRaiseDispute}
                />
              </div>
              <CustomButton
                text="Reject"
                sx={{
                  height: "32px",
                  backgroundColor: "#D44A4A",
                  color: "white",
                  boxShadow: "none !important",
                  "&:hover": {
                    backgroundColor: "#D44A2A",
                  },
                }}
                shadow={false}
              />

              <CustomButton
                text="Approve"
                sx={{
                  height: "32px",
                  backgroundColor: "#167B59",
                  color: "white",
                  boxShadow: "none !important",
                  "&:hover": {
                    backgroundColor: "#167B79",
                  },
                }}
                shadow={false}
              />
            </div>

            <VendorPopupAccordion vendorData={vendorData} />
          </Box>

          <Box sx={{ display: "flex" }}>
            {/* Conditional Box on the right side */}
            <PendingDisput
              isVisible={isBoxVisible}
              onClose={handleCloseDrawer}
            />
            {/* SideBar */}
            <Box
              sx={{
                paddingY: "16px",
                background: "#F1F5FA",
                width: "40px",
                minWidth: "40px",
                zIndex: "2",
              }}
            >
              <Box
                sx={{
                  padding: "8px",
                  cursor: "pointer",
                  background:
                    selectedIcon === "sms" ? "#EAE7FA" : "transparent",
                  borderLeft:
                    selectedIcon === "sms" ? "1px solid #5D4AD4" : "none",
                }}
                onClick={() => handleIconClick("sms")}
              >
                <SmsOutlinedIcon
                  sx={{ color: selectedIcon === "sms" ? "#5D4AD4" : "#58728D" }}
                />
              </Box>
              <Box
                sx={{
                  padding: "7px",
                  marginY: "10px",
                  cursor: "pointer",
                  background:
                    selectedIcon === "preview" ? "#EAE7FA" : "transparent",
                  borderLeft:
                    selectedIcon === "preview" ? "1px solid #5D4AD4" : "none",
                }}
                onClick={() => handleIconClick("preview")}
              >
                <PreviewOutlinedIcon
                  sx={{
                    color: selectedIcon === "preview" ? "#5D4AD4" : "#58728D",
                  }}
                />
              </Box>
              <Box
                sx={{
                  padding: "8px",
                  cursor: "pointer",
                  background:
                    selectedIcon === "history" ? "#EAE7FA" : "transparent",
                  borderLeft:
                    selectedIcon === "history" ? "1px solid #5D4AD4" : "none",
                }}
                onClick={() => handleIconClick("history")}
              >
                <HistoryOutlinedIcon
                  sx={{
                    color: selectedIcon === "history" ? "#5D4AD4" : "#58728D",
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default VendorPopup;
