import { Box } from '@mui/material';
import React from 'react';
import UploadDocument from './UploadDocument';

interface AttachmentRequiredDocProps {
    businessType: string;
}

const AttachmentRequiredDoc: React.FC<AttachmentRequiredDocProps> = ({ businessType }) => {
    const renderDocuments = () => {
        switch (businessType) {
            case "Individual":
                return (
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <UploadDocument label="Vendor Financials Form for due diligence" />
                        <UploadDocument label="MSME Certificate" />
                        <UploadDocument label="Pan Card Copy" />
                        <UploadDocument label="GST-if available" />
                        <UploadDocument label="Address Proof (in case GST Certificate does not contain it)" />
                        <UploadDocument label="Aadhar Card Copy" />
                        <UploadDocument label="Resume" />
                        <UploadDocument label="ITR Copy-Last three year" />
                        <UploadDocument label="Individual's CIBIL score" />
                        <UploadDocument label="Three references with contact details" />
                        <UploadDocument label="Supplier code of conduct-require authorized person sign & company stamp on all pages." />
                        <UploadDocument label="Related party/disclosure of interest confirmation" />
                    </Box>
                );
            case "Proprietorship":
                return (
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <UploadDocument label="Vendor Financials Form for due diligence" />
                        <UploadDocument label="MSME Certificate" />
                        <UploadDocument label="Company PAN" />
                        <UploadDocument label="GST-if available" />
                        <UploadDocument label="Address Proof (in case GST Certificate does not contain it)" />
                        <UploadDocument label="TAN" />
                        <UploadDocument label="Cancelled cheque" />
                        <UploadDocument label="Balance sheet and profit and loss account for last three year" />
                        <UploadDocument label="Individual's CIBIL score" />
                        <UploadDocument label="Three references with contact details" />
                        <UploadDocument label="Supplier code of conduct-require authorized person sign & company stamp on all pages." />
                        <UploadDocument label="Related party/disclosure of interest confirmation" />
                    </Box>
                );
            case "Partnership":
                return (
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <UploadDocument label="Vendor Financials Form for due diligence" />
                        <UploadDocument label="MSME Certificate" />
                        <UploadDocument label="Company PAN" />
                        <UploadDocument label="GST-if available" />
                        <UploadDocument label="Address Proof (in case GST Certificate does not contain it)" />
                        <UploadDocument label="TAN" />
                        <UploadDocument label="Cancelled cheque" />
                        <UploadDocument label="Balance sheet and profit and loss account for last three year" />
                        <UploadDocument label="Partner's CIBIL score" />
                        <UploadDocument label="Three references with contact details" />
                        <UploadDocument label="Supplier code of conduct-require authorized person sign & company stamp on all pages." />
                        <UploadDocument label="Partnership Deed" />
                        <UploadDocument label="Related party/disclosure of interest confirmation" />
                    </Box>
                );
            case "Private Limited":
            case "Public Limited":
                return (
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <UploadDocument label="Vendor Financials Form for due diligence" />
                        <UploadDocument label="MSME Certificate" />
                        <UploadDocument label="Company PAN" />
                        <UploadDocument label="GST-if available" />
                        <UploadDocument label="Address Proof (in case GST Certificate does not contain it)" />
                        <UploadDocument label="TAN" />
                        <UploadDocument label="Cancelled cheque" />
                        <UploadDocument label="Balance sheet and profit and loss account for last three year" />
                        <UploadDocument label="Three references with contact details" />
                        <UploadDocument label="Supplier code of conduct-require authorized person sign & company stamp on all pages." />
                        <UploadDocument label="Incorporate Certificate" />
                        <UploadDocument label="Related party/disclosure of interest confirmation" />
                    </Box>
                );
            case "Foreign":
                return (
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <UploadDocument label="Vendor Financials Form for due diligence" />
                        <UploadDocument label="MSME Certificate" />
                        <UploadDocument label="Company PAN" />
                        <UploadDocument label="GST-if available" />
                        <UploadDocument label="Address Proof (in case GST Certificate does not contain it)" />
                        <UploadDocument label="TAN" />
                        <UploadDocument label="Cancelled cheque" />
                        <UploadDocument label="Balance sheet and profit and loss account for last three year" />
                        <UploadDocument label="Three references with contact details" />
                        <UploadDocument label="Supplier code of conduct-require authorized person sign & company stamp on all pages." />
                        <UploadDocument label="Registration Certificate" />
                        <UploadDocument label="Upload Form 10 F" />
                        <UploadDocument label="No Permanent Establishment Certificate" />
                        <UploadDocument label="Tax Residential certificate" />
                        <UploadDocument label="Related party/disclosure of interest confirmation" />
                    </Box>
                );
            case "Vendor":
                return (
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <UploadDocument label="GST Certificate" />
                        <UploadDocument label="Pan Card" />
                        <UploadDocument label="Aadhar Card" />
                        <UploadDocument label="MOA" />
                        <UploadDocument label="AOA" />
                        <UploadDocument label="MSME Certificate" />
                        <UploadDocument label="Dentsu Supplier Code of Conduct" />
                        <UploadDocument label="Registration Certificate" />
                    </Box>
                );
            default:
                return null;
        }
    };

    return <Box>{renderDocuments()}</Box>;
};

export default AttachmentRequiredDoc;