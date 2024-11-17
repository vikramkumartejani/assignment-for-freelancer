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

// Define the component props type
interface VendorPopupAccordionProps {
  vendorData: SubmissionData | null;
}

export const VendorPopupAccordion: FC<VendorPopupAccordionProps> = ({
  vendorData,
}) => {
  if (!vendorData) {
    return null; // Or handle the null case as needed
  }
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
        <AccordionDetails
          sx={{
            padding: "0px",
          }}
        >
          <Box display="flex" flexWrap="wrap" gap={"16px"} sx={{ mb: "12px" }}>
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
                  C 208, Neelkanth Business Park, Nathani Road, Vidyavihar West,
                  Mumbai, Maharashtra 400086, India
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
                  C 208, Neelkanth Business Park, Nathani Road, Vidyavihar West,
                  Mumbai, Maharashtra 400086, India
                </Typography>
              </Box>
            </Box>
            <Box
              flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}
              padding={{ xs: "6px", sm: "12px" }}
              flexDirection={"column"}
              gap={"4px"}
            >
              <Typography fontWeight={"500"} fontSize={"13px"} color="#58728D">
                Email ID:
              </Typography>
              <Typography color="#243547" fontWeight={"600"} fontSize={"14px"}>
                {vendorData?.email}
              </Typography>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Key Contacts and Details Section */}
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
            padding: "0px",
            minHeight: "auto", // For the Accordion itself
            "&.Mui-expanded": {
              minHeight: "auto", // Ensures no fixed height when expanded
            },
            "& .MuiAccordionSummary-content": {
              margin: "16px 0", // Fixes content alignment when expanded
            },
          }}
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
          <Box display="flex" flexWrap="wrap" gap={"16px"} sx={{ mb: "12px" }}>
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
            padding: "0px",
            minHeight: "auto", // For the Accordion itself
            "&.Mui-expanded": {
              minHeight: "auto", // Ensures no fixed height when expanded
            },
            "& .MuiAccordionSummary-content": {
              margin: "16px 0", // Fixes content alignment when expanded
            },
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
            padding: "0px",
            minHeight: "auto", // For the Accordion itself
            "&.Mui-expanded": {
              minHeight: "auto", // Ensures no fixed height when expanded
            },
            "& .MuiAccordionSummary-content": {
              margin: "16px 0", // Fixes content alignment when expanded
            },
          }}
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
