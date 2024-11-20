import React, { FC } from "react";
import { SubmissionData } from "../data/TableData";
import AccordionSection from "./AccordionSection";

interface VendorPopupAccordionProps {
  vendorData: SubmissionData | null;
}

const VendorPopupAccordion: FC<VendorPopupAccordionProps> = ({
  vendorData,
}) => {
  if (!vendorData) return null;

  return <AccordionSection vendorData={vendorData} />;
};

export default VendorPopupAccordion;
