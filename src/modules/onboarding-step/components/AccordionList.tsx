import React from 'react'
import { Box } from '@mui/material'
import AccordionComponent from './AccordionComponent'
import VendorBasicDetails from './steps/VendorBasicDetails'
import PanGstDetails from './steps/PanGstDetails'
import AddressDetails from './steps/AddressDetails'
import MsmeDetails from './steps/MsmeDetails'
import BankPaymentDetails from './steps/BankPaymentDetails'
import ContactDetails from './steps/ContactDetails'
import TaxDetails from './steps/TaxDetails'
import Attachment from './steps/Attachment'

const AccordionList: React.FC = () => {
    return (
        <Box>
            <AccordionComponent id="vendor-basic-details" title="1. Vendor Basic Details">
                <VendorBasicDetails />
            </AccordionComponent>
            <AccordionComponent id="pan-gst-details" title="2. Pan & GST Details">
                <PanGstDetails />
            </AccordionComponent>
            <AccordionComponent id="address-details" title="3. Address Details">
                <AddressDetails />
            </AccordionComponent>
            <AccordionComponent id="msme-details" title="4. MSME Details">
                <MsmeDetails />
            </AccordionComponent>
            <AccordionComponent id="bank-payment-details" title="5. Bank & Payment Details">
                <BankPaymentDetails />
            </AccordionComponent>
            <AccordionComponent id="contact-details" title="6. Contact Details">
                <ContactDetails />
            </AccordionComponent>
            <AccordionComponent id="tax-details" title="7. Tax Details">
                <TaxDetails />
            </AccordionComponent>
            <AccordionComponent id="attachment" title="8. Attachment" isLast>
                <Attachment />
            </AccordionComponent>
        </Box>
    )
}

export default AccordionList
