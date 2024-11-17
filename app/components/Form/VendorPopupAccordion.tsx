import React, { FC } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SubmissionData } from "./TableData";

// Define reusable styling
const sectionStyles = {
  padding: { xs: "6px", sm: "12px" },
  display: "flex",
  flexDirection: "column",
  gap: "4px",
};

const titleStyles = { fontWeight: "500", fontSize: "13px", color: "#58728D" };
const contentStyles = { color: "#243547", fontWeight: "600", fontSize: "14px" };

// Reusable Component for Vendor Information/Key Contacts
const InfoBox: FC<{ label: string; value: React.ReactNode }> = ({
  label,
  value,
}) => (
  <Box sx={sectionStyles}>
    <Typography sx={titleStyles}>{label}:</Typography>
    <Typography sx={contentStyles}>{value}</Typography>
  </Box>
);

// Vendor Popup Accordion Component
interface VendorPopupAccordionProps {
  vendorData: SubmissionData | null;
}

export const VendorPopupAccordion: FC<VendorPopupAccordionProps> = ({
  vendorData,
}) => {
  if (!vendorData) return null; // Handle null case

  const accordionStyles = {
    padding: "0px",
    borderBottom: "1px solid #6C849D2E",
    minHeight: "auto", // For the Accordion itself
    "&.Mui-expanded": {
      minHeight: "auto", // Ensures no fixed height when expanded
    },
  };
  const accordionSummaryStyles = {
    padding: "0px",
    minHeight: "auto", // For the Accordion itself
    "&.Mui-expanded": {
      minHeight: "auto", // Ensures no fixed height when expanded
    },
    "& .MuiAccordionSummary-content": {
      margin: "16px 0", // Fixes content alignment when expanded
    },
  };

  return (
    <Box sx={{ height: "100%" }}>
      {/* Vendor Information Section */}
      <Accordion
        defaultExpanded
        elevation={0}
        sx={{
          padding: "0px",
          borderBottom: "1px solid #6C849D2E",
          minHeight: "auto", // For the Accordion itself
          "&.Mui-expanded": {
            minHeight: "auto", // Ensures no fixed height when expanded
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            padding: "16px 0px",
            minHeight: "auto", // For the Accordion itself
            "&.Mui-expanded": {
              minHeight: "auto", // Ensures no fixed height when expanded
            },
            "& .MuiAccordionSummary-content": {
              margin: "0", // Fixes content alignment when expanded
            },
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "700", color: "#58728D", fontSize: "14px" }}
          >
            Vendor Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <Box display="flex" flexWrap="wrap" gap={"16px"} sx={{ mb: "12px" }}>
            <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
              <InfoBox label="Name of Vendor" value={vendorData?.vendorName} />
              <InfoBox
                label="Registered Office Address"
                value="C 208, Neelkanth Business Park, Nathani Road, Vidyavihar West, Mumbai, Maharashtra 400086, India"
              />
            </Box>
            <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
              <InfoBox label="Category of Products" value="Service" />
              <InfoBox
                label="Head Office Address"
                value="C 208, Neelkanth Business Park, Nathani Road, Vidyavihar West, Mumbai, Maharashtra 400086, India"
              />
            </Box>
            <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
              <InfoBox label="Email ID" value={vendorData?.email} />
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Key Contacts Section */}
      <Accordion defaultExpanded elevation={0} sx={{ ...accordionStyles }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            ...accordionSummaryStyles,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "700", color: "#58728D", fontSize: "14px" }}
          >
            Key Contacts and Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <Box display="flex" flexWrap="wrap" gap={"16px"} sx={{ mb: "12px" }}>
            <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
              <InfoBox label="Name of Owner" value={vendorData?.ownerName} />
              <InfoBox label="Phone Number" value={vendorData?.phoneNumber} />
              <InfoBox
                label="Website"
                value={
                  <Link
                    href="https://www.dmacq.com"
                    target="_blank"
                    underline="hover"
                    color="primary"
                  >
                    www.dmacq.com
                  </Link>
                }
              />
            </Box>
            <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
              <InfoBox label="Designation" value="Director" />
              <InfoBox label="Address" value={vendorData?.city} />
              <InfoBox label="Sector" value="IT" />
            </Box>
            <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
              <InfoBox label="Email ID" value={vendorData?.email} />
              <InfoBox
                label="Aadhaar Card"
                value={
                  <Link href="#" underline="hover" color="primary">
                    {vendorData?.aadharCard}
                  </Link>
                }
              />
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Additional Sections */}
      <Accordion
        defaultExpanded
        elevation={0}
        sx={{
          ...accordionStyles,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            ...accordionSummaryStyles,
          }}
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

      <Accordion defaultExpanded elevation={0} sx={{ ...accordionStyles }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ ...accordionSummaryStyles }}
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
  );
};
