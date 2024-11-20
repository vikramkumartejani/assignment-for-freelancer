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

const accordionStyles = {
  padding: "0px",
  borderBottom: "1px solid #6C849D2E",
  minHeight: "auto",
  "&.Mui-expanded": {
    minHeight: "auto",
  },
};

const accordionSummaryStyles = {
  padding: "0px",
  minHeight: "auto",
  "&.Mui-expanded": {
    minHeight: "auto",
  },
  "& .MuiAccordionSummary-content": {
    margin: "16px 0",
  },
};

interface AccordionSectionProps {
  vendorData: SubmissionData;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({ vendorData }) => {
  return (
    <Box sx={{ height: "100%" }}>
      {/* Vendor Information Accordion */}
      <Accordion defaultExpanded elevation={0} sx={accordionStyles}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyles}
        >
          <TypographyAtom
            text="Vendor Information"
            variant="subtitle1"
            color="#58728D"
          />
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
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
            color="#58728D"
          />
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
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

      {/* Additional Organizational Information Accordion */}
      <Accordion defaultExpanded elevation={0} sx={accordionStyles}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={accordionSummaryStyles}
        >
          <TypographyAtom
            text="Organizational Information"
            variant="subtitle1"
            color="#58728D"
          />
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px 0px 10px 0px" }}>
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
            color="#58728D"
          />
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px 0px 10px 0px" }}>
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
            color="#58728D"
          />
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0px 0px 10px 0px" }}>
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
