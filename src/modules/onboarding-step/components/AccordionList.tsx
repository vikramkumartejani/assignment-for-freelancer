import React, { useState } from 'react';
import { Box } from '@mui/material';
import AccordionComponent from './AccordionComponent';
import VendorBasicDetails from './steps/VendorBasicDetails';
import PanGstDetails from './steps/PanGstDetails';
import AddressDetails from './steps/AddressDetails';
import MsmeDetails from './steps/MsmeDetails';
import BankPaymentDetails from './steps/BankPaymentDetails';
import ContactDetails from './steps/ContactDetails';
import TaxDetails from './steps/TaxDetails';
import Attachment from './steps/Attachment';

interface AccordionListProps {
    expanded: string | false;
    handleExpand: (id: string) => void;
}

const AccordionList: React.FC<AccordionListProps> = ({ expanded }) => {
    const [businessType, setBusinessType] = useState<string | null>(null);

    return (
        <Box>
            <AccordionComponent id="vendor-basic-details" title="1. Vendor Basic Details" expanded={expanded === "vendor-basic-details"}>
                <VendorBasicDetails businessType={businessType} setBusinessType={setBusinessType} />
            </AccordionComponent>
            <AccordionComponent id="pan-gst-details" title="2. Pan & GST Details" expanded={expanded === "pan-gst-details"}>
                <PanGstDetails />
            </AccordionComponent>
            <AccordionComponent id="address-details" title="3. Address Details" expanded={expanded === "address-details"}>
                <AddressDetails />
            </AccordionComponent>
            <AccordionComponent id="msme-details" title="4. MSME Details" expanded={expanded === "msme-details"}>
                <MsmeDetails />
            </AccordionComponent>
            <AccordionComponent id="bank-payment-details" title="5. Bank & Payment Details" expanded={expanded === "bank-payment-details"}>
                <BankPaymentDetails />
            </AccordionComponent>
            <AccordionComponent id="contact-details" title="6. Contact Details" expanded={expanded === "bank-details"}>
                <ContactDetails />
            </AccordionComponent>
            <AccordionComponent id="tax-details" title="7. Tax Details" expanded={expanded === "tax-details"}>
                <TaxDetails />
            </AccordionComponent>
            <AccordionComponent id="attachment" title="8. Attachment" isLast expanded={expanded === "attachment"}>
                <Attachment businessType={businessType} />
            </AccordionComponent>
        </Box>
    );
};

export default AccordionList;
