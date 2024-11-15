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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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

  // Handle opening the dialog
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
      {/* AppBar Header */}
      <AppBar
        sx={{
          position: "relative",
          bgcolor: "#f8f9fa",
          color: "#000",
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
                      <Search style={{ color: "#6E8192" }} />
                    </InputAdornment>
                  ),
                  style: {
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    height: "32px",
                    borderRadius: "8px",
                    borderColor: "#000",
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
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#F7F4FF",
                  color: "#4838B0",
                  width: "77px",
                  height: "32px",
                  textTransform: "capitalize",
                  padding: "10px 12px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#F7F5FF",
                  },
                }}
              >
                <Image
                  src="/assets/edit.svg"
                  alt="edit"
                  width={20}
                  height={20}
                  className="mr-1 -mt-[1px]"
                />
                Edit
              </Button>
              <div>
                <Button
                  onClick={handleClickOpen}
                  variant="contained"
                  sx={{
                    backgroundColor: "#E9690C",
                    color: "white",
                    width: "77px",
                    height: "32px",
                    textTransform: "capitalize",
                    padding: "10px 12px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: 600,
                    "&:hover": {
                      backgroundColor: "#d25a08",
                    },
                  }}
                >
                  Dispute
                </Button>

                <RaiseDisputePopup
                  open={openS}
                  handleClose={handleClose}
                  handleRaiseDispute={handleRaiseDispute}
                />
              </div>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#D44A4A",
                  color: "white",
                  width: "77px",
                  height: "32px",
                  textTransform: "capitalize",
                  padding: "10px 12px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#D44A2A",
                  },
                }}
              >
                Reject
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#167B59",
                  color: "white",
                  width: "77px",
                  height: "32px",
                  textTransform: "capitalize",
                  padding: "10px 12px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#167B79",
                  },
                }}
              >
                Approve
              </Button>
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
        }}
      >
        <Box
          sx={{
            paddingX: {
              xs: "15px !important",
              sm: "16px !important",
              md: "24px !important",
            },
          }}
        >
          {/* Buttons */}
          <div className="mt-5 flex lg:hidden flex-wrap gap-[14px] ">
            <TextField
              variant="outlined"
              placeholder="Search"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search style={{ color: "#6E8192" }} />
                  </InputAdornment>
                ),
                style: {
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  height: "32px",
                  borderRadius: "8px",
                  borderColor: "#000",
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
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#F7F4FF",
                color: "#4838B0",
                width: "77px",
                height: "32px",
                textTransform: "capitalize",
                padding: "10px 12px",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#F7F5FF",
                },
              }}
            >
              <Image
                src="/assets/edit.svg"
                alt="edit"
                width={20}
                height={20}
                className="mr-1 -mt-[1px]"
              />
              Edit
            </Button>
            <div>
              <Button
                onClick={handleClickOpen}
                variant="contained"
                sx={{
                  backgroundColor: "#E9690C",
                  color: "white",
                  width: "77px",
                  height: "32px",
                  textTransform: "capitalize",
                  padding: "10px 12px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "#d25a08",
                  },
                }}
              >
                Dispute
              </Button>

              <RaiseDisputePopup
                open={openS}
                handleClose={handleClose}
                handleRaiseDispute={handleRaiseDispute}
              />
            </div>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#D44A4A",
                color: "white",
                width: "77px",
                height: "32px",
                textTransform: "capitalize",
                padding: "10px 12px",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#D44A2A",
                },
              }}
            >
              Reject
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#167B59",
                color: "white",
                width: "77px",
                height: "32px",
                textTransform: "capitalize",
                padding: "10px 12px",
                borderRadius: "4px",
                fontSize: "14px",
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#167B79",
                },
              }}
            >
              Approve
            </Button>
          </div>

          {/* Vendor Information Section */}
          <Accordion
            defaultExpanded
            elevation={0}
            sx={{
              padding: "0px",
              borderBottom: "1px solid #6C849D2E",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                padding: "0px",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "700", color: "#58728D", fontSize: "14px" }}
              >
                Vendor Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: "0px",
              }}
            >
              <Box
                display="flex"
                flexWrap="wrap"
                gap={"16px"}
                sx={{ mb: "12px" }}
              >
                <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
                  <Box
                    padding={{ xs: "6px", sm: "12px" }}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontWeight={"500"}
                      fontSize={"13px"}
                      color="#58728D"
                    >
                      Name of Vendor:
                    </Typography>
                    <Typography
                      color="#243547"
                      fontWeight={"600"}
                      fontSize={"14px"}
                    >
                      {vendorData?.vendorName}
                    </Typography>
                  </Box>
                  <Box
                    padding={{ xs: "6px", sm: "12px" }}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontWeight={"500"}
                      fontSize={"13px"}
                      color="#58728D"
                    >
                      Registered Office Address:
                    </Typography>
                    <Typography
                      color="#243547"
                      fontWeight={"600"}
                      fontSize={"14px"}
                    >
                      C 208, Neelkanth Business Park, Nathani Road, Vidyavihar
                      West, Mumbai, Maharashtra 400086, India
                    </Typography>
                  </Box>
                </Box>
                <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
                  <Box
                    padding={{ xs: "6px", sm: "12px" }}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontWeight={"500"}
                      fontSize={"13px"}
                      color="#58728D"
                    >
                      Category of Products:
                    </Typography>
                    <Typography
                      color="#243547"
                      fontWeight={"600"}
                      fontSize={"14px"}
                    >
                      Service
                    </Typography>
                  </Box>
                  <Box
                    padding={{ xs: "6px", sm: "12px" }}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontWeight={"500"}
                      fontSize={"13px"}
                      color="#58728D"
                    >
                      Head Office Addresses::
                    </Typography>
                    <Typography
                      color="#243547"
                      fontWeight={"600"}
                      fontSize={"14px"}
                    >
                      C 208, Neelkanth Business Park, Nathani Road, Vidyavihar
                      West, Mumbai, Maharashtra 400086, India
                    </Typography>
                  </Box>
                </Box>
                <Box
                  flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}
                  padding={{ xs: "6px", sm: "12px" }}
                  flexDirection={"column"}
                  gap={"4px"}
                >
                  <Typography
                    fontWeight={"500"}
                    fontSize={"13px"}
                    color="#58728D"
                  >
                    Email ID:
                  </Typography>
                  <Typography
                    color="#243547"
                    fontWeight={"600"}
                    fontSize={"14px"}
                  >
                    {vendorData?.email}
                  </Typography>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* Key Contacts and Details Section */}
          <Accordion
            sx={{
              padding: "0px",
              borderBottom: "1px solid #6C849D2E",
            }}
            defaultExpanded
            elevation={0}
          >
            <AccordionSummary
              sx={{
                padding: "0px",
              }}
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "700", color: "#58728D", fontSize: "14px" }}
              >
                Key Contacts and Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                paddingX: "0px",
                paddingY: "0px",
              }}
            >
              <Box
                display="flex"
                flexWrap="wrap"
                gap={"16px"}
                sx={{ mb: "12px" }}
              >
                <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
                  <Box
                    padding={{ xs: "6px", sm: "12px" }}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontWeight={"500"}
                      fontSize={"13px"}
                      color="#58728D"
                    >
                      Name of Owner:
                    </Typography>
                    <Typography
                      color="#243547"
                      fontWeight={"600"}
                      fontSize={"14px"}
                    >
                      {vendorData?.ownerName}
                    </Typography>
                  </Box>
                  <Box
                    padding={{ xs: "6px", sm: "12px" }}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontWeight={"500"}
                      fontSize={"13px"}
                      color="#58728D"
                    >
                      Phone Number:
                    </Typography>
                    <Typography
                      color="#243547"
                      fontWeight={"600"}
                      fontSize={"14px"}
                    >
                      {vendorData?.phoneNumber}
                    </Typography>
                  </Box>
                  <Box
                    padding={{ xs: "6px", sm: "12px" }}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontWeight={"500"}
                      fontSize={"13px"}
                      color="#58728D"
                    >
                      Website:
                    </Typography>
                    <Typography
                      color="#243547"
                      fontWeight={"600"}
                      fontSize={"14px"}
                    >
                      <Link
                        href="https://www.dmacq.com"
                        target="_blank"
                        underline="hover"
                        color="primary"
                      >
                        www.dmacq.com
                      </Link>
                    </Typography>
                  </Box>
                </Box>
                <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
                  <Box
                    padding={{ xs: "6px", sm: "12px" }}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontWeight={"500"}
                      fontSize={"13px"}
                      color="#58728D"
                    >
                      Designation:
                    </Typography>
                    <Typography
                      color="#243547"
                      fontWeight={"600"}
                      fontSize={"14px"}
                    >
                      Director
                    </Typography>
                  </Box>
                  <Box
                    padding={{ xs: "6px", sm: "12px" }}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontWeight={"500"}
                      fontSize={"13px"}
                      color="#58728D"
                    >
                      Address:
                    </Typography>
                    <Typography
                      color="#243547"
                      fontWeight={"600"}
                      fontSize={"14px"}
                    >
                      {vendorData?.city}
                    </Typography>
                  </Box>
                  <Box
                    padding={{ xs: "6px", sm: "12px" }}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontWeight={"500"}
                      fontSize={"13px"}
                      color="#58728D"
                    >
                      Sector:
                    </Typography>
                    <Typography
                      color="#243547"
                      fontWeight={"600"}
                      fontSize={"14px"}
                    >
                      IT
                    </Typography>
                  </Box>
                </Box>
                <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
                  <Box
                    padding={{ xs: "6px", sm: "12px" }}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontWeight={"500"}
                      fontSize={"13px"}
                      color="#58728D"
                    >
                      Email ID:
                    </Typography>
                    <Typography
                      color="#243547"
                      fontWeight={"600"}
                      fontSize={"14px"}
                    >
                      {vendorData?.email}
                    </Typography>
                  </Box>
                  <Box
                    padding={{ xs: "6px", sm: "12px" }}
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"4px"}
                  >
                    <Typography
                      fontWeight={"500"}
                      fontSize={"13px"}
                      color="#58728D"
                    >
                      Aadhaar Card:
                    </Typography>
                    <Typography
                      color="#243547"
                      fontWeight={"600"}
                      fontSize={"14px"}
                    >
                      <Link href="#" underline="hover" color="primary">
                        {vendorData?.aadharCard}
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

          {/* Additional Sections (Expandable) */}
          <Accordion
            sx={{
              padding: "0px",
              borderBottom: "1px solid #6C849D2E",
            }}
            defaultExpanded
            elevation={0}
          >
            <AccordionSummary
              sx={{
                padding: "0px",
              }}
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "700", color: "#58728D", fontSize: "14px" }}
              >
                Organizational Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "0px 0px 10px 0px" }}>
              <Typography>
                Additional organizational information goes here...
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            sx={{
              paddingX: "0",
            }}
            defaultExpanded
            elevation={0}
          >
            <AccordionSummary
              sx={{
                padding: "0px",
              }}
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "700", color: "#58728D", fontSize: "14px" }}
              >
                Key Contacts and Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ padding: "0px 0px 30px 0px" }}>
              <Typography>More key contacts and details go here...</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box sx={{ display: "flex" }}>
          {/* Conditional Box on the right side */}
          <PendingDisput isVisible={isBoxVisible} onClose={handleCloseDrawer} />
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
                background: selectedIcon === "sms" ? "#EAE7FA" : "transparent",
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
    </Dialog>
  );
};

export default VendorPopup;
