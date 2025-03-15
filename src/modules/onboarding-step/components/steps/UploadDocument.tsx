import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import Image from 'next/image';

interface RequiredIndicatorProps {
    required?: boolean;
}

const RequiredIndicator: React.FC<RequiredIndicatorProps> = ({ required }) => {
    return required ? <span style={{ color: '#D44A4A' }}>*</span> : null;
};

interface UploadDocumentProps {
    label: string;
    required?: boolean;
}

const UploadDocument: React.FC<UploadDocumentProps> = ({ label, required = false }) => {
    const [fileName, setFileName] = useState<string | null>(null);
    const [filePreview, setFilePreview] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            if (file.type === 'application/pdf') {
                setFileName(file.name);
                const reader = new FileReader();
                reader.onloadend = () => {
                    setFilePreview(reader.result as string);
                };
                reader.readAsDataURL(file);
            } else {
                alert('Only .pdf files are allowed.');
                setFileName(null);
                setFilePreview(null);
            }
        }
    };

    return (
        <Box>
            <Typography sx={{ color: "#2F4256", fontSize: "13px", fontWeight: 500, lineHeight: "18px", marginBottom: "8px" }}>
                {label}<RequiredIndicator required={required} />
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Button
                    component="label"
                    startIcon={<Image src="/assets/upload-document.svg" alt='upload-document' width={24} height={24} />}
                    sx={{ display: 'flex', alignItems: 'center', border: "1px solid #5D4AD43D", borderRadius: '8px', width: "190px", height: "44px", color: "#4838B0", fontSize: "14px", fontWeight: 600, lineHeight: "20px", textTransform: "capitalize" }}
                >
                    Upload Document
                    <input type="file" hidden onChange={handleFileChange} />
                </Button>

                <Typography variant="body2" sx={{ color: "#58728D", fontSize: "13px", fontWeight: 500, lineHeight: "18px" }}>
                    Only .pdf files allowed. Max size 2 MB.
                </Typography>
            </Box>
            {fileName && (
                <Typography variant="body2" color="textSecondary" sx={{ color: "#58728D", fontSize: "13px", fontWeight: 500, lineHeight: "18px", marginTop: "6px" }}>
                    Uploaded: {fileName}
                </Typography>
            )}
            {filePreview && (
                <Box sx={{ marginTop: 2 }}>
                    <embed src={filePreview} type="application/pdf" width="100%" height="200px" />
                </Box>
            )}
        </Box>
    );
};

export default UploadDocument;
