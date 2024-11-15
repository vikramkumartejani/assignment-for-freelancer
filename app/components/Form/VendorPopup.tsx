import React, { FC } from "react";
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

interface VendorPopupProps {
  open: boolean;
  onClose: () => void;
  vendorData: SubmissionData | null;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const VendorPopup: FC<VendorPopupProps> = ({ open, onClose, vendorData }) => {
  return (
    <Dialog
      fullScreen
      open={open}
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
          <Box display="flex" alignItems="center" gap={"12px"}>
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
                  height: "40px",
                  borderRadius: "8px",
                },
              }}
              sx={{
                width: "300px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
                "& fieldset": {
                  borderColor: "#E0E3EB",
                },
              }}
            />

            <Button
              variant="outlined"
              className="edit-btn"
              sx={{
                gap: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src="/assets/note_alt.png" alt="" />
              Edit
            </Button>
            <Button variant="contained" color="warning">
              Dispute
            </Button>
            <Button variant="contained" color="error">
              Reject
            </Button>
            <Button variant="contained" color="success">
              Approve
            </Button>
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
        }}
      >
        <Box
          sx={{
            paddingX: {
              xs: "15px !important",
              sm: "16px !important",
              md: "24px !important",
            }, // Add !important to ensure the styles are applied
          }}
        >
          {/* Vendor Information Section */}
          <Accordion
            defaultExpanded
            elevation={0}
            sx={{
              paddingX: "0 !important",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{
                paddingX: "0 !important",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "700", color: "#2F4256", fontSize: "14px" }}
              >
                Vendor Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                paddingX: "0 !important",
                paddingY: 0,
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
              paddingX: "0",
            }}
            defaultExpanded
            elevation={0}
          >
            <AccordionSummary
              sx={{
                paddingX: "0",
              }}
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "700", color: "#2F4256", fontSize: "14px" }}
              >
                Key Contacts and Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                paddingX: "0",
                paddingY: "0",
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
              paddingX: "0",
            }}
            defaultExpanded
            elevation={0}
          >
            <AccordionSummary
              sx={{
                paddingX: "0",
              }}
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "700", color: "#2F4256", fontSize: "14px" }}
              >
                Organizational Information
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                paddingX: "0",
              }}
            >
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
                paddingX: "0",
              }}
              expandIcon={<ExpandMoreIcon />}
            >
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "700", color: "#2F4256", fontSize: "14px" }}
              >
                Key Contacts and Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                paddingX: "0",
              }}
            >
              <Typography>More key contacts and details go here...</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box
          sx={{
            paddingX: "8px",
            paddingY: "16px",
            background: "#F1F5FA",
            width: "40px !important",
            minWidth: "40px !important",
          }}
        >
          <img src="/assets/preview.png" alt="" className="mb-[16px]" />
          <img src="/assets/history.png" alt="" />
        </Box>
      </Box>
    </Dialog>
  );
};

export default VendorPopup;
