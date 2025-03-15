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
            <AccordionComponent title="1. Vendor Basic Details">
                <VendorBasicDetails />
            </AccordionComponent>
            <AccordionComponent title="2. Pan & GST Details">
                <PanGstDetails />
            </AccordionComponent>
            <AccordionComponent title="3. Address Details">
                <AddressDetails />
            </AccordionComponent>
            <AccordionComponent title="4. MSME Details">
                <MsmeDetails />
            </AccordionComponent>
            <AccordionComponent title="5. Bank & Payment Details">
                <BankPaymentDetails />
            </AccordionComponent>
            <AccordionComponent title="6. Contact Details">
                <ContactDetails />
            </AccordionComponent>
            <AccordionComponent title="7. Tax Details">
                <TaxDetails />
            </AccordionComponent>
            <AccordionComponent title="8. Attachment" isLast>
                <Attachment />
            </AccordionComponent>
        </Box>
    )
}

export default AccordionList
