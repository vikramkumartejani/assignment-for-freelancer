import React, { FC } from "react";
import {
  Button,
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Slide,
  DialogContent,
  IconButton,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";

interface VendorPopupProps {
  open: boolean;
  onClose: () => void;
  vendorName: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const VendorPopup: FC<VendorPopupProps> = ({ open, onClose, vendorName }) => {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      {/* AppBar Header */}
      <AppBar
        sx={{ position: "relative", bgcolor: "#f8f9fa", color: "#000" }}
        elevation={0}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {vendorName}
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <TextField
              placeholder="Search"
              variant="outlined"
              size="small"
              sx={{ width: 200, mx: 2 }}
            />
            <Button variant="outlined" sx={{ mr: 1 }}>
              Edit
            </Button>
            <Button variant="outlined" color="warning" sx={{ mr: 1 }}>
              Dispute
            </Button>
            <Button variant="outlined" color="error" sx={{ mr: 1 }}>
              Reject
            </Button>
            <Button variant="outlined" color="success" sx={{ mr: 1 }}>
              Approve
            </Button>
            <IconButton edge="end" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Dialog Content */}
      <DialogContent sx={{ p: 3 }}>
        {/* Vendor Information Section */}
        <Accordion defaultExpanded elevation={0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "700", color: "#2F4256", fontSize: "14px" }}
            >
              Vendor Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              display="flex"
              flexWrap="wrap"
              gap={"16px"}
              sx={{ mb: "12px" }}
            >
              <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
                <Box
                  padding={"12px"}
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
                    dMACQ Software
                  </Typography>
                </Box>
                <Box
                  padding={"12px"}
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
                  padding={"12px"}
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
                  padding={"12px"}
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
                padding={"12px"}
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
                  info@dmacq.com
                </Typography>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Key Contacts and Details Section */}
        <Accordion defaultExpanded elevation={0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "700", color: "#2F4256", fontSize: "14px" }}
            >
              Key Contacts and Details
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              display="flex"
              flexWrap="wrap"
              gap={"16px"}
              sx={{ mb: "12px" }}
            >
              <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
                <Box
                  padding={"12px"}
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
                    SRIKANT KRISHNAN
                  </Typography>
                </Box>
                <Box
                  padding={"12px"}
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
                    +91 9999102950
                  </Typography>
                </Box>
                <Box
                  padding={"12px"}
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
                  padding={"12px"}
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
                  padding={"12px"}
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
                    611, Hermes Manor, 17 Asha Nagar RD, No3 Pestom Sagar, Opp
                    Shopper Stop, Chembur, Mumbai 400089
                  </Typography>
                </Box>
                <Box
                  padding={"12px"}
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
                  padding={"12px"}
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
                    srinav@gmail.com
                  </Typography>
                </Box>
                <Box
                  padding={"12px"}
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
                      Adharcard.pdf
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* Additional Sections (Expandable) */}
        <Accordion defaultExpanded elevation={0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "700", color: "#2F4256", fontSize: "14px" }}
            >
              Organizational Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Additional organizational information goes here...
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded elevation={0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "700", color: "#2F4256", fontSize: "14px" }}
            >
              Key Contacts and Details
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>More key contacts and details go here...</Typography>
          </AccordionDetails>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
};

export default VendorPopup;
