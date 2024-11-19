import React, { FC } from "react";
import AccordionSection from "../Molecule/AccordionSection";
import { SubmissionData } from "../Data/TableData";

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
