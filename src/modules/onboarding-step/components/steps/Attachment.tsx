import React from 'react';
import { Box } from '@mui/material';
import AttachmentRequiredDoc from './AttachmentRequiredDoc';

interface AttachmentProps {
    businessType: string | null;
}

const Attachment: React.FC<AttachmentProps> = ({ businessType }) => {
    return (
        <Box>
            {businessType && <AttachmentRequiredDoc businessType={businessType} />}
        </Box>
    );
};

export default Attachment;
