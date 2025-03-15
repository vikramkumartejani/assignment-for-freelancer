import React from 'react';
import { Box } from '@mui/material';
import UploadDocument from './UploadDocument';

const Attachment: React.FC = () => {
    return (
        <Box sx={{display:"flex", flexDirection:"column", gap:"20px"}}>
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
};

export default Attachment;
