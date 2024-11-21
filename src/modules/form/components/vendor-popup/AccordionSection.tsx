import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SubmissionData } from "../data/TableData";
import TypographyAtom from "@/src/components/TypographyAtom";
import InfoBox from "./InfoBox";

const cleanValue = (value: React.ReactNode) => {
  if (typeof value === "string") {
    return value.replace(/,+$/, "").trim();
  }

  if (Array.isArray(value)) {
    return value.join(", ").replace(/,+$/, "").trim();
  }

  return value;
};

interface AccordionSectionProps {
  vendorData: SubmissionData;
}

const accordionStyles = {
  padding: {
    xs: "0px 12px",
    md: "0px 24px",
  },
  borderBottom: "1px solid #6C849D2E",
  minHeight: "auto",
  "&.MuiAccordion-root::before": {
    display: "none ",
  },
  "&.MuiAccordion-root::after": {
    display: "none ",
  },
  "&.Mui-expanded": {
    minHeight: "auto",
    margin: "0px !important",
  },
};

const accordionSummaryStyles = {
  padding: "0px",
  minHeight: "auto",
  "&.Mui-expanded": {
    minHeight: "auto",
  },
  "&.MuiAccordion-root::before": {
    display: "none ",
  },
  "& .MuiAccordionSummary-content": {
    margin: "0px !important",
    padding: "12px 0 12px 0",
  },
};

const accordionDetailsStyles = {
  padding: "0px",
  margin: "0",
};

const AccordionSection: React.FC<AccordionSectionProps> = ({ vendorData }) => {
  return (
    <Box sx={{ height: "100%", marginTop: "0" }}>
      {/* Vendor Information Accordion */}
      <Accordion defaultExpanded elevation={0} sx={accordionStyles}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyles}
        >
          <TypographyAtom
            text="Vendor Information"
            variant="subtitle1"
            sx={{
              color: "#58728D",
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "20px",
            }}
          />
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyles}>
          <Box display="flex" flexWrap="wrap" gap={"16px"} sx={{ mb: "12px" }}>
            <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
              <InfoBox
                label="Name of Vendor"
                value={cleanValue(vendorData?.vendorName)}
              />
              <InfoBox
                label="Registered Office Address"
                value={cleanValue(
                  "C 208, Neelkanth Business Park, Mumbai, India"
                )}
              />
            </Box>
            <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
              <InfoBox
                label="Category of Products"
                value={cleanValue("Service")}
              />
              <InfoBox
                label="Head Office Address"
                value={cleanValue(
                  "C 208, Neelkanth Business Park, Mumbai, India"
                )}
              />
            </Box>
            <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
              <InfoBox label="Email ID" value={cleanValue(vendorData?.email)} />
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      {/* Key Contacts Accordion */}
      <Accordion defaultExpanded elevation={0} sx={accordionStyles}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyles}
        >
          <TypographyAtom
            text="Key Contacts and Details"
            variant="subtitle1"
            sx={{
              color: "#58728D",
              fontWeight: "700",
              fontSize: "14px",

              lineHeight: "20px",
            }}
          />
        </AccordionSummary>
        <AccordionDetails sx={accordionDetailsStyles}>
          <Box display="flex" flexWrap="wrap" gap={"16px"} sx={{ mb: "12px" }}>
            <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
              <InfoBox
                label="Name of Owner"
                value={cleanValue(vendorData?.ownerName)}
              />
              <InfoBox
                label="Phone Number"
                value={cleanValue(vendorData?.phoneNumber)}
              />
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
              <InfoBox label="Designation" value={cleanValue("Director")} />
              <InfoBox label="Address" value={cleanValue(vendorData?.city)} />
              <InfoBox label="Sector" value={cleanValue("IT")} />
            </Box>
            <Box flexBasis={{ xs: "100%", sm: "48%", md: "32%" }}>
              <InfoBox label="Email ID" value={cleanValue(vendorData?.email)} />
              <InfoBox
                label="Aadhaar Card"
                value={
                  <Link href="#" underline="hover" color="primary">
                    {cleanValue(vendorData?.aadharCard)}
                  </Link>
                }
              />
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded elevation={0} sx={accordionStyles}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyles}
        >
          <TypographyAtom
            text="Organizational Information"
            variant="subtitle1"
            sx={{
              color: "#2F4256",
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "20px",
            }}
          />
        </AccordionSummary>
        <AccordionDetails
          sx={accordionDetailsStyles}
          style={{ paddingBottom: "12px" }}
        >
          <TypographyAtom
            text=" Additional organizational information goes here..."
            variant="subtitle1"
            color="#58728D"
          />
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded elevation={0} sx={accordionStyles}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyles}
        >
          <TypographyAtom
            text="Key contacts and details"
            variant="subtitle1"
            sx={{
              color: "#2F4256",
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "20px",
            }}
          />
        </AccordionSummary>
        <AccordionDetails
          sx={accordionDetailsStyles}
          style={{ paddingBottom: "12px" }}
        >
          <TypographyAtom
            text=" Additional key contacts and details goes here..."
            variant="subtitle1"
            color="#58728D"
          />
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded elevation={0} sx={accordionStyles}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyles}
        >
          <TypographyAtom
            text="Key contacts and details"
            variant="subtitle1"
            sx={{
              color: "#2F4256",
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "20px",
            }}
          />
        </AccordionSummary>
        <AccordionDetails
          sx={accordionDetailsStyles}
          style={{ paddingBottom: "12px" }}
        >
          <TypographyAtom
            text=" Additional key contacts and details goes here..."
            variant="subtitle1"
            color="#58728D"
          />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default AccordionSection;
